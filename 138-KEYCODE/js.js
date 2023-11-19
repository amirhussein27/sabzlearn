
let mine=document.getElementById("mine")
let keycode=document.getElementById("keycode")
let location1=document.getElementById("location")
let witch=document.getElementById("witch")

document.body.addEventListener('keydown',function(event){
// console.log("object");

event.preventDefault();
mine.innerHTML=event.key;
keycode.innerHTML=event.keyCode;
location1.innerHTML=event.location;
witch.innerHTML=event.which;
    }
    
)