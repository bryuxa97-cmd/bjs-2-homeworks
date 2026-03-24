function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (!this.marks) {
    return;
  }
  this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  const sumOfMarks = this.marks.reduce(function (runningTotal, mark) {
    return runningTotal + mark;
  }, 0);
  const marksCount = this.marks.length;
  return sumOfMarks / marksCount;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
