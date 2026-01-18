// DOM ELEMENTS
const addBtn = document.querySelector("#addBtn");
const questionsList = document.querySelector("#questionsList");
const modalOverlay = document.querySelector("#modalOverlay");
const cancelBtn = document.querySelector("#cancelBtn");
const createBtn = document.querySelector("#createBtn");
const titleInput = document.querySelector("#titleInput");
const answerA = document.querySelector("#answerA");
const answerB = document.querySelector("#answerB");
const answerC = document.querySelector("#answerC");
const answerD = document.querySelector("#answerD");
const correctSelect = document.querySelector("#correctSelect");

// EVENTS
addBtn.addEventListener("click", openModal);
cancelBtn.addEventListener("click", closeModal);
createBtn.addEventListener("click", saveQuestion);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

// DATA
let questions = [
  {
    id: 1,
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    id: 2,
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets",
    choiceD: "I don't know",
    correct: "C",
  },
  {
    id: 3,
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
];

let nextId = questions.length + 1;

// FUNCTIONS
function renderQuestions() {
  questionsList.innerHTML = "";
  questions.forEach((question) => {
    const questionItem = document.createElement("div");
    questionItem.className = "question-item";
    questionItem.innerHTML = `
      <span class="question-text">${question.title}</span>
      <div class="question-actions">
        <button class="edit-btn" onclick="editQuestion(${question.id})">
            <img src="../../img/edit.svg" alt=""/>
        </button>
        <button class="delete-btn" onclick="deleteQuestion(${question.id})">
          <img src="../../img/trash.png" alt=""/>
        </button>
      </div>
    `;
    questionsList.appendChild(questionItem);
  });
}

function addQuestion() {
  const newQuestion = {
    id: nextId++,
    title: "New Question",
    choiceA: "Choice A",
    choiceB: "Choice B",
    choiceC: "Choice C",
    choiceD: "Choice D",
    correct: "A",
  };
  questions.push(newQuestion);
  renderQuestions();
}

function openModal() {
  modalOverlay.style.display = "flex";
  titleInput.focus();
}

function closeModal() {
  modalOverlay.style.display = "none";
  clearForm();
}

function clearForm() {
  titleInput.value = "";
  answerA.value = "";
  answerB.value = "";
  answerC.value = "";
  answerD.value = "";
  correctSelect.value = "A";
}

function saveQuestion() {
  if (!titleInput.value.trim()) {
    alert("Please enter a question title");
    return;
  }

  const newQuestion = {
    id: nextId++,
    title: titleInput.value,
    choiceA: answerA.value || "Answer A",
    choiceB: answerB.value || "Answer B",
    choiceC: answerC.value || "Answer C",
    choiceD: answerD.value || "Answer D",
    correct: correctSelect.value,
  };

  questions.push(newQuestion);
  renderQuestions();
  closeModal();
}

function deleteQuestion(id) {
  questions = questions.filter((q) => q.id !== id);
  renderQuestions();
}

// INIT
renderQuestions();
