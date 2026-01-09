function calculateSum(a, b) {
   // ここで実装を中断
    return a + b;
}

// JavaScript で Student クラスを作成
// プロパティ: name, yearsOld, grade
// メソッド: getInfo() - 学生情報を文字列で返す
// メソッド: isAdult() - 18歳以上かどうかを返す
class Student {
    constructor(name, yearsOld, grade) {
        this.name = name;
        this.yearsOld = yearsOld;
        this.grade = grade;
    }
    getInfo() {
        return `Name: ${this.name}, Age: ${this.yearsOld}, Grade: ${this.grade}`;
    }
    isAdult() {
        return this.yearsOld >= 18;
    }
}

describe("calculateSum", () => {
    test("should add two numbers", () => {
        expect(calculateSum(1, 2)).toBe(3);
        expect(calculateSum(-1, 5)).toBe(4);
    });
});

describe("Student", () => {
    test("getInfo should return formatted string", () => {
        const student1 = new Student("Alice", 20, "A");
        expect(student1.getInfo()).toBe("Name: Alice, Age: 20, Grade: A");
    });

    test("isAdult should check age threshold", () => {
        const adultStudent = new Student("Bob", 18, "B");
        const minorStudent = new Student("Eve", 17, "C");
        expect(adultStudent.isAdult()).toBe(true);
        expect(minorStudent.isAdult()).toBe(false);
    });
});
