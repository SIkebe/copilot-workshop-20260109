const { fizzbuzz } = require("./fizzbuzz");

describe("FizzBuzz", () => {
  // 15の倍数 → FizzBuzz
  describe("15の倍数 (FizzBuzz)", () => {
    test.each([15])("%i → FizzBuzz", (n) => {
      expect(fizzbuzz(n)).toBe("FizzBuzz");
    });
  });

  // 3の倍数（15の倍数を除く） → Fizz
  describe("3の倍数 (Fizz)", () => {
    test.each([3, 6, 9, 12, 18])("%i → Fizz", (n) => {
      expect(fizzbuzz(n)).toBe("Fizz");
    });
  });

  // 5の倍数（15の倍数を除く） → Buzz
  describe("5の倍数 (Buzz)", () => {
    test.each([5, 10, 20])("%i → Buzz", (n) => {
      expect(fizzbuzz(n)).toBe("Buzz");
    });
  });

  // その他 → 数字そのまま
  describe("その他 (数字)", () => {
    test.each([1, 2, 4, 7, 8, 11, 13, 14, 16, 17, 19])("%i → %i", (n) => {
      expect(fizzbuzz(n)).toBe(n);
    });
  });

  // 失敗例（意図的に失敗するテスト）
  describe("失敗例", () => {
    test("3はFizzを返す", () => {
      expect(fizzbuzz(3)).toBe("Fizz");
    });
  });
});
