let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
let btn3=document.getElementById("btn3")
let btn4=document.getElementById("btn4")
let btn5=document.getElementById("btn5")

btn1.addEventListener('click',function(event){
    console.log(event.target.dataset.color);
    document.documentElement.style.setProperty('--theme-color',event.target.dataset.color)

})
btn2.addEventListener('click',function(event){
    console.log(event.target.dataset.color);
    document.documentElement.style.setProperty('--theme-color',event.target.dataset.color)

})
btn3.addEventListener('click',function(event){
    console.log(event.target.dataset.color);
    document.documentElement.style.setProperty('--theme-color',event.target.dataset.color)

})
btn4.addEventListener('click',function(event){
    console.log(event.target.dataset.color);
    document.documentElement.style.setProperty('--theme-color',event.target.dataset.color)

})
btn5.addEventListener('click',function(event){
    console.log(event.target.dataset.color);
    document.documentElement.style.setProperty('--theme-color',event.target.dataset.color)
})