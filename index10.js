// .map() = accepts a callback and applies that fn to each element 
//  of an array, then returns a new array

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
console.log(squares);

function square(element){
    return Math.pow(element, 2);
}

const students =["Alex", "Sam", "Robin"];
const capital = students.map(upperCase);

console.log(capital);

function upperCase(element){
    return element.toUpperCase();
}

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates= dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

//filter()= creates a new array by filtering out elements
let num = [1, 2, 3, 4, 5];
let evenNums = num.filter(isEven);
let oddNums =num.filter(isOdd);

console.log(evenNums);
console.log(oddNums);

function isEven(element){
    return element % 2 === 0;
}
function isOdd(element){
    return element % 2 !== 0;
}

const ages = [12, 15, 34, 45, 60];
const adults = ages.filter(isAdult);
console.log(adults);
function isAdult(element){
    return element>=18;
}

const words = ["apple", "banana", "kiwi", "coconut", "pomegranate"];

const shortWords = words.filter(getShortWords);
console.log(shortWords);

function getShortWords(element){
    return element.length < 6;
}

