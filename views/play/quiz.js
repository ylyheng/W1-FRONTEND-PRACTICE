// DOM ELEMENTS ---------------------------------------------------------
const dom_start = document.querySelector("#start");
const dom_startBtn = document.querySelector("#startBtn");
const dom_quiz = document.querySelector("#quiz");
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");
const dom_score = document.querySelector("#scoreContainer");

// EVENTS ---------------------------------------------------------
dom_startBtn.addEventListener("click", onStart);
dom_choiceA.addEventListener("click", () => onPlayerSubmit("A"));
dom_choiceB.addEventListener("click", () => onPlayerSubmit("B"));
dom_choiceC.addEventListener("click", () => onPlayerSubmit("C"));
dom_choiceD.addEventListener("click", () => onPlayerSubmit("D"));

// DATA ---------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets",
    choiceD: "I don't know",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
];

let runningQuestionIndex = 0;
let score = 0;

// FUNCTIONS ---------------------------------------------------------

function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}

function onStart() {
  runningQuestionIndex = 0;
  score = 0;
  hide(dom_start);
  hide(dom_score);
  show(dom_quiz);
  renderQuestion();
}

function renderQuestion() {
  let q = questions[runningQuestionIndex];
  dom_question.innerText = q.title;
  dom_choiceA.innerText = q.choiceA;
  dom_choiceB.innerText = q.choiceB;
  dom_choiceC.innerText = q.choiceC;
  dom_choiceD.innerText = q.choiceD;
}

function onPlayerSubmit(answer) {
  let correctAnswer = questions[runningQuestionIndex].correct;

  if (answer === correctAnswer) {
    score++;
  }

  runningQuestionIndex++;

  if (runningQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    renderScore();
  }
}

function renderScore() {
  hide(dom_quiz);
  show(dom_score);

  let percent = Math.round((score / questions.length) * 100);
  let emoji = "😐";

  if (percent < 20) emoji = "😢";
  else if (percent < 40) emoji = "😕";
  else if (percent < 60) emoji = "😐";
  else if (percent < 80) emoji = "🙂";
  else emoji = "😎";

  dom_score.innerHTML = `
    <h2>Your Score</h2>
    <h3>${percent}%</h3>
    <div style="font-size: 50px">${emoji}</div>
  `;
}

// INIT ---------------------------------------------------------
show(dom_start);
hide(dom_quiz);
hide(dom_score);
