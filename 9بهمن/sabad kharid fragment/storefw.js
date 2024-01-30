
let allarrays=[
    {id:1 , title:'Album 1' , price:5 , img:'https://amireshraghi.ir/wp-content/uploads/2024/01/Album-1.png',count:1},
    {id:2 , title:'Album 2' , price:10 , img:'https://amireshraghi.ir/wp-content/uploads/2024/01/Album-2.png',count:1},
    {id:3 , title:'Album 3' , price:15 , img:'https://amireshraghi.ir/wp-content/uploads/2024/01/Album-3.png',count:1},
    {id:4 , title:'Album 4' , price:20 , img:'https://amireshraghi.ir/wp-content/uploads/2024/01/Album-4.png',count:1},
    {id:5 , title:'coffee' , price:25 , img:'https://amireshraghi.ir/wp-content/uploads/2024/01/Cofee.png',count:1},
    {id:6 , title:'shirt' , price:30 , img:'https://amireshraghi.ir/wp-content/uploads/2024/01/Shirt.png',count:1}

]
// console.log(allarrays[0].img);
let userbasket=[]
let cartitems=document.getElementById("cartitems")
let cartrow=document.getElementById("cartrow")
let cartcol=document.getElementById("cartcol")
let cartitme2=document.getElementsByClassName('cart-item cart-column')
// console.log(cartitme2);
allarrays.forEach(function (product){
    let newshopitems=document.createElement('div')
    newshopitems.classList.add('shop-items')

    let newshopitem=document.createElement('div')
    newshopitem.classList.add('shop-item')

    let newspan=document.createElement('span')
    newspan.classList.add('shop-item-title')
    newspan.innerHTML=product.title
    // console.log(newspan);

    let newimg=document.createElement('img')
    newimg.classList.add('shop-item-image')
    newimg.setAttribute('src',product.img)
    // console.log(newimg);


    let newdiv2=document.createElement('div')
    newdiv2.classList.add('shop-item-details')

    let newspan2=document.createElement('span')
    newspan2.classList.add('shop-item-price')
    newspan2.innerHTML=product.price

    let newbutton=document.createElement('button')
    newbutton.className='btn btn-primary shop-item-button'
    newbutton.innerHTML='Add To Cart'
    newbutton.addEventListener('click',function (){
    


            addproducttobasket(product.id)

        }
    )
let userfragment=document.createDocumentFragment()
    // console.log(newbutton);
    // console.log(newbutton);

let myselect=document.getElementById("myselect")
userfragment.appendChild(newshopitems)
myselect.appendChild(userfragment)
newshopitems.appendChild(newshopitem)


myselect.append(newshopitems)
newshopitems.append(newshopitem)
newshopitem.append(newspan,newimg,newdiv2)
newdiv2.append(newspan2,newbutton)



// console.log(myselect);



})

function addproducttobasket(productid){
    let mainproduct=allarrays.find(function(product){
    return product.id==productid
    })
let num=userbasket.includes(mainproduct,0)

if(num==true){
    console.log("truuuuuuuu");
}
else{
    userbasket.push(mainproduct)
    // console.log(mainproduct);
// console.log(userbasket);
basketgenerator(userbasket)
calculateprice(userbasket)
// console.log(userbasket);
// console.log(mainproduct);
// console.log(mainproduct);
// console.log(mainproduct);
// console.log(userbasket);
// console.log(mainproduct);
console.log(num);
}

  
    }
    


function basketgenerator(userbasket){
    cartitems.innerHTML=''

    userbasket.forEach(function(product){
let basketimg=document.createElement('img')
basketimg.classList.add('cart-item-image')
basketimg.setAttribute('src',product.img)
basketimg.setAttribute('width',"100")
basketimg.setAttribute('height',"100")


let baskettitle=document.createElement('span')
baskettitle.classList.add('cart-item-title')
baskettitle.innerHTML=product.title
// console.log(baskettitle);

let removebutton=document.createElement('button')
removebutton.className='btn btn-danger'
removebutton.innerHTML='remove'
removebutton.addEventListener('click',function(){
   removeproductfrombasket(product.id)
})
// console.log(removebutton);

let newcount=document.createElement('input')
newcount.classList.add('cart-quantity-input')
newcount.value=product.count
newcount.setAttribute('type','number')
newcount.addEventListener('change',function(){
    updatepagecount(product.id, newcount.value)
})

let basketprice=document.createElement('span')
basketprice.className="cart-price cart-column"
basketprice.innerHTML=product.price


let cartquan=document.createElement('div')
cartquan.className='cart-quantity cart-column'

let newcartrow=document.createElement('div')
newcartrow.classList.add('cart-row')

let seconddiv=document.createElement('div')
seconddiv.className='cart-item cart-column'

// cartitems.append(newcartrow)
// newcartrow.append(cartquan,seconddiv)
// seconddiv.append(removebutton,newcount)
// seconddiv.append(basketprice)
// cartquan.append(basketimg,baskettitle)

cartitems.append(newcartrow)
newcartrow.append(seconddiv,basketprice,cartquan)
seconddiv.append(basketimg,baskettitle)
cartquan.append(newcount,removebutton)

// console.log(cartitems);
})
}

function updatepagecount(productid,newcount){
    // console.log("product id: " + productid + ' new count: ' + newcount);
    userbasket.forEach(function(product){
        if(productid==product.id){
            product.count=newcount
        }
    })
calculateprice(userbasket)
}
function calculateprice(userbasket){
    let totalprice=0
    userbasket.forEach(function(product){
    totalprice+=product.count*product.price 
    // console.log(product.count );  
})

let calcul=document.getElementsByClassName('cart-total-price')
calcul[0].innerHTML=totalprice

// console.log(totalprice);
// console.log(newcount);
// console.log(product.price );
}

 function removeproductfrombasket(productid){
// console.log(productid);
userbasket=userbasket.filter(function(product){
    return product.id!==productid
})
basketgenerator(userbasket)
calculateprice(userbasket)

 }

 let removeproducts=document.getElementById("removeproducts")
removeproducts.addEventListener('click',function(product){
    // console.log("remove");
userbasket=[]
basketgenerator(userbasket)
})