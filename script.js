const students = [
  { name: "Ali Khan", course: "Math", grade: "A" },
  { name: "Fatima Noor", course: "Science", grade: "B+" },
  { name: "Hassan Raza", course: "History", grade: "A-" }
];

const teachers = [
  { name: "Ms. Amna", subject: "Math", classes: 3 },
  { name: "Mr. Usman", subject: "Science", classes: 2 },
  { name: "Mrs. Nida", subject: "English", classes: 4 }
];

function showPortal(type) {
  document.getElementById("main-screen").classList.add("hidden");

  if (type === "student") {
    document.getElementById("student-portal").classList.remove("hidden");
    renderStudents();
  } else if (type === "teacher") {
    document.getElementById("teacher-portal").classList.remove("hidden");
    renderTeachers();
  }
}

function goBack() {
  document.getElementById("main-screen").classList.remove("hidden");
  document.getElementById("student-portal").classList.add("hidden");
  document.getElementById("teacher-portal").classList.add("hidden");
}

function renderStudents() {
  const list = document.getElementById("student-list");
  list.innerHTML = "";
  students.forEach(student => {
    const li = document.createElement("li");
    li.textContent = `${student.name} - ${student.course} - Grade: ${student.grade}`;
    list.appendChild(li);
  });
}

function renderTeachers() {
  const list = document.getElementById("teacher-list");
  list.innerHTML = "";
  teachers.forEach(teacher => {
    const li = document.createElement("li");
    li.textContent = `${teacher.name} - ${teacher.subject} - Classes: ${teacher.classes}`;
    list.appendChild(li);
  });
}
