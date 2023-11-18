let c=document.getElementById("c")
// console.log(c.innerHTML);
let f=document.getElementById("f")
// console.log(f.innerHTML);
let change=document.getElementById("change")
// console.log(change);
let myinp=document.getElementById("myinp")

let reset=document.getElementById("reset")
let result=document.getElementById("result")
let convert=document.getElementById("convert")


change.addEventListener('click',function(){
if(c.innerHTML==="°c"){
    c.innerHTML="°f"
    f.innerHTML="°c"
    document.title="convert °f to °c"
    myinp.setAttribute('placeholder','°f')
}
else{
    c.innerHTML="°c"
    f.innerHTML="°f"
    document.title="convert °c to °f"

    myinp.setAttribute('placeholder','°c')
}
})

reset.addEventListener('click',function(){
result.innerHTML="";
myinp.value="";
})


convert.addEventListener('click',function(){
    if(c.innerHTML==="°c"){

  result.innerHTML=(myinp.value*9/5)+32
}
else{
    console.log("object");
    result.innerHTML=(myinp.value-32)*5/9
}
})