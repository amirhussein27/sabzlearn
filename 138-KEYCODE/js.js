
let mine=document.getElementById("mine")
let keycode=document.getElementById("keycode")


document.body.addEventListener('keydown',function(event){
console.log("object");
mine.innerHTML=event.key;
keycode.innerHTML=event.keyCode;

})