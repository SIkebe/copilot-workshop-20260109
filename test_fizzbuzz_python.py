import unittest

from fizzbuzz import fizzbuzz


class FizzBuzzTest(unittest.TestCase):
    def test_fizzbuzz_values(self):
        self.assertEqual(fizzbuzz(15), "FizzBuzz")
        self.assertEqual(fizzbuzz(3), "Fizz")
        self.assertEqual(fizzbuzz(5), "Buzz")
        self.assertEqual(fizzbuzz(2), 2)
        self.assertEqual(fizzbuzz(19), 19)


if __name__ == "__main__":
    unittest.main()
