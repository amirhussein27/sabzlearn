// function addnewli(){
//     console.log("object");
// }
let but=document.getElementById("but")
but.addEventListener('click',function(){
    let myul=document.getElementById("myul");
    // myul.innerHTML+='<ul></ul>'
    myul.innerHTML+='<li id="myli">new li</li>'
    // console.log("object");

})
let but3=document.getElementById("but3")
but3.addEventListener('click',function(){
    let myul=document.getElementById("myul");
    // myul.innerHTML+='<ul></ul>'
    myul.innerHTML+='<li id="myli">new me</li>'
    // console.log("object");

})
let but4=document.getElementById("but4")
but4.addEventListener('click',function(){
    let myul=document.getElementById("myul");
    let myinp1=document.getElementById("myinp").value;
    let myinp='<li id="myli">'+myinp1+'</li>';
    // myul.innerHTML+='<ul></ul>'
    myul.innerHTML+=myinp;
    // console.log("object");
    // console.log(myinp);

})
let but2=document.getElementById("but2")
but2.addEventListener('click',function(){
    let myul=document.getElementById("myul");
    let myli=document.getElementById("myli")
    myli.remove();
    // console.log("object");

})