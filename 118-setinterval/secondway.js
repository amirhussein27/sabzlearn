

setInterval(function(){


let blueValue=Math.floor(Math.random()*255)
let greenValue=Math.floor(Math.random()*255)
let redValue=Math.floor(Math.random()*255)

console.log('rgb('+redValue+','+greenValue+','+blueValue+');');
document.body.style.backgroundColor='rgb('+redValue+','+greenValue+','+blueValue+')'

},1000)