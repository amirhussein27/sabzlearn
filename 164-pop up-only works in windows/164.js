let btn=document.getElementById("btn")
let myh1=document.getElementById("myh1")
let newform=document.querySelector('.newform')
let closebox=document.querySelector('.newbtn')
console.log(closebox);
btn.addEventListener('click',function(){
newform.classList.replace("newform","new2form")
btn.style.visibility="hidden"
myh1.style.visibility="hidden"
})
closebox.addEventListener('click',function(){
   console.log("object");
        newform.classList.replace("new2form","newform")
        btn.style.visibility="visible"
        myh1.style.visibility="visible"
        })
