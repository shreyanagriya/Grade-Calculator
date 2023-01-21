function setInitialValue() {
  document.getElementById("marks-inp").value = 0;
}

function showGrade(grade) {
  document.getElementById("grade").innerText = grade;
}
function calculateGrade() {
  const marks = parseInt(document.getElementById("marks-inp").value);
  if (marks > 100 || marks < 0) {
    alert("Invalid number..");
  } else if (marks >= 80 && marks <= 100) {
    showGrade("A+");
  } else if (marks >= 70 && marks <= 79) {
    showGrade("A");
  } else if (marks >= 60 && marks <= 69) {
    showGrade("A-");
  } else if (marks >= 50 && marks <= 59) {
    showGrade("B");
  } else if (marks >= 33 && marks <= 49) {
    showGrade("C");
  } else {
    showGrade("F");
  }
}

setInitialValue();
