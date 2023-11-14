let citiesdata={
tehran:{ city:'tehran',temp:12,weather:'sunny',humidity:23 ,windspeed:32},
shiraz:{ city:'shiraz',temp:32,weather:'cloudy',humidity:14 ,windspeed:12},
tabriz:{ city:'tabriz',temp:22,weather:'sunny',humidity:40 ,windspeed:22},
mashhad:{ city:'mashhad',temp:10,weather:'windly',humidity:17 ,windspeed:42},
esfehan:{ city:'esfehan',temp:15,weather:'sunny',humidity:21 ,windspeed:51},
}

let searchbtn=document.getElementById("search")
let myinp=document.querySelector(".search-bar")
searchbtn.addEventListener('click',function(){
// console.log(myinp.value);
let myinpvalue=myinp.value;
let maincitydata=citiesdata[myinpvalue]
console.log(maincitydata);
})
let maincitydata;
if(maincitydata){
document.querySelector('.city').innerHTML=maincitydata.city
document.querySelector('..weather.loading').classList.remove('.weather.loading')
}
else{
    console.log("object");

    console.log("object");
}