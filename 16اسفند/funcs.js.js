  let users=[
      {id:1,name:'ali',age:18},
      {id:2,name:'amir',age:19},
      {id:3,name:'reza',age:20},
      {id:4,name:'zabi',age:21}
    ]

    function islogin(userid){
let checkusers=users.some(user=>user.id===userid)
return checkusers
    }
   export { islogin }
