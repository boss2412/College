class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayPersonInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Student extends Person {
    constructor(name, age, course, marks) {
        super(name, age);
        this.course = course;
        this.marks = marks;
    }

    displayStudentInfo() {
        return `${this.displayPersonInfo()}<br>Course: ${this.course}, Marks: ${this.marks}`;
    }
}

const student1 = new Student('Anurag', 19, 'BEIT', 95);
const student2 = new Student('Vivek', 20, 'BEIT', 90);
const student3 = new Student('Amritya', 20, 'BEIT', 60);

document.getElementById('student1').innerHTML = '<h2>Student 1 Details:</h2>' + student1.displayStudentInfo();
document.getElementById('student2').innerHTML = '<h2>Student 2 Details:</h2>' + student2.displayStudentInfo();
document.getElementById('student3').innerHTML = '<h2>Student 3 Details:</h2>' + student3.displayStudentInfo();