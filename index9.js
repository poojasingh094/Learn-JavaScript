//callback - fn that is passed as an argument to another fn
//           used to handle asynchronous operation
//           1. Reading a file
//           2. Network Requests
//           3. Interacting with databases

hello(leave);

function hello(callback){
    console.log("Hello!");
    callback();
}

function leave(){
    console.log("Goodbye!");
}

sum(displayContent, 4, 5);

function displayContent(result){
    console.log(result);
}

function sum(callback, x, y){
    let result = x+y;
    callback(result);
}

//forEach() = method used to iterate over the elements 
//of an array and apply a specified fn (callback) to each element
// array.forEach(callback)
// element, index, array are provided
                                                                                                                                        
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double);
numbers.forEach(square);
numbers.forEach(display);

function display(element){
    console.log(element);
}

function double(element, index, array){
    array[index] = element * 2;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

let fruits = ["apple", "banana", "orange"];

//fruits.forEach(upperCase);
fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element, index, array){
  array[index] = element.toUpperCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
