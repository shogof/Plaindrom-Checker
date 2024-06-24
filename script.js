const checkBtn = document.getElementById("check-btn");
const showResult = document.getElementById("show-result");

checkBtn.addEventListener("click", function () {
  const userInput = document
    .getElementById("text-input")
    .value.trim()
    .toLowerCase();

  if (userInput === "") {
    showResult.textContent = "Please input a value";
    showResult.style.backgroundColor = "rgba(244, 234, 54, 0.7)";
    return;
  }

  const cleanInput = userInput.replace(/[^a-z0-9]/g, "");

  if (cleanInput === "") {
    showResult.textContent = "Please input a valid text";
    showResult.style.backgroundColor = "rgba(244, 234, 54, 0.7)";
    return;
  }

  const isPalindrome = checkPalindrome(cleanInput);

  if (isPalindrome) {
    showResult.textContent = `${userInput} is a palindrome`;
    showResult.style.backgroundColor = "rgba(127, 231, 168, 0.7)";
  } else {
    showResult.textContent = `${userInput} is not a palindrome`;
    showResult.style.backgroundColor = "rgba(247, 44, 44, 0.6)";
  }
});

function checkPalindrome(input) {
  const len = input.length;
  for (let i = 0; i < len / 2; i++) {
    if (input[i] !== input[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
