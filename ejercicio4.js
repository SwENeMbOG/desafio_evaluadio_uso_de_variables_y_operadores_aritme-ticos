// #Ejercicio 4
let days;

// Request a number of days from the user
while (true) {
  days = parseInt(prompt("Enter a number of days:"));

  // Verify that the input is a valid number
  if (!isNaN(days) && days >= 0) {
    break; // Exit the loop if the number of days is valid
  } else {
    alert("Please enter a valid number of days.");
  }
}

// Calculate years, weeks, and days
let years = Math.floor(days / 365);
let weeks = Math.floor((days % 365) / 7);
let remainingDays = days % 365 % 7;

// Display the results
alert(`${days} days is equivalent to ${years} year(s), ${weeks} week(s), and ${remainingDays} day(s).`);
