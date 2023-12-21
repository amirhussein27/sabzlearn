let myinp=document.getElementById("myinp")
let container=document.getElementById("container")
console.log(myinp.value);
myinp.addEventListener('change',function(event){
    console.log(event.target.value);
    let newvaule=event.target.value
    container.style.filter='brightness('+newvaule+'%)';
})

