function reverseNumber(num) {
    let reversed = 0;
    while (num > 0) {
      reversed = reversed * 10 + num % 10;
      num = Math.floor(num / 10);
    }
    return reversed;
  }
  
  const reverseButton = document.querySelector('#reverseButton');
  const inputNumber = document.querySelector('#inputNumber');
  const result = document.querySelector('#result');
  
  reverseButton.addEventListener('click', function() {
    const num = parseInt(inputNumber.value, 10);
    result.textContent = reverseNumber(num);
  });