let myinp=document.getElementById("myinp")
let myUL=document.getElementsByClassName("myUL")
let container=document.getElementById("container")
let myul=document.getElementById("myul")


function addnewdo(newdo){
// console.log(trash);

console.log(newdo);
let newdoli=document.createElement('li')
newdoli.id="newli"
let trash1=document.createElement('li')
// console.log(newdotrash);

trash1.className='fa fa-trash'
trash1.id="trash"
console.log(trash1);

newdoli.innerHTML=newdo
container.append()

myul.append(newdoli,trash1)


trash1.addEventListener('click',function(){
    newdoli.remove()
    trash1.remove()
})
deleteme.addEventListener('click',function(){
    newdoli.remove()
    trash1.remove()
   })
}

myinp.addEventListener("keydown",function(event){
let newdo=event.target.value
    

    // console.log("object");

    // console.log(event.keyCode);

    if(event.keyCode==13){
        // console.log("13");

        // console.log(event.target);
    
// console.log(event.target.value);
addnewdo(newdo)

        }
   
    else{
        console.log("14");

    }
})


