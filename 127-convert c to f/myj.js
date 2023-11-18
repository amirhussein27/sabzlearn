let c=document.getElementById("c")
// console.log(c.innerHTML);
let f=document.getElementById("f")
// console.log(f.innerHTML);
let change=document.getElementById("change")
// console.log(change);
let myinp=document.getElementById("myinp")

change.addEventListener('click',function(){
if(c.innerHTML==="°c"){
    c.innerHTML="°f"
    f.innerHTML="°c"
    this.title="°c to °f"
    myinp.setAttribute('placeholder','°f')
}
else{
    c.innerHTML="°c"
    f.innerHTML="°f"
    this.title="°f to °c"
    myinp.setAttribute('placeholder','°c')


}
})
