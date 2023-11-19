let myinp=document.getElementById("myinp")
let btn=document.getElementById("btn") //2

let belt=document.getElementById("belt")//3       1
let tasme=document.getElementById("tasme")//4       2 
let hexa=document.getElementById("hexa")//5           3
let bead=document.getElementById("bead")//6           4 
let mini=document.getElementById("mini")//7            5 
let boresh=document.getElementById("boresh")//8            6
let sim=document.getElementById("sim")//9             7 
let calender=document.getElementById("calender")//10            8
let compand=document.getElementById("compand")//11        9
let terak=document.getElementById("terak")//12      10
let bead2=document.getElementById("bead2")//12              11
let cleaner=document.getElementById("cleaner")//12          12




btn.addEventListener('click',function(){
belt.innerHTML=myinp.value/7500;

tasme.innerHTML=myinp.value/15000;


hexa.innerHTML=myinp.value/15000;

bead.innerHTML=myinp.value/3000;


mini.innerHTML=myinp.value/7500;

boresh.innerHTML=myinp.value/7500;

sim.innerHTML=myinp.value/7500;

calender.innerHTML=myinp.value/15000;

compand.innerHTML=myinp.value/3750;

terak.innerHTML=myinp.value/3750;

bead2.innerHTML=myinp.value/3750;

cleaner.innerHTML=myinp.value/15000;




})