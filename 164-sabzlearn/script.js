let modalparent=document.querySelector('.modal-parent')
let btn=document.getElementById("btn")
let x=document.querySelector('.X')
let center=document.querySelector('.center')
console.log(x);

btn.addEventListener('click',function(){
modalparent.style.display="block"
center.style.filter='blur(10px)'

})

x.addEventListener('click',function(){
    modalparent.style.display="none"
center.style.filter='blur(0px)'

    })
    