class Student:
    def __init__(self, name: str, years_old: int, grade: str):
        self.name = name
        self.years_old = years_old
        self.grade = grade

    def get_info(self) -> str:
        return f"Name: {self.name}, Age: {self.years_old}, Grade: {self.grade}"

    def is_adult(self) -> bool:
        return self.years_old >= 18
