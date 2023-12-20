let addButton=document.getElementById("addButton")
let clearButton=document.getElementById("clearButton")
let myul=document.getElementsByTagName("todoList")
let myful=document.getElementById("todoList")
let itemInput=document.getElementById("itemInput")
let completedwell=document.getElementsByClassName('completed well')
// li and ul
let result=document.getElementById("result")
let todoarray=[]
let container=document.getElementById("container")
let myh2=document.getElementById("myh2")
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

  
    // good uxdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
localStorage.setItem(newtodoobj.id,newtodoobj.title)



    // good uxdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd

    itemInput.value=''
    console.log(newtodoobj.title);
}
    }
  
addButton.addEventListener('click',addnew)

clearButton.addEventListener('click',function(){
    localStorage.clear()})


    function hi(){
    let myinp=itemInput.value

        let newtodoobj={
            id:todoarray.length + 1,
            title:myinp.value,
            complete:false
        }


// newp=document.createElement('label')
let one=localStorage.getItem(1)
let two=localStorage.getItem(2)
let three=localStorage.getItem(3)
let four=localStorage.getItem(4)

        let newlabels=document.createElement('label')
        newlabels.innerHTML=one

        let newlis=document.createElement('li')
    newlis.className="completed well"
    
    let newbtns=document.createElement('button')
    newbtns.className="btn btn-success"
    newbtns.innerText="Complete"

    let newbtnz=document.createElement('button')
    newbtnz.className="btn btn-danger"
    newbtnz.innerText="Delete"
     
    
    newlis.append(newlabels,newbtns,newbtnz)
    myful.append(newlis)
    console.log(newlis);
    

    let newlabels2=document.createElement('label')
    newlabels2.innerHTML=two

    let newlis2=document.createElement('li')
newlis2.className="completed well"

let newbtns2=document.createElement('button')
newbtns2.className="btn btn-success"
newbtns2.innerText="Complete"

let newbtnz2=document.createElement('button')
newbtnz2.className="btn btn-danger"
newbtnz2.innerText="Delete"
 

newlis2.append(newlabels2,newbtns2,newbtnz2)
myful.append(newlis2)

let newlabels3=document.createElement('label')
newlabels3.innerHTML=three

let newlis3=document.createElement('li')
newlis3.className="completed well"

let newbtns3=document.createElement('button')
newbtns3.className="btn btn-success"
newbtns3.innerText="Complete"

let newbtnz3=document.createElement('button')
newbtnz3.className="btn btn-danger"
newbtnz3.innerText="Delete"


newlis3.append(newlabels3,newbtns3,newbtnz3)
myful.append(newlis3)

let newlabels4=document.createElement('label')
newlabels4.innerHTML=four

let newlis4=document.createElement('li')
newlis4.className="completed well"

let newbtns4=document.createElement('button')
newbtns4.className="btn btn-success"
newbtns4.innerText="Complete"

let newbtnz4=document.createElement('button')
newbtnz4.className="btn btn-danger"
newbtnz4.innerText="Delete"


newlis4.append(newlabels4,newbtns4,newbtnz4)
myful.append(newlis4)
    }
// -----------------------------------------------------
