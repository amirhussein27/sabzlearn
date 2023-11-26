let mydiv=document.getElementById("content")
let btn=document.getElementById("btn")


mydiv.addEventListener('mousemove',function(){
    alert("hi")
})

btn.removeEventListener('click',removebox)

function removebox(){
    console.log("del");
}