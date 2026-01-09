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

// テストコード
const student1 = new Student("Alice", 20, "A");
console.log(student1.getInfo()); // "Name: Alice, Age: 20, Grade: A"
console.log(student1.isAdult()); // true