import unittest
from fizzbuzz import fizzbuzz

class TestFizzBuzz(unittest.TestCase):
    # 15の倍数 → FizzBuzz
    def test_fizzbuzz_15(self):
        """15の倍数 (FizzBuzz)"""
        self.assertEqual(fizzbuzz(15), "FizzBuzz")
    
    # 3の倍数（15の倍数を除く） → Fizz
    def test_fizz_3(self):
        """3の倍数 (Fizz)"""
        for n in [3, 6, 9, 12, 18]:
            with self.subTest(n=n):
                self.assertEqual(fizzbuzz(n), "Fizz")
    
    # 5の倍数（15の倍数を除く） → Buzz
    def test_buzz_5(self):
        """5の倍数 (Buzz)"""
        for n in [5, 10, 20]:
            with self.subTest(n=n):
                self.assertEqual(fizzbuzz(n), "Buzz")
    
    # その他 → 数字そのまま
    def test_numbers(self):
        """その他 (数字)"""
        for n in [1, 2, 4, 7, 8, 11, 13, 14, 16, 17, 19]:
            with self.subTest(n=n):
                self.assertEqual(fizzbuzz(n), n)
    
    # 失敗例（意図的に失敗するテスト）
    def test_failure_example(self):
        """3は間違ってBuzzを期待（失敗する）"""
        self.assertEqual(fizzbuzz(3), "Buzz")  # 実際はFizz

if __name__ == "__main__":
    unittest.main()
