let contextMenu=document.getElementById("contextMenu")

document.body.addEventListener('contextmenu',function(){
// console.log(event);
event.preventDefault()

// if(contextMenu.style.display=="none")
{
contextMenu.style.display="block"
    // console.log("object");
    contextMenu.style.left=event.pageX +'px'
    contextMenu.style.top=event.pageY +'px'
}
// else{
// contextMenu.style.display="none"

// }
})
document.body.addEventListener('click',function(){
    // console.log(event);
    event.preventDefault()
    
    if(contextMenu.style.display=="none"){
   
    }
    else{
    contextMenu.style.display="none"
    
    }
    })
// console.log(event);
document.body.addEventListener('keydown',function(event){
    // console.log(event.keyCode);
if(event.keyCode==27){
    contextMenu.style.display="none"

}

})