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

//Checked = Property that determines the checked state of an HTML checkbox or radio button element
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPal = document.getElementById("payPalBtn");
const mySubmit= document.getElementById("mySubmit");
const subResult= document.getElementById("subResult");
const paymentResult= document.getElementById("paymentResult");

mySubmit.onclick = function(){
    
    if(myCheckBox.checked){
        subResult.textContent =`You are subscribed`;
    }
    else{
        subResult.textContent =`You are not subscribed`;
    }
    if(visaBtn.checked){
        paymentResult.textContent=`You are paying with Visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent=`You are paying with MasterCard`;
    }
    else if(payPal.checked){
        paymentResult.textContent=`You are paying with PayPal`;
    }
    else{
        paymentResult.textContent=`You must select your payment type `;
    }
}