let myinp=document.getElementById("myinp")
let myUL=document.getElementsByClassName("myUL")
let container=document.getElementById("container")
let myul=document.getElementById("myul")

let clear=document.getElementById("clear")
let saved=document.getElementById("saved")

clear.addEventListener('click',function(){
    localStorage.clear()
})

saved.addEventListener('click',function(){
   let localname= localStorage.getItem( myinp.value)
   console.log(localname);

   let newdoli=document.createElement('li')
   newdoli.id="newli"
   let trash1=document.createElement('li')
   // console.log(newdotrash);
   let newhr=document.createElement('hr')
   let myi=document.getElementsByTagName('li')


//    a function that show all localtorages from internet
   function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
        
    }

    return values;
}
  alert(allStorage())
//    newdoli.innerText=allStorage()
   
//    trash1.className='fa fa-remove'
//    trash1.id="trash"
//    // console.log(trash1);
   
//    container.append()
   
//    myul.append(newdoli,trash1,newhr)
})

function addnewdo(newdo){
// console.log(trash);

if(myinp.value==""){
    alert("emptytext")
}
else{
    // console.log(newdo);
    let newdoli=document.createElement('li')
    newdoli.id="newli"
    let trash1=document.createElement('li')
    // console.log(newdotrash);
    let newhr=document.createElement('hr')
    let myi=document.getElementsByTagName('li')
    
    
    trash1.className='fa fa-remove'
    trash1.id="trash"
    // console.log(trash1);
    
    newdoli.innerHTML=newdo
    container.append()
    
    myul.append(newdoli,trash1,newhr)

    // console.log( myi.length/2);
   
    // console.log(myinp.value);
    localStorage.setItem( myinp.value
    ,myinp.value)



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
              newdoli.style.opacity=0.5

    }
    else{
        newdoli.style.textDecoration="none"
        newdoli.style.color="black"
        newdoli.style.opacity=1

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
  

