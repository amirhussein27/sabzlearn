let h1=document.getElementById("h1")
let un1=document.getElementById("un1")
let un2=document.getElementById("un2")
let un3=document.getElementById("un3")
let un4=document.getElementById("un4")


let h3=document.getElementById("h3")
let mine=document.getElementById("mine")
let keycode=document.getElementById("keycode")
let location1=document.getElementById("location")
let witch=document.getElementById("witch")

document.body.onload=function(){
    console.log("object");
h1.style.display="none"
un1.style.display="none"
un2.style.display="none"
un3.style.display="none"
un4.style.display="none"


}
document.body.addEventListener('keydown',function(event){
// console.log("object");
h3.style.display="none"

h1.style.display="block"
un1.style.display="block"
un2.style.display="block"
un3.style.display="block"
un4.style.display="block"
event.preventDefault();
mine.innerHTML=event.key;
keycode.innerHTML=event.keyCode;
location1.innerHTML=event.location;
witch.innerHTML=event.which;
    }
    
)