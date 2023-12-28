let imgelem=document.querySelector('img')
let images=document.getElementsByClassName('img-slider')
// console.log(images);

let prevbutton=document.getElementById("prev")
let nexbutton=document.getElementById("next")
let ended=document.getElementById("ended")

let imagearray=['image/1.jpg','image/2.png','image/3.jpg','image/4.jpg']
let imagearraylength=imagearray.length
let imgindex=0
// console.log(ended);

function next(){
    imgindex++
    if(imgindex>imagearraylength-1){
        imgindex=0
      }
    imgelem.setAttribute('src',imagearray[imgindex])
console.log(imgindex);

  

    // console.log(imgindex);
}

function prev(){
    imgindex--
    if(imgindex<0){
    
        imgindex=imagearraylength-1
    }

    imgelem.setAttribute('src',imagearray[imgindex])
    console.log(imgindex);
  
    // console.log(imgindex);

}

prevbutton.addEventListener('click',prev)
nexbutton.addEventListener('click',next)
