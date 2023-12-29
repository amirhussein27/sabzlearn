let myinp1=document.getElementById("myinp1")
let myinp2=document.getElementById("myinp2")
let result1=document.getElementById("result1")
let result2=document.getElementById("result2")
let bmi=document.getElementById("bmi")
let result3=document.getElementById("result3")
let mybtn=document.getElementById("mybtn")
let result4=document.getElementById("result4")
console.log(result3.value);

myinp1.addEventListener('change',function(event){
    console.log(event.target.value);

    result1.innerHTML=event.target.value +"cm"
})

myinp2.addEventListener('change',function(event){
    console.log(event.target.value);
    result2.innerHTML=event.target.value +"kg"
 
})

mybtn.addEventListener('click',calcul)

function calcul(event){
console.log(result1.innerHTML);

let newcm=parseFloat(result1.innerHTML)
// قد به توان دو
console.log(newcm*newcm/10000);

// مقدار وزن
let newkg=parseFloat(result2.innerHTML)
console.log(newkg);

// فرمول نهایی
let final=newkg/(newcm*newcm/10000)
console.log(final);
result3.innerHTML=Math.floor(final)
if(final<18.5){
    alert("low weight")
}
}