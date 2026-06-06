// ============================================================
// 🐛  CONDITIONALS — LIVE CLASS  |  DEBUG TASKS
// ============================================================
// Each snippet has a bug. Read carefully, fix it, and explain
// what was wrong as a comment.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log "Access granted" when age is 21,
// but it always logs "Access denied" no matter what.

const age = 21;
const minAge = 18;

if (age = minAge) {
  console.log("✅ Access granted.");
} else {
  console.log("❌ Access denied.");
}

// What's wrong ↓
// age is assigned and not compared
// Your fix ↓

if (age === minAge) {
  console.log("✅ Access granted.");
} else {
  console.log("❌ Access denied.");
}


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// A user should be allowed in if they have a VIP pass
// OR if they are on the guest list.
// But the door only opens when BOTH are true. That's wrong.

const hasVipPass   = true;
const isOnGuestList = false;

if (hasVipPass && isOnGuestList) {
  console.log("🎉 Welcome in!");
} else {
  console.log("🚫 Entry denied.");
}

// What's wrong ↓
// The || operatour should be used and not &&
// Your fix ↓

if (hasVipPass || isOnGuestList) {
  console.log("🎉 Welcome in!");
} else {
  console.log("🚫 Entry denied.");
}

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This discount system has a logic gap.
// When score is 75, it logs BOTH the 50+ message
// AND the 70+ message. It should only log one.
// Find the structural problem and fix it.

let score = 75;

if (score >= 50) {
  console.log("🥉 Bronze reward unlocked.");
}
if (score >= 70) {
  console.log("🥈 Silver reward unlocked.");
}
if (score >= 90) {
  console.log("🥇 Gold reward unlocked.");
}

// What's wrong ↓
// we have to define ranges and not only >= or revert the order evaulate 90, 70 than 50. After the first condition is fulfilled the statment brakes.
// Your fix ↓


if (score >= 50 && score < 70) {
  console.log("🥉 Bronze reward unlocked.");
}
if (score >= 70 && score < 90) {
  console.log("🥈 Silver reward unlocked.");
}
if (score >= 90) {
  console.log("🥇 Gold reward unlocked.");
}

if (score >= 90) {
  console.log("🥇 Gold reward unlocked.");
}
if (score >= 70) {
  console.log("🥈 Silver reward unlocked.");
}
if (score >= 50) {
  console.log("🥉 Bronze reward unlocked.");
}