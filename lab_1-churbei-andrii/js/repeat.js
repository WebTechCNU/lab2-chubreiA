function countDuplicates() {
    const input = document.getElementById("numbers").value;
    const numbers = input.split(",").map(Number);
    
    const counts = new Map();
    for (let number of numbers) {
      if (counts.has(number)) {
        counts.set(number, counts.get(number) + 1);
      } else {
        counts.set(number, 1);
      }
    }
    
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h2>Результат:</h2>";
    for (let [number, count] of counts) {
      resultDiv.innerHTML += `<p>Число ${number} зустрічається ${count} раз(и)</p>`;
    }
  }
  