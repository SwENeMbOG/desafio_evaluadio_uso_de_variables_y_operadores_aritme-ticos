// #Ejercicio 3
let celsius;

// Request the temperature in Celsius from the user
while (true) {
  celsius = parseFloat(prompt("Enter the temperature in degrees Celsius:"));

  // Verify that the input is a valid number
  if (!isNaN(celsius)) {
    break; // Exit the loop if the temperature is valid
  } else {
    alert("Please enter a valid number for the temperature.");
  }
}

// Convert to Kelvin and Fahrenheit
let kelvin = celsius + 273.15;
let fahrenheit = (celsius * 9/5) + 32;

// Display the results
alert(`${celsius} °C is equivalent to ${kelvin} K and ${fahrenheit} °F.`);