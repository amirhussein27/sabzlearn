let objectdata={
iran:['tehran','ghom','mashhad'],
england:['london','liverpool','manchester'],
usa:['a','b','c'],
selectcity:['select city']
}
let cities=document.querySelector(".cities")
let countries=document.querySelector(".countries");
let countriesvalue=countries.value;

countries.addEventListener('change',function(){
    let countries=document.querySelector(".countries");
let countriesvalue=countries.value;
    // console.log(countriesvalue);
    let citiesselect=objectdata[countriesvalue]
    // console.log(cities);
    cities.innerHTML=''
    citiesselect.forEach(function(hi){
    cities.innerHTML+='<option>'+hi+'</option>'
    })
    console.log(citiesselect);
})