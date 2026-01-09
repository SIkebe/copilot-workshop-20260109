using Xunit;

namespace CSharpTests;

public class FizzBuzzTests
{
    [Theory]
    [InlineData(3, "Fizz")]
    [InlineData(5, "Buzz")]
    [InlineData(15, "FizzBuzz")]
    [InlineData(2, "2")]
    public void Evaluate_ReturnsExpectedValue(int input, string expected)
    {
        Assert.Equal(expected, FizzBuzz.Evaluate(input));
    }
}

public class StudentTests
{
    [Fact]
    public void GetInfo_ReturnsFormattedString()
    {
        var student = new Student("Alice", 20, "A");
        Assert.Equal("Name: Alice, Age: 20, Grade: A", student.GetInfo());
    }

    [Fact]
    public void IsAdult_EvaluatesThreshold()
    {
        var adult = new Student("Bob", 18, "B");
        var minor = new Student("Eve", 17, "C");

        Assert.True(adult.IsAdult());
        Assert.False(minor.IsAdult());
    }
}
