let mydiv=document.getElementById("content")
let btn=document.getElementById("btn")


mydiv.addEventListener('mousemove',hello)

btn.addEventListener('click',removebox)

function removebox(){
mydiv.removeEventListener('mousemove',hello)


}
function hello(){
    console.log("mouse");
    }