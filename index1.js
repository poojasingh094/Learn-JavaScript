//Counter Program
let count =0;
document.getElementById("b1").onclick= function(){
    count--;
    document.getElementById("count").textContent=count;
}

document.getElementById("b2").onclick= function(){
    count =0;
    document.getElementById("count").textContent=count;
}

document.getElementById("b3").onclick= function(){
    count++;
    document.getElementById("count").textContent=count;
}

//Math: built-in object that provides a collection of properties and methods
console.log(Math.PI);
console.log(Math.E);
let x=3.41;
let y=3.99;

x=Math.round(x);
y=Math.round(y);
console.log(x);
console.log(y);

x=Math.ceil(x)//ceil always round up
y=Math.floor(y);//floor always round down
console.log(x);
console.log(y);


let a=9;
let b=2;
let c=-5.12;
// z = Math.pow(x, y);
// console.log(z);
z= Math.sqrt(a);
console.log(z);

z= Math.abs(c);//abs eliminate -ve sign
console.log(z);

let max=Math.max(a,b,c);
let min=Math.min(a,b,c);
console.log(max);
console.log(min);

z=Math.log(a);
console.log(z);


