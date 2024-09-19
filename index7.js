//array
let fruits =["apple", "orange", "mango"];
fruits.push("banana");
//  fruits.pop();
fruits.unshift("grapes");//add element in 1st index
fruits.shift();//remove element from 1st index
console.log(fruits[0]);
console.log(fruits.indexOf("mango"));//if index -> -1, means elements not found

fruits.sort();//sort in alphabetical order//add .reverse to reverse sorting
for(let fruit of fruits){
   console.log(fruit);
}

//spread operator ... allows an iterable to be expanded into seperate element
//unpacks the element

let numbers =[1,2,3,4,5];
let maximum = Math.max(...numbers);
console.log(maximum);
let veggie = ["carrots", "onion", "potatoes"];
let foods= [...fruits, ...veggie, "milk"];//we can use spread operators to combine arrays or to make copy
console.log(foods);

//rest parameters = (...rest) bundles seperate elements into an array
// allow a fn work with var 
//no of arguments by bundling into an array

function openFridge(...foods){
   console.log(foods);
}
let food1 ="pizza";
let food2 ="sushi";
const food3= "ramen";

openFridge(food1, food2, food3);

function getAverage(...numbers){
   let result = 0;
   for(let number of numbers){
      result+= number;
   }
   return result / numbers.length;
}

console.log(getAverage(1,2,3));

function combineStrings(...strings){
   return strings.join(" ");
}
const fullName =combineStrings("hi", "My", "Name", "Is", "Pooja");
console.log(fullName);

