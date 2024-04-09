let loadexternalfile=cdn=>{
    return new Promise((resolve,reject)=>{
      
    let linktag=document.createElement('link')
    linktag.rel='stylesheet'
    linktag.href=cdn
        linktag.onload=()=>resolve('file loaded successfully')
        linktag.onerror=()=>reject(new Error('file not loaded'))
        document.head.appendChild(linktag)
    })
  }
console.log(loadexternalfile('style.css'));

// gives error 
// console.log(loadexternalfile('style.css'));

loadexternalfile('style.css')
.then(response=>{
    console.log(response);
    document.body.insertAdjacentHTML('afterbegin','<h1>'+response+'</h1>')
})
.catch(err=>{
    console.log(err);
})