let click=document.getElementById("click")
let myul=document.getElementById("myul")
click.addEventListener('click',function(){
let addnewli=document.createElement('li')
addnewli.innerHTML+="sda";
let myul2=myul.appendChild(addnewli);
console.log(myul2);

})