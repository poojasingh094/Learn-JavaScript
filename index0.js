// Variables
let myAge = 24; // Numeric variable
let firstName = "Pooja"; // String variable
let online = true; // Boolean variable
let email = "pooja8374@gmail.com"; // String variable

// Creating an alert on the browser
window.alert(`This is an alert!`); // Displays an alert dialog with the message

// Type checking and printing to the console
console.log(typeof myAge); // Logs the type of myAge (number)
console.log(email, typeof email); // Logs the value and type of email (string)
console.log(typeof online); // Logs the type of online (boolean)

// To print on browser
document.getElementById("p1").textContent = `I am ${myAge} years old`; // Displays age with a message
document.getElementById("p1").textContent = myAge; // Updates the content to show just the age
document.getElementById("p2").textContent = typeof firstName; // Displays the type of firstName (string)
document.getElementById("p3").textContent = `Is she online: ${online}`; // Displays online status

// How to accept user input
let myName = window.prompt("Your name??"); // Prompts the user to enter their name
console.log(myName); // Logs the user’s input to the console
document.getElementById("h1").textContent = myName; // Displays the user’s input in the element with ID 'h1'

// Handling form submission
document.getElementById("submit").onclick = function () {
    let username = document.getElementById("myText").value; // Gets the value from the input field with ID 'myText'
    console.log(username); // Logs the value to the console
    document.getElementById("h2").textContent = username; // Displays the value in the element with ID 'h2'
}
