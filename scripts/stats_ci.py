#!/usr/bin/env python3
"""Calculate intervals from verified counts and paired tests from saved predictions.

Input CSV for baselines: model,tp,fp,positives,negatives.
Input CSV for McNemar: document_id,original_correct,hybrid_correct (0 or 1).
No project counts are embedded here: pass values checked against experiment outputs.
"""

import argparse
import csv
import math


def wilson(successes, trials, z=1.959963984540054):
    if trials <= 0 or not 0 <= successes <= trials:
        raise ValueError("expected 0 <= successes <= trials and trials > 0")
    p = successes / trials
    denominator = 1 + z * z / trials
    center = (p + z * z / (2 * trials)) / denominator
    margin = z * math.sqrt(p * (1 - p) / trials + z * z / (4 * trials * trials)) / denominator
    return center - margin, center + margin


def baseline_intervals(tp, fp, positives, negatives):
    if positives <= 0 or negatives <= 0 or min(tp, fp) < 0 or tp > positives or fp > negatives:
        raise ValueError("invalid confusion-matrix counts")
    tn = negatives - fp
    return {
        "accuracy": wilson(tp + tn, positives + negatives),
        "precision": wilson(tp, tp + fp) if tp + fp else None,
        "recall": wilson(tp, positives),
    }


def mcnemar_exact(original_correct, hybrid_correct):
    if len(original_correct) != len(hybrid_correct) or not original_correct:
        raise ValueError("paired, nonempty predictions required")
    if any(value not in (0, 1) for value in (*original_correct, *hybrid_correct)):
        raise ValueError("correctness must be 0 or 1")
    improved = sum(a == 0 and b == 1 for a, b in zip(original_correct, hybrid_correct))
    worsened = sum(a == 1 and b == 0 for a, b in zip(original_correct, hybrid_correct))
    discordant = improved + worsened
    if not discordant:
        return improved, worsened, 1.0
    tail = sum(math.comb(discordant, k) for k in range(min(improved, worsened) + 1))
    return improved, worsened, min(1.0, 2 * tail / (2 ** discordant))


def far_bounds(impostor_comparisons, gallery_size):
    if impostor_comparisons <= 0 or gallery_size <= 0:
        raise ValueError("positive comparison count and gallery size required")
    # Rule of three is approximate and applies only after zero observed accepts.
    upper_1_to_1 = min(1.0, 3 / impostor_comparisons)
    upper_1_to_n = -math.expm1(gallery_size * math.log1p(-upper_1_to_1)) if upper_1_to_1 < 1 else 1.0
    return upper_1_to_1, upper_1_to_n


def read_rows(path):
    with open(path, newline="", encoding="utf-8") as handle:
        return list(csv.DictReader(handle))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    commands = parser.add_subparsers(dest="command", required=True)
    baseline = commands.add_parser("baselines", help="Wilson 95%% intervals from verified confusion-matrix CSV")
    baseline.add_argument("csv_file")
    paired = commands.add_parser("mcnemar", help="exact two-sided McNemar test from per-document CSV")
    paired.add_argument("csv_file")
    far = commands.add_parser("far", help="zero-accept rule-of-three bound; 1:N assumes independence")
    far.add_argument("impostor_comparisons", type=int)
    far.add_argument("gallery_size", type=int)
    args = parser.parse_args()

    if args.command == "baselines":
        for row in read_rows(args.csv_file):
            intervals = baseline_intervals(*(int(row[key]) for key in ("tp", "fp", "positives", "negatives")))
            parts = [f"{name}={low:.3f}–{high:.3f}" if pair else f"{name}=undefined"
                     for name, pair in intervals.items()
                     for low, high in ([pair] if pair else [(0, 0)])]
            print(f"{row['model']}: " + ", ".join(parts))
    elif args.command == "mcnemar":
        rows = read_rows(args.csv_file)
        identifiers = [row["document_id"] for row in rows]
        if len(set(identifiers)) != len(identifiers):
            raise ValueError("duplicate document_id")
        improved, worsened, p_value = mcnemar_exact(
            [int(row["original_correct"]) for row in rows],
            [int(row["hybrid_correct"]) for row in rows],
        )
        print(f"hybrid-only correct={improved}; original-only correct={worsened}; exact p={p_value:.6f}")
    else:
        low, high = far_bounds(args.impostor_comparisons, args.gallery_size)
        print(f"Approximate 95% upper bound with zero accepts: 1:1={low:.6g}; "
              f"1:N={high:.6g} (independence approximation)")


if __name__ == "__main__":
    main()
