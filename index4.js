//Method chaining = calling one method after another in 1 continuous line of code 

let yourName = window.prompt("Enter your name: ");
yourName = yourName.trim().charAt(0).toUpperCase()+ yourName.trim().slice(1).toLowerCase();
console.log(yourName);

// strict equality operatr
// === compare if values & datatype are equal
// similarly we use !== and != .

let loggedIn= false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myName" && password === "myPass"){
        loggedIn =true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid cardentials! Please try again");
    }
}
let userName ;
 do{
    userName = window.prompt(` Enter your name`);
 }while(userName === "" || userName ===null)
    console.log(`Hello ${userName}`);

    //for loop
    for(let i = 1; i <= 10; i++){
        if(i ==5){
            break;
            // continue;
        }
        else{
            console.log(i);
        }
    }


