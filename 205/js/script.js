let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
let btn3=document.getElementById("btn3")
let btn4=document.getElementById("btn4")
let btn5=document.getElementById("btn5")

btn1.addEventListener('click',function(event){
    console.log(event.target.attributes[2]);
})
btn2.addEventListener('click',function(event){
    console.log(event.target.attributes[2]);
})
btn3.addEventListener('click',function(event){
    console.log(event.target.attributes[2]);
})
btn4.addEventListener('click',function(event){
    console.log(event.target.attributes[2]);
})
btn5.addEventListener('click',function(event){
    console.log(event.target.attributes[2]);
})