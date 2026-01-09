export function calculateSum(a: number, b: number): number {
  return a + b;
}

export class Student {
  constructor(
    public name: string,
    public yearsOld: number,
    public grade: string
  ) {}

  getInfo(): string {
    return `Name: ${this.name}, Age: ${this.yearsOld}, Grade: ${this.grade}`;
  }

  isAdult(): boolean {
    return this.yearsOld >= 18;
  }
}
