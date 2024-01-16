let w=document.getElementById("w")
let a=document.getElementById("a")
let s=document.getElementById("s")
let d=document.getElementById("d")
let myp=document.getElementById("myp")
document.addEventListener('keyup',function(event){
    event.preventDefault()
    myp.innerHTML=event.key;
    let userkey=event.key.toUpperCase
    console.log(userkey);

})
w.addEventListener('click',function(event){
    myp.innerHTML=event.key;
    console.log(event.key);
})