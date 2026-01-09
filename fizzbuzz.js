// FizzBuzz関数
function fizzbuzz(n) {
  // 入力値の検証
  if (typeof n !== "number") {
    throw new Error("入力は数値である必要があります");
  }
  if (Number.isNaN(n)) {
    throw new Error("NaNは無効な入力です");
  }
  if (!Number.isFinite(n)) {
    throw new Error("Infinityは無効な入力です");
  }
  if (n <= 0) {
    throw new Error("入力は正の整数である必要があります");
  }
  if (!Number.isSafeInteger(n)) {
    throw new Error("入力は安全な整数範囲内である必要があります");
  }

  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n;
}

// 1〜20を出力
for (let i = 1; i <= 20; i++) {
  console.log(fizzbuzz(i));
}

module.exports = { fizzbuzz };
