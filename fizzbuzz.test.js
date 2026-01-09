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

  // エラーハンドリングのテスト
  describe("入力値の検証", () => {
    test("文字列を渡すとエラー", () => {
      expect(() => fizzbuzz("3")).toThrow("入力は数値である必要があります");
    });

    test("nullを渡すとエラー", () => {
      expect(() => fizzbuzz(null)).toThrow("入力は数値である必要があります");
    });

    test("undefinedを渡すとエラー", () => {
      expect(() => fizzbuzz(undefined)).toThrow("入力は数値である必要があります");
    });

    test("配列を渡すとエラー", () => {
      expect(() => fizzbuzz([1, 2, 3])).toThrow("入力は数値である必要があります");
    });

    test("オブジェクトを渡すとエラー", () => {
      expect(() => fizzbuzz({ n: 3 })).toThrow("入力は数値である必要があります");
    });

    test("NaNを渡すとエラー", () => {
      expect(() => fizzbuzz(NaN)).toThrow("NaNは無効な入力です");
    });

    test("Infinityを渡すとエラー", () => {
      expect(() => fizzbuzz(Infinity)).toThrow("Infinityは無効な入力です");
    });

    test("-Infinityを渡すとエラー", () => {
      expect(() => fizzbuzz(-Infinity)).toThrow("Infinityは無効な入力です");
    });

    test("小数を渡すとエラー", () => {
      expect(() => fizzbuzz(3.5)).toThrow("入力は整数である必要があります");
    });

    test("0を渡すとエラー", () => {
      expect(() => fizzbuzz(0)).toThrow("入力は正の整数である必要があります");
    });

    test("負の数を渡すとエラー", () => {
      expect(() => fizzbuzz(-5)).toThrow("入力は正の整数である必要があります");
    });

    test("MAX_SAFE_INTEGERを超える数を渡すとエラー", () => {
      expect(() => fizzbuzz(Number.MAX_SAFE_INTEGER + 1)).toThrow("入力は安全な整数範囲内である必要があります");
    });

    test("MAX_SAFE_INTEGERは有効", () => {
      expect(fizzbuzz(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER);
    });
  });
});
