let btn=document.getElementById("btn")

btn.addEventListener('click',()=>{
fetch('https://randomuser.me/api/').then(res=>{
  if (res.status===200) {
  return res.json()
  }
  return new Error('Error ;/')
})
.then(data=>{
    console.log("Data",data.results[0].name.last);
})
}
)