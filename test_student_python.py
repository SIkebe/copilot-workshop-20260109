import unittest

from student import Student


class StudentTest(unittest.TestCase):
    def test_get_info(self):
        student = Student("Alice", 20, "A")
        self.assertEqual(
            student.get_info(),
            "Name: Alice, Age: 20, Grade: A",
        )

    def test_is_adult(self):
        adult = Student("Bob", 18, "B")
        minor = Student("Eve", 17, "C")
        self.assertTrue(adult.is_adult())
        self.assertFalse(minor.is_adult())


if __name__ == "__main__":
    unittest.main()
