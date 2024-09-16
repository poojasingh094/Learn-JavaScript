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
