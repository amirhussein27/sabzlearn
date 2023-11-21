let myinp=document.getElementById("myinp")
let myUL=document.getElementsByClassName("myUL")
let container=document.getElementById("container")
let myul=document.getElementById("myul")


function addnewdo(newdo){
// console.log(trash);

if(myinp.value==""){
    alert("emptytext")
}
else{console.log(newdo);
    let newdoli=document.createElement('li')
    newdoli.id="newli"
    let trash1=document.createElement('li')
    // console.log(newdotrash);
    let newhr=document.createElement('hr')
    
    
    trash1.className='fa fa-remove'
    trash1.id="trash"
    console.log(trash1);
    
    newdoli.innerHTML=newdo
    container.append()
    
    myul.append(newdoli,trash1,newhr)
    
    
    trash1.addEventListener('click',function(){
        newdoli.remove()
        trash1.remove()
        newhr.remove()
    
    })
    deleteme.addEventListener('click',function(){
        newdoli.remove()
        trash1.remove()
        newhr.remove()
       })
       newdoli.addEventListener('click',function(){
        if( newdoli.style.textDecoration!="line-through"){  
              newdoli.style.textDecoration="line-through"
              newdoli.style.color="lightgreen"
    }
    else{
        newdoli.style.textDecoration="none"
        newdoli.style.color="black"
    }
    
       }
       
       )
    }

   }

addme.addEventListener('click',function(event){
let newdo=myinp.value
    

    // console.log("object");

    // console.log(event.keyCode);


addnewdo(newdo)

        })
  