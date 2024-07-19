// #Ejercicio 5
let numbers = [];

// Request five numbers from the user
for (let i = 0; i < 5; i++) {
  while (true) {
    let num = parseFloat(prompt(`Enter number ${i + 1}:`));

    // Verify that the input is a valid number
    if (!isNaN(num)) {
      numbers.push(num);
      break; // Exit the loop if the number is valid
    } else {
      alert("Please enter a valid number.");
    }
  }
}

// Calculate the sum
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
// Calculate the average
let average = sum / numbers.length;

// Display the results
alert(`The sum of the numbers is: ${sum}`);
alert(`The average of the numbers is: ${average}`);
