let counter=document.querySelector('.counter')
let front=document.querySelector('.front')
let idx=0
updatenum();
function updatenum(){
    counter.innerText=idx+"%";
front.style.width=idx*0.3 + "%";
idx++;
if (idx < 101) {
    setTimeout(updatenum, 20);
  }
}