// ============================================================
// 🐛  CONDITIONALS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log "Pass" when score is 70, but it always
// logs "Pass" even when score is 30. Why?

let score = 30;
const passing = 60;

if (score = passing) {
  console.log("Pass ✅");
} else {
  console.log("Fail ❌");
}

// What's wrong ↓
// score is assigned and not compared
// Your fix ↓

if (score === passing) {
  console.log("Pass ✅");
} else {
  console.log("Fail ❌");
}

// What's wrong ↓

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// A theme park ride requires riders to be EITHER
// at least 140cm tall OR accompanied by an adult.
// But the code is turning away people it shouldn't.

const height        = 135;
const withAdult     = true;
const minHeight     = 140;

if (height >= minHeight && withAdult) {
  console.log("🎢 Enjoy the ride!");
} else {
  console.log("🚫 Sorry, you cannot ride.");
}

// What's wrong ↓
// the || operator has to be used because one of the statment is true the user should pass
// Your fix ↓

if (height >= minHeight || withAdult) {
  console.log("🎢 Enjoy the ride!");
} else {
  console.log("🚫 Sorry, you cannot ride.");
}


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This shipping calculator has two bugs.
// One causes the wrong tier to log.
// One is a style issue from a previous lesson.
// Find both.

var orderTotal = 85;

if (orderTotal >= 50) {
  console.log("🚚 Standard shipping: $5");
}
if (orderTotal >= 100) {
  console.log("🚀 Free express shipping!");
}
if (orderTotal < 50) {
  console.log("📦 Economy shipping: $9.99");
}

// Bug 1 ↓
// The execution order is wrong
// Bug 2 ↓
// the second evaulation should be a range
// Your fix ↓

if (orderTotal < 50) {
  console.log("📦 Economy shipping: $9.99");
}
if (orderTotal >= 50 && orderTotal < 100) {
  console.log("🚚 Standard shipping: $5");
}
if (orderTotal >= 100) {
  console.log("🚀 Free express shipping!");
}
