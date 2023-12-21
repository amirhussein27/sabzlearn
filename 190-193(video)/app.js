let myinp=document.getElementById("itemInput")
let addtolist=document.getElementById("addButton")
let cleartodolist=document.getElementById("clearButton")
let myul=document.getElementById("todoList")
let localbtn=document.getElementById("localbtn")

let array=[]

addtolist.addEventListener('click',addnew)


function addnew(){


  let newlabel=document.createElement('label')
  newlabel.innerHTML=myinp.value
  let newli=document.createElement('li')
  newli.className='completed well'
  // console.log(newli);
let newbtn=document.createElement('button')
newbtn.className='btn btn-success'
newbtn.innerHTML="complete"


let btn2=document.createElement('button')
btn2.className='btn btn-danger'
btn2.innerHTML="delete"


newli.append(newlabel,newbtn,btn2)
myul.append(newli)
cleartodolist.addEventListener('click',function(){
newli.remove()
localStorage.clear()
})
// console.log(newli);

btn2.addEventListener('click',function(){
  newli.remove()
  let mylocal=localStorage.getItem(myobj.id,newlabel)
localStorage.removeItem(myobj.id)
})
newbtn.addEventListener('click',function(){
  if( newlabel.style.textDecoration!="line-through"){
  newlabel.style.textDecoration="line-through"
}
else{
  newlabel.style.textDecoration="none"

}

})
let myobj={
  id:array.length+1 , title:myinp.value
}

array.push(myobj)

localStorage.setItem(myobj.id,myobj.title)

myinp.value=""
}

localbtn.addEventListener('click',function(){
  localStorage.clear()
})

function hi(){
  let myobj={
    id:array.length+1 , title:myinp.value
  }
  for(i=0;i<localStorage.length;i++){
    let one=localStorage.getItem(i)
    console.log(one);
  }
  let one=localStorage.getItem(i)







  let newlabel=document.createElement('label')
  newlabel.innerHTML=one 
  


  
  let newli=document.createElement('li')
  newli.className='completed well'
  // console.log(newli);
let newbtn=document.createElement('button')
newbtn.className='btn btn-success'
newbtn.innerHTML="complete"


let btn2=document.createElement('button')
btn2.className='btn btn-danger'
btn2.innerHTML="delete"


newli.append(newlabel,newbtn,btn2)
myul.append(newli)



btn2.addEventListener('click',function(){
  newli.remove()
  let mylocal=localStorage.getItem(myobj.id,newlabel)
localStorage.removeItem(myobj.id)
})
}