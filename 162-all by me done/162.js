    let myspan=document.getElementById("myspan")
let myinp=document.getElementById("myinp")
myinp.addEventListener("keyup",function(){
    if(5-(myinp.value.length+1)==-1)
    {
    //    console.log(0);
    myspan.innerHTML="0"
    }
    else{
        // console.log(5-(myinp.value.length+1));
        myspan.innerHTML=6-(myinp.value.length+1)
    }

})   