
let mine=document.getElementById("mine")
let keycode=document.getElementById("keycode")
let location1=document.getElementById("location")

document.body.addEventListener('keydown',function(event){
// console.log("object");
mine.innerHTML=event.key;
keycode.innerHTML=event.keyCode;
if(event.key==="1" || event.key==="2" || event.key==="3" || event.key==="4" || event.key==="5" || event.key==="6" || event.key==="7" || event.key==="8" || event.key==="9" || event.key==="0" || event.key==="." || event.key==="Enter" || event.key==="+" || event.key==="-" || event.key==="*" || event.key==="/" ){
    // console.log("wdw");    
    location1.innerHTML="Numpad"
}
    else{
// console.log("object");  
location1.innerHTML="General keys"

    }
    
})