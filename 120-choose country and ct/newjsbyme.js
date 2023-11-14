// {
//     let dataobj={
//         iran:['tehran','tabriz','esfehan'],
//         england:
//          [  'london','manchester'] 
    
//     }
// }
let countryselectbox=document.querySelector('.countrySelect')
let countriesdata={
    Iran:['tehran','shiraz','mashhad','teh'],
    Canada:['a','b','c'],
    US:['d','e','f'],
    PleaseSelect:['PleaseSelect']

}
let selectcity=document.querySelector('.citySelect')


countryselectbox.addEventListener('change',function (){
let maincountryname=countryselectbox.value
let maincountrycities=countriesdata[maincountryname]
selectcity.innerHTML=''

maincountrycities.forEach(function(hi){
    // console.log(hi);
    selectcity.innerHTML+='<option>'+hi+'</option>'
}) 
console.log(maincountrycities);
})