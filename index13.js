// List of most commonly used methods in Array

// 1. Mutator Methods (Modify the Original Array)

const arr = [1, 2, 3];
arr.push(4); // arr becomes [1, 2, 3, 4]
arr.pop(); // arr becomes [1, 2, 3]
arr.shift(); // arr becomes [2, 3]
arr.unshift(0); // arr becomes [0, 1, 2, 3]
arr.splice(1, 2, 'a', 'b'); // Replaces 2 elements starting from index 1; arr becomes [0, 'a', 'b', 3]

const arr1 = [3, 1, 4, 2];
arr1.sort(); // arr becomes [1, 2, 3, 4]
arr.reverse(); // arr becomes [4, 3, 2, 1]

// 2. Accessor Methods (Return New Values, Don't Modify Original Array)

const arr2 = [1, 2];
const arr3 = [3, 4];
const result = arr2.concat(arr3); // result is [1, 2, 3, 4]

const arr4 = [1, 2, 3, 4];
const sliced = arr4.slice(1, 3); // sliced is [2, 3]
const ans = arr4.includes(2); // result is true
const ans1 = arr4.indexOf(2); // result is 1
const ans2 = arr.lastIndexOf(2); // result is 1

const arr5 = [1, 2, 3];
const str = arr5.join('-'); // str is "1-2-3"

// 3.Iteration Methods (Loop Through Array)
/* 
forEach()
map()
filter()
reduce()
These methods are previously discussed
*/

// some(): Checks if at least one element passes a test function.
const arr6 = [1, 2, 3];
const result2= arr6.some(x => x > 2); // result is true(Checks if at least one element passes a test function.)
const result3 = arr6.every(x => x > 0); // result is true(Checks if all elements pass a test function.)
const result4 = arr6.find(x => x > 1); // result is 2( Returns the first element that passes a test function.)
const index = arr6.findIndex(x => x > 1); // index is 1( Returns the index of the first element that passes a test function.)

// 4. Other Useful Methods

const arr7 = [1, 2, 3];
arr7.fill(0); // arr becomes [0, 0, 0]

const strg = 'hello';
const newarr = Array.from(strg); // anewarr is ['h', 'e', 'l', 'l', 'o']
const arr8 = Array.of(1, 2, 3); // arr8 is [1, 2, 3]
const result5 = Array.isArray([1, 2, 3]); // result is true











