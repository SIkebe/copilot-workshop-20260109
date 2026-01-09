// FizzBuzz関数
function fizzbuzz(n) {
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
