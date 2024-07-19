// #Ejercicio 2
let num1, num2;

// Request two different numbers greater than zero from the user
while (true) {
  num1 = parseFloat(prompt("Enter the first number (greater than zero):"));
  if (isNaN(num1) || num1 <= 0) {
    alert("The first number must be greater than zero. Please try again.");
    continue;
  }

  num2 = parseFloat(prompt("Enter the second number (different and greater than zero):"));
  if (isNaN(num2) || num2 <= 0 || num2 === num1) {
    alert("The second number must be different and greater than zero. Please try again.");
    continue;
  }

  break;
}

// Calculate and display the operations
alert(`Sum: ${num1 + num2}`);
alert(`Subtraction: ${num1 - num2}`);
alert(`Division: ${num1 / num2}`);
alert(`Multiplication: ${num1 * num2}`);
alert(`Modulus: ${num1 % num2}`);