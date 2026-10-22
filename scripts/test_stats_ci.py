import unittest

from stats_ci import baseline_intervals, far_bounds, mcnemar_exact, wilson


class StatsTests(unittest.TestCase):
    def test_wilson_oracles(self):
        for actual, expected in ((wilson(14, 20), (0.481, 0.855)),
                                 (wilson(56, 64), (0.772, 0.935))):
            for obtained, target in zip(actual, expected):
                self.assertAlmostEqual(obtained, target, delta=0.005)

    def test_baseline_denominators(self):
        intervals = baseline_intervals(14, 2, 20, 44)
        self.assertEqual(intervals["accuracy"], wilson(56, 64))
        self.assertEqual(intervals["precision"], wilson(14, 16))
        self.assertEqual(intervals["recall"], wilson(14, 20))
        self.assertIsNone(baseline_intervals(0, 0, 20, 44)["precision"])

    def test_exact_mcnemar_uses_pairs(self):
        self.assertEqual(mcnemar_exact([0, 0, 0, 1], [1, 1, 1, 1]), (3, 0, 0.25))
        self.assertEqual(mcnemar_exact([1, 0], [1, 0]), (0, 0, 1.0))

    def test_far_requires_denominators(self):
        with self.assertRaises(ValueError):
            far_bounds(0, 10)
        one_to_one, one_to_many = far_bounds(1000, 10)
        self.assertAlmostEqual(one_to_one, 0.003)
        self.assertGreater(one_to_many, one_to_one)


if __name__ == "__main__":
    unittest.main()
