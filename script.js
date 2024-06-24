document.getElementById('check-btn').addEventListener('click', function () {
  const userInput = document
    .getElementById('text-input')
    .value.trim()
    .toLowerCase();

  if (userInput === '') {
    alert('Please input a value');
    result.textContent = 'Please input a value';
    result.style.backgroundColor = 'rgba(244, 234, 54, 0.7)';
    return;
  }

  const cleanInput = userInput.replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters

  if (cleanInput === '') {
    alert('Please input a valid alphanumeric text');
    result.textContent = 'Please input a valid text';
    result.style.backgroundColor = 'rgba(244, 234, 54, 0.7)';
    return;
  }

  function checkPalindrome(input) {
    const len = input.length;
    for (let i = 0; i < len / 2; i++) {
      if (input[i] !== input[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  const isPalindrome = checkPalindrome(cleanInput);

  if (isPalindrome) {
    document.getElementById(
      'result'
    ).textContent = `${userInput} is a palindrome`;
    result.style.backgroundColor = 'rgba(127, 231, 168, 0.7)';
  } else {
    document.getElementById(
      'result'
    ).textContent = `${userInput} is not a palindrome`;
    result.style.backgroundColor = 'rgba(247, 44, 44, 0.6)';
  }
});
