import unittest

from check_consistency import Page


class ConsistencyMutationTests(unittest.TestCase):
    def test_current_model_mutation_is_rejected(self):
        page = Page()
        page.feed('<p>InsightFace gera 512 dimensões na versão atual.</p>')
        self.assertTrue(page.legacy)

    def test_explicit_historical_label_is_allowed(self):
        page = Page()
        page.feed('<p>InsightFace histórico gerava 512 dimensões.</p>')
        self.assertFalse(page.legacy)


if __name__ == "__main__":
    unittest.main()
