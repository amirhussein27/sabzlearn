{let input1=document.getElementById("input1")
let input2=document.getElementById("input2")
let span1=document.getElementById("span1")
let span2=document.getElementById("span2")
}
function userinput(){
    if(input1.value.length<12){
        span1.style.display="block"
        span1.style.color="red"
    }
    else{
        span1.innerHTML="correct username vlaue";
        span1.style.color="green"

          }
}

function userpassword(){
    if(input2.value.length<8){
        span2.style.display="block"
        span2.style.color="red"
    }
    else{
        span2.innerHTML="correct password vlaue";
        span2.style.color="green"
          }

}