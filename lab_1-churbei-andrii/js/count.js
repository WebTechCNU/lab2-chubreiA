const inputText = document.getElementById("input-text");
const charCount = document.getElementById("char-count");

inputText.addEventListener("input", () => {
  const count = inputText.value.length;
  charCount.textContent = count;
});