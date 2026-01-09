using System;

namespace FizzBuzzApp
{
    public class FizzBuzz
    {
        // FizzBuzz関数
        public static object FizzBuzzFunc(int n)
        {
            if (n % 15 == 0) return "FizzBuzz";
            if (n % 3 == 0) return "Fizz";
            if (n % 5 == 0) return "Buzz";
            return n;
        }

        // 1〜20を出力
        public static void Main(string[] args)
        {
            for (int i = 1; i <= 20; i++)
            {
                Console.WriteLine(FizzBuzzFunc(i));
            }
        }
    }
}
