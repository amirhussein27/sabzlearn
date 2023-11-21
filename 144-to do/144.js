let inp=document.getElementsByClassName("inp")
let btn=document.getElementById("btn")
let new1=document.getElementById("new1")
let a=document.getElementsByClassName("a")
// let trash=document.getElementsByClassName("fa fa-trash")
let insert1=document.getElementById("insert1")

function addnewtodo(newtodo){
let newtodospan=document.createElement('span')
newtodospan.className='a'
let newtodoli=document.createElement('li')
newtodoli.className='ab'
let trash=document.createElement('li')
trash.className='fa fa-trash'
trash.id='b'
newtodospan.innerHTML=newtodo
newtodoli.append(newtodospan, trash)

insert1.append(newtodoli)

// console.log(insert1);
console.log(newtodoli);
trash.addEventListener('click',function(event){
    // console.log(event.target.parentElement);
    event.target.parentElement.remove()
})
}
// btn.addEventListener('click',function(){
// new1.innerHTML+='<li id="ab"><span id="new">'+inp.value+'</span><li id="b" class="fa fa-trash"></li></li>  <br>'

// })
// for(let i=0;i<trash.length;i++)
// trash[i].addEventListener('click',function(event){
//     console.log("object");
// })
// let trash=document.createElement('li')


inp[0].addEventListener('keydown',function(event){
let newtodo=event.target.value.trim();
// console.log(newtodo);
if(event.keyCode===13){
    if(newtodo){
        // console.log(newtodo);
        addnewtodo(newtodo)
    }
}

})




let addme=document.getElementById("addme")

addme.addEventListener('click',function(){
    console.log("addme");
})
