//Ternary Operator= shortcut to if{} and else{}
//                  consition? codeIfTrue : codeIfFalse

let age=21;
let message=age>=18? "You are an adult" : "You are a minor";
console.log(message);

let isStudent=false;
let messagee=isStudent? "You are a student!": "You are not a student!";
console.log(messagee);

let purchaseAmount =119;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount* (discount/100)}`);

//SWITCH = can be effcient repplacement to many else if statements
let score = 33;
let grade;
switch (true) {
    case (score >= 90):
        grade = "A";
        break;
    case (score >= 80):
        grade = "B";
        break;
    case (score >= 70):
        grade = "C";
        break;
    case (score >= 60):
        grade = "D";
        break;
    default:
        grade = "F";
}
console.log(grade);