let addButton=document.getElementById("addButton")
let clearButton=document.getElementById("clearButton")
let myul=document.getElementsByTagName("todoList")
let itemInput=document.getElementById("itemInput")
let completedwell=document.getElementsByClassName('completed well')
// li and ul
let todoarray=[]

function addnew(){
 
    if (itemInput.value==""){
        alert("empty")
    }
    else{
    // let newlabel=document.createElement('label')
    let myinp=itemInput.value

    // console.log(myinp);
    let newtodoobj={
        id:todoarray.length + 1,
        title:myinp,
        complete:false
    }
    let newlabel=document.createElement('label')
    newlabel.innerHTML=myinp
    // console.log(newlabel);

    let newli=document.createElement('li')
    newli.className="completed well"
    // console.log(newli);

    let newbtn=document.createElement('button')
    newbtn.className="btn btn-success"
    newbtn.innerText="Complete"
    // console.log(newbtn);


    let newbtn2=document.createElement('button')
    newbtn2.className="btn btn-danger"
    newbtn2.innerText="Delete"

    // console.log(newbtn2);
    
 

newli.append(newlabel,newbtn,newbtn2)
// console.log(newli);
clearButton.addEventListener('click',function(){
    localStorage.clear()
// console.log(completedwell);
newli.remove()
})

let myul=document.getElementById("todoList")
myul.append(newli)
    todoarray.push(newtodoobj)
    // console.log(todoarray);
    // newlabel.innerHTML=itemInput.value
    setlocalstorage(todoarray)
    todogenerator(todoarray)
  
    // good ux
    itemInput.value=''
    console.log(todoarray);
}
    }
    function todogenerator(todoarray){
        todoarray.forEach(function(todo){
        })
    }
    function setlocalstorage(todoarray){
localStorage.setItem('todos',JSON.stringify(todoarray))
    }
addButton.addEventListener('click',addnew)

clearButton.addEventListener('click',function(){
    localStorage.clear()})
