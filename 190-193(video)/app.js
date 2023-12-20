let myinp=document.getElementById("itemInput")
let addtolist=document.getElementById("addButton")
let cleartodolist=document.getElementById("clearButton")
let myul=document.getElementById("todoList")

addtolist.addEventListener('click',addnew)
cleartodolist.addEventListener('click',function(){

})

function addnew(){
  let newlabel=document.createElement('label')
  newlabel.innerHTML=myinp.value
  let newli=document.createElement('li')
  newli.className='completed well'
  console.log(newli);
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
})
console.log(newli);
}
