let citiesdata={
    tehran:{ city:'tehran',temp:12,situation:'sunny'},
    shiraz:{ city:'shiraz',temp:32,situation:'cloudy'},
    tabriz:{ city:'tabriz',temp:22,situation:'sunny'},
    mashhad:{ city:'mashhad',temp:10,situation:'windly'},
    esfehan:{ city:'esfehan',temp:15,situation:'sunny'},
    }
    let search=document.getElementById("search");

search.addEventListener('click',function(){

let myinp=document.getElementById("myinp")
let myinpvalue=myinp.value
console.log(myinpvalue);
let citiesmain=citiesdata[myinpvalue]
console.log(citiesmain);

if(citiesmain){
    // console.log("1");
    document.getElementById("city").innerHTML=citiesmain.city + " :نام شهر"
    document.getElementById("temp").innerHTML=citiesmain.temp+" : دما"
    document.getElementById("situation").innerHTML=citiesmain.situation+" : وضعیت هوا"
console.log(citiesmain.temp);
}
else{
    console.log("b");
    document.getElementById("city").innerHTML=""+'<br>'
    document.getElementById("temp").innerHTML=""+'<br>'
    document.getElementById("situation").innerHTML=""+'<br>'
}
})

