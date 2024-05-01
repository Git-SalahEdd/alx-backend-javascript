import { table } from "console";

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "Slah eddine",
  lastName: "ait si ahmad",
  age: 31,
  location: "Morocco",
};
const student2: Student = {
  firstName: "oussama",
  lastName: "ait si ahmad",
  age: 18,
  location: "Usa",
};
const studentsList: Array<Student> = [student1, student2];

export function studentInterface(studentsList: Array<Student>) {
  const table = document.createElement("table");
  const header = table.insertRow();
  header.insertCell().textContent = "First Name";
  header.insertCell().textContent = "Location";
  header.cells[0].style.fontWeight = header.cells[1].style.fontWeight = "bold";

  studentsList.forEach((student) => {
    const row = table.insertRow();
    row.insertCell().textContent = student.firstName;
    row.insertCell().textContent = student.location;
  });
  document.body.appendChild(table);
}

studentInterface(studentsList);
