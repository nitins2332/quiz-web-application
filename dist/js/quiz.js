// alert("hello");

window.onload = function () {
  show(0);
};

let questions = [
  {
    id: 1,
    question: "what is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of These",
    ],
  },
  {
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central preload Unit",
      "None of these",
    ],
  },
  {
    id: 3,
    question: "what is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these",
    ],
  },
];

function submitForm(e) {
  e.preventDefault();
  let name = document.forms["welcome_form"]["name"].value;

  sessionStorage.setItem("name", name);

  location.href = "quiz.html";

  //   console.log(name);
}

let question_count = 0;

function next() {
  question_count++;
  console.log(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  question.innerHTML = "<h2>" + questions[count].question + "</h2>";
}
