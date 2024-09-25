// .reduce() = reduce the elements of an array 
//             to a single value

const prices=[5,3,10,40,15,20];
const total =prices.reduce(sum);
console.log(`Total is :${total}`)
function sum(accumulator, element){
    return accumulator + element;
}

const minimum= prices.reduce(getMinimum);
console.log(minimum);
function getMinimum(accumulator, element){
    return Math.min(accumulator, element);
}
//function declaration = define a reusable block of code that performs a specific task
function hello(){
    console.log("Hello");
}
//function expression = a way to define functions
//                      as values or varaibles

const helloP = function(){
    console.log("Hello P!");
}
helloP();

// setTimeout(hello, 3000);
setTimeout(function(){
    console.log("Hello P!");
}, 3000);
//In JS it is legal to pass entire function as arguments or treated as a values

const numbers= [1,2,4,5,7];
const squares = numbers.map(function (element){//used fn expression here= only going to use this fn once, there is no need to declare fn
    return Math.pow(element, 2);
})

console.log(squares);

const evenNum= numbers.filter(function(element){
    return element%2===0;
})
console.log(evenNum);

const sumN = numbers.reduce(function(accumulator, element){
    return accumulator+element;
})
console.log(sumN);