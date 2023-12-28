let imgelem=document.querySelector('img')
let images=document.getElementsByClassName('img-slider')
// console.log(images);

let prevbutton=document.getElementById("prev")
let nexbutton=document.getElementById("next")
let ended=document.getElementById("ended")

let imagearray=['image/1.jpg','image/2.png','image/3.jpg']
let imagearraylength=imagearray.length
let imgindex=0
console.log(ended);

function next(){
    imgindex++
    imgelem.setAttribute('src',imagearray[imgindex])
    if(imgindex<imagearraylength){
        console.log(imgindex);

    }
    else{
        alert("pics ended")




    }
    // console.log(imgindex);
}

function prev(){
    imgindex--
    imgelem.setAttribute('src',imagearray[imgindex])

    if(imgindex<0){
        alert("pics ended")
      
    }
    else{
        console.log(imgindex);

    }
    // console.log(imgindex);

}

prevbutton.addEventListener('click',prev)
nexbutton.addEventListener('click',next)
