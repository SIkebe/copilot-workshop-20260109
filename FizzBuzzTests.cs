using System;
using Xunit;

namespace FizzBuzzApp.Tests
{
    public class FizzBuzzTests
    {
        // 15の倍数 → FizzBuzz
        [Fact]
        public void Test_FizzBuzz_15()
        {
            Assert.Equal("FizzBuzz", FizzBuzz.FizzBuzzFunc(15));
        }

        // 3の倍数（15の倍数を除く） → Fizz
        [Theory]
        [InlineData(3)]
        [InlineData(6)]
        [InlineData(9)]
        [InlineData(12)]
        [InlineData(18)]
        public void Test_Fizz(int n)
        {
            Assert.Equal("Fizz", FizzBuzz.FizzBuzzFunc(n));
        }

        // 5の倍数（15の倍数を除く） → Buzz
        [Theory]
        [InlineData(5)]
        [InlineData(10)]
        [InlineData(20)]
        public void Test_Buzz(int n)
        {
            Assert.Equal("Buzz", FizzBuzz.FizzBuzzFunc(n));
        }

        // その他 → 数字そのまま
        [Theory]
        [InlineData(1)]
        [InlineData(2)]
        [InlineData(4)]
        [InlineData(7)]
        [InlineData(8)]
        [InlineData(11)]
        [InlineData(13)]
        [InlineData(14)]
        [InlineData(16)]
        [InlineData(17)]
        [InlineData(19)]
        public void Test_Numbers(int n)
        {
            Assert.Equal(n, FizzBuzz.FizzBuzzFunc(n));
        }

        // 失敗例（意図的に失敗するテスト）
        [Fact]
        public void Test_Failure_Example()
        {
            // 3は間違ってBuzzを期待（失敗する）
            Assert.Equal("Buzz", FizzBuzz.FizzBuzzFunc(3)); // 実際はFizz
        }
    }
}
