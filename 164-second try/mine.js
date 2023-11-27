let btn=document.getElementById("btn")
let myh1=document.getElementById("myh1")
let newform=document.querySelector('.newform')
let closebox=document.querySelector('.newbtn')
console.log(closebox);
btn.addEventListener('click',function(){
btn.style.display="none"
myh1.style.display="none"
newform.style.display="block"
})
closebox.addEventListener('click',function(){
   console.log("object");
        btn.style.display="block"
        myh1.style.display="block"
        newform.style.display="none"
        })
