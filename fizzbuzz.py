# FizzBuzz関数
def fizzbuzz(n):
    if n % 15 == 0:
        return "FizzBuzz"
    if n % 3 == 0:
        return "Fizz"
    if n % 5 == 0:
        return "Buzz"
    return n

# 1〜20を出力
if __name__ == "__main__":
    for i in range(1, 21):
        print(fizzbuzz(i))
