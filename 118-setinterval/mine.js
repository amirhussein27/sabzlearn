
    let colorsarray=['red','blue','gray','purple','pink']

setInterval(function(){

let randomcolor=Math.floor(Math.random()*colorsarray.length);
document.body.style.backgroundColor=colorsarray[randomcolor];

},1000)