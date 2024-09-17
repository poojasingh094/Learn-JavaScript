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

//string methods 

let userName ="  Pooja  ";
console.log(userName.charAt(0)); 
console.log(userName.indexOf("j"));//lastIndexOf in case of repeated char
console.log(userName.length);
console.log(userName.trim());
console.log(userName.toUpperCase());

let result = userName.startsWith("");//endsWith, includes
console.log(result);

let phoneNo="123-456-7890";
phoneNo=phoneNo.replaceAll("-","/");
console.log(phoneNo);

//string slicing=creating substring from portion of another string
const fullName = "Pooja Singh";

// let firstName = fullName.slice(0,5);//5 is exclusive
// console.log(firstName);
// lastChar= fullName.slice(-1);//lastChar=slice(0,1)
// console.log(lastChar);

let firstName =fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ")+1);
console.log(firstName);
console.log(lastName);
