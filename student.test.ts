import { Student, calculateSum } from "./student";

describe("calculateSum", () => {
  it("adds two numbers", () => {
    expect(calculateSum(2, 3)).toBe(5);
  });
});

describe("Student", () => {
  const student = new Student("Alice", 20, "A");

  it("returns formatted info", () => {
    expect(student.getInfo()).toBe("Name: Alice, Age: 20, Grade: A");
  });

  it("determines adulthood", () => {
    expect(student.isAdult()).toBe(true);
  });
});
