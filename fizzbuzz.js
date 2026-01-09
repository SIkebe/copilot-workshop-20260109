// FizzBuzz関数
function fizzbuzz(n) {
  const divisibleBy3 = n % 3 === 0;
  const divisibleBy5 = n % 5 === 0;
  
  if (divisibleBy3 && divisibleBy5) return "FizzBuzz";
  if (divisibleBy3) return "Fizz";
  if (divisibleBy5) return "Buzz";
  return n;
}

// 1〜20を出力する関数
function printFizzBuzz(max = 20) {
  for (let i = 1; i <= max; i++) {
    console.log(fizzbuzz(i));
  }
}

// スクリプトとして直接実行された場合のみ出力
if (require.main === module) {
  printFizzBuzz();
}

module.exports = { fizzbuzz, printFizzBuzz };
