//Random No Generator

let randomNum = Math.floor(Math.random() *6)+1;//generates no b/w 1 to 6
console.log(randomNum);

//to generate a random no between 50 to 100
let min=50;
let max=100;
document.getElementById("btn").onclick = function(){
    let randomNo = Math.floor(Math.random() * (max-min+1))+min;
    // console.log(randomNo);
    document.getElementById("lbl").textContent=randomNo;
} 

//if-else
let isStudent = false;
if(isStudent){
    console.log("You are a student!");
}
else{
    console.log("You are not a student!")
}
