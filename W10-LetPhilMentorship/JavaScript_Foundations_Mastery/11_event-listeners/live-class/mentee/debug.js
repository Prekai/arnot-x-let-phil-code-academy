// ============================================================
// 🐛  EVENT LISTENERS — LIVE CLASS  |  DEBUG TASKS
// ============================================================
// To test: swap <script src="app.js"> for <script src="debug.js">
// in index.html.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// The button click should toggle dark mode.
// Instead, dark mode turns on immediately when the page loads
// and the button does nothing after that. What's wrong?

function toggleDark() {
  document.body.classList.toggle("dark");
}

document.getElementById("theme-btn")
  .addEventListener("click", toggleDark());

// What's wrong ↓
// the callback do an instant execution
// Your fix ↓

function toggleDark() {
  document.body.classList.toggle("dark");
}

document.getElementById("theme-btn")
  .addEventListener("click", toggleDark);


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This form should add skills without reloading the page.
// But every time you submit, the page reloads and the
// skill never appears. What's missing?

function handleSubmit(event) {
  const skillInput = document.getElementById("skill-input");
  const skillName  = skillInput.value.trim();

  if (skillName) {
    const li = document.createElement("li");
    li.textContent = skillName;
    document.getElementById("skills-list").appendChild(li);
    skillInput.value = "";
  }
}

document.getElementById("add-skill-form")
  .addEventListener("submit", handleSubmit);

// What's wrong ↓
// after submit the webbrowser refresh, we have to block the event
// Your fix ↓

function handleSubmit(event) {
  event.preventDefault();
  const skillInput = document.getElementById("skill-input");
  const skillName  = skillInput.value.trim();

  if (skillName) {
    const li = document.createElement("li");
    li.textContent = skillName;
    document.getElementById("skills-list").appendChild(li);
    skillInput.value = "";
  }
}

document.getElementById("add-skill-form")
  .addEventListener("submit", handleSubmit);


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This uses event delegation to remove skills when clicked.
// Clicking a skill does nothing. What's wrong?
// There are TWO bugs.

function handleSkillClick(event) {
  if (event.currentTarget.tagName === "LI") {
    event.currentTarget.remove();
  }
}

document.getElementById("skills-list")
  .addEventListener("click", handleSkillClick);

// Bug 1 ↓
// the currentTarget should be just target
// Bug 2 ↓

// Your fix ↓

function handleSkillClick(event) {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
}

document.getElementById("skills-list")
  .addEventListener("click", handleSkillClick);

