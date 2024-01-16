let w=document.getElementById("w")
let a=document.getElementById("a")
let s=document.getElementById("s")
let d=document.getElementById("d")
let myp=document.getElementById("myp")
document.addEventListener('keyup',function(event){
    console.log(event.key);

    if(event.key=="Backspace"){
     myp.innerHTML= myp.innerHTML.slice(0, -1)
    }
    else{
        myp.innerHTML+=event.key
    }
    
})
document.addEventListener('keyup',function(event){
    console.log(event.key);

    if(event.key="s"){
        console.log("u pressed s");
    
            myp.style.backgroundColor ="red";
            setTimeout(removeThing, 2000)
           
        
          
   
    }
    else{
       
    }
    
})
function removeThing(event) {
    myp.style.backgroundColor ="black";

   }