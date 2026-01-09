namespace CSharpTests;

public class Student
{
    public Student(string name, int yearsOld, string grade)
    {
        Name = name;
        YearsOld = yearsOld;
        Grade = grade;
    }

    public string Name { get; }
    public int YearsOld { get; }
    public string Grade { get; }

    public string GetInfo() => $"Name: {Name}, Age: {YearsOld}, Grade: {Grade}";

    public bool IsAdult() => YearsOld >= 18;
}
