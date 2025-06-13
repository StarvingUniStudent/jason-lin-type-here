const wordList = [];
// Yeah,Nah Translations
const translations = { 
  "Yeah, Nah": "No",
  "Nah, Yeah": "Yes",
  "Yeah, Yeah": "No, Sarcastiaclly",
  "Nah, Nah": "No",
  "Yeah, Nah, Yeah": "Yes, Hesitantly",
  "Nah, Yeah, Nah": "No, Hesitantly",
  "Yeah": "Yes",
  "Nah": "No",
  "Yeah, Yeah, Yeah": "No, But even more Sacartiscally",
  "Nah, Nah, Nah": "No",
};

window.onload = function () {
  wordList.push("Yeah", "Nah");
  updateDisplay();
};

function addWord(word) {
  wordList.push(word);
  updateDisplay();
}

function clearWords() {
  wordList.length = 0;
  updateDisplay();
}

function updateDisplay() {
  const wordListEl = document.getElementById("wordList");
  const translationEl = document.getElementById("translation");

  if (wordList.length === 0) {
    wordListEl.textContent = "Yeah, Nah";
    fadeTranslation("No");
    return;
  }

  const combination = wordList.join(", ");
  wordListEl.textContent = combination;

  let translation = translations[combination];

  if (!translation) {
    // Defaults to Yes or No when a translation isn't found based on the last word. Rule only applies when there is 3 or more words
    if (wordList.length >= 3) {
      const lastWord = wordList[wordList.length - 1];
      if (lastWord === "Yeah") {
        translation = "Yes";
      } else if (lastWord === "Nah") {
        translation = "No";
      } else {
        translation = "No translation found.";
      }
    } else {
      translation = "No translation found.";
    }
  }

  fadeTranslation(translation);
}

// Fade translation text smoothly
function fadeTranslation(newText) {
  const translationEl = document.getElementById("translation");
  translationEl.classList.add("fade-out");

  setTimeout(() => {
    translationEl.textContent = newText;
    translationEl.classList.remove("fade-out");
  }, 300);
}
