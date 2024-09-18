//Number guessing game
const minNum = 1;
const maxNum = 100;
let ans = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.log(ans);

let attempts=0;
let guess;
let running =true;

while(running){
    guess= window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid no");
    }
    else{
        attempts++;
        if(guess < ans){
            window.alert("TOO LOW! TRY AGAIN!");
        }
        else if (guess > ans){
            window.alert("TOO HIGH! TRY AGAIN!");
        }
        else {
            window.alert(`CORRECT! The answer was ${ans}. It took you ${attempts} attempts.`)
            running = false;
        }     
    }
}

// function
function happyBirthday(username, age){
    console.log(`Happy Birthday ${username} you are ${age} year old now!`);
}

happyBirthday("Pooja", 20);

function add(x, y){
    let result =x+y;
    return result;
}
console.log(add(3, 5));

function isEven(number){
    return number%2 === 0? true : false;
    // if(number%2 === 0){
    //     return true;
    // }
    // else {
    //     return false;
    // }
}
console.log(isEven(4));

function isValidEmail(email){
return email.includes("@") ? true : false;
    // if (email.includes("@")){
    //     return true;
    // }
    // else{
    //     return false;
    // }
}
console.log(isValidEmail("pooja@G.com"));