function calculate(method) {
  const numberInput = document.getElementById('number').value.trim(); // Get user input
  const outputDiv = document.getElementById('output'); // Output container

  // Clear previous output
  outputDiv.innerHTML = "";

  // Validate input
  const num = parseInt(numberInput);
  if (isNaN(num) || num < 0) {
    outputDiv.innerHTML = "<span style='color: #ff6a00;'>Please enter a valid positive integer.</span>";
    return;
  }

  // Calculate factorial
  let result;
  if (method === 'iterative') {
    result = factorialIterative(num);
  } else if (method === 'recursive') {
    result = factorialRecursive(num);
  }

  // Display the result
  outputDiv.innerHTML = `
    <div class="result-container">
      <p>The factorial of <strong>${num}</strong> is:</p>
      <p class="result-value">${result}</p>
      <p>(Calculated using the <strong>${method.toUpperCase()}</strong> method)</p>
    </div>
  `;
}

// Iterative Factorial Function
function factorialIterative(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Recursive Factorial Function
function factorialRecursive(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorialRecursive(n - 1);
}
