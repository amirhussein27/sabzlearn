let users=[
    {
        id:1,
        username:'amin',
        passwaord:1010
    }
    ,
    {
        id:2,
        username:'amir',
        passwaord:0
    }
    ,
    {
        id:3,
        username:'ali',
        passwaord:1122
    }
]

let jsondata='[{"id":1,"username":"amin","passwaord":1010},{"id":2,"username":"amir","passwaord":0},{"id":3,"username":"ali","passwaord":1122}]'
console.log(JSON.parse(jsondata));

