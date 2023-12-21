let mybtn=document.getElementById("mybtn")
let mydiv=document.getElementById("mydiv")
let result=document.getElementById("result")
mybtn.addEventListener('click',setanimation)
mydiv.addEventListener('animationstart',stratanimation)
mydiv.addEventListener('animationiteration',repeataanimation)
mydiv.addEventListener('animationend',endanimation)


function setanimation(){
    mydiv.style.animation  ='movediv 3s 3'
}

function stratanimation(){
    mydiv.style.backgroundColor="pink"
mydiv.innerHTML="animation started"
}
function repeataanimation(){
    mydiv.style.backgroundColor="green"
    mydiv.innerHTML="animation playing"

}

function endanimation(){
    mydiv.style.backgroundColor="gray"
    mydiv.innerHTML="animation ended"


}

