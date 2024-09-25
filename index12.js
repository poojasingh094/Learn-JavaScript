//function expression= 
//two ways of using function expression

const hello = function(){// stored in variable
    console.log("Hello");
}

setTimeout(function(){// passed entire fn as argument
    console.log("Goodbye");
}, 5000);

  //benefits of using fn expression, no need to think of 
  // fn names, we can perform a function once and just forget it about
 // Also used in:
  //1. callbacks in aynchronous operations
  //2. Higher-Order Functions
  //3. Closures
  //4. Event Listeners

 //arrow function= concise way to write fn expressions
 // good for simple fn that you use only once

const helloP = (name, age) => {console.log(`Hello  ${name}`) 
                              console.log(`You are ${age} years old`)};
helloP("Pooja", 15);

setTimeout(() => console.log("Hello"), 3000);

const numbers = [1,2,3,4,5];
const squares = numbers.map((element) => Math.pow(element, 2));

console.log(squares);

const oddNums = numbers.filter((element)=>element%2!==0);
console.log(oddNums);

const total =numbers.reduce((accumulator, element)=> accumulator+element);
console.log(total);