
let allarrays=[
    {id:1 , title:'Album 1' , price:5 , img:'https://amireshraghi.ir/wp-content/uploads/2024/01/Album-1.png',count:1},
    {id:2 , title:'Album 2' , price:10 , img:'https://amireshraghi.ir/wp-content/uploads/2024/01/Album-2.png',count:1},
    {id:3 , title:'Album 3' , price:15 , img:'https://amireshraghi.ir/wp-content/uploads/2024/01/Album-3.png',count:1},
    {id:4 , title:'Album 4' , price:20 , img:'https://amireshraghi.ir/wp-content/uploads/2024/01/Album-4.png',count:1},
    {id:5 , title:'coffee' , price:25 , img:'https://amireshraghi.ir/wp-content/uploads/2024/01/Cofee.png',count:1},
    {id:6 , title:'shirt' , price:30 , img:'https://amireshraghi.ir/wp-content/uploads/2024/01/Shirt.png',count:1}

]
let userbasket=[]
let myselect=document.getElementById("myselect")

allarrays.forEach(function productgenerate(product){

let newshopitems=document.createElement('div')
newshopitems.classList.add('shop-items')

let newshopitem=document.createElement('div')
newshopitem.classList.add('shop-item')

let shopitemdetail=document.createElement('div')
shopitemdetail.classList.add('shop-item-details')

    let newprice=document.createElement('span')
    newprice.classList.add('shop-item-price')
newprice.innerHTML=product.price + "$"
    
let newimg=document.createElement('img')
newimg.setAttribute('src',product.img)
newimg.classList.add('shop-item-image')
// console.log(newimg);

let newtitle=document.createElement('span')
newtitle.classList.add('shop-item-title')
newtitle.innerHTML=product.title
// console.log(newtitle);

let newbutton=document.createElement('button')
newbutton.className='btn btn-primary shop-item-button'
newbutton.innerHTML="ADD TO CART"
// console.log(newbutton);
newbutton.addEventListener('click',function(){
    addtocart(product.id)
})
function addtocart(productid){
    // console.log(productid);
    addtobasket(productid)
}
function addtobasket(productid){
    let cartitems=document.getElementById("cartitems")
 
    // console.log("yesssss");
    let cartrow=document.getElementById("cartrow")
    let cartcol=document.getElementById("cartcol")
    let quantity=document.getElementById("quantity")

    let insertcartrow=cartitems.insertAdjacentHTML("afterbegin",' <div class="cart-row">')
    let insertcartitemcartcolumn=insertcartrow.insertAdjacentHTML("afterbegin",'  <div class="cart-item cart-column">')
    let insertcartquantity=insertcartitemcartcolumn.insertAdjacentHTML("afterbegin",' <div class="cart-quantity cart-column">')

// imgbasket.setAttribute('src',product.img)
insertcartitemcartcolumn.insertAdjacentHTML("afterbegin",'<span class="cart-item-title">'+product.title+'</span>')
insertcartitemcartcolumn.insertAdjacentHTML("afterbegin",'<img src="'+ product.img+'" class="cart-item-image">')
insertcartitemcartcolumn.insertAdjacentHTML("afterend",'<span class="cart-price cart-column">'+product.price+'</span>')
insertcartquantity.insertAdjacentHTML("afterbegin",'<button class="btn btn-danger">remove</button>')
insertcartquantity.insertAdjacentHTML("afterbegin",'<input class="cart-quantity-input" value='+product.count+' type="number">')

}

newshopitems.append(newshopitem)
newshopitem.append(newtitle,newimg,shopitemdetail)
shopitemdetail.append(newprice,newbutton)
myselect.append(newshopitems)
// console.log(newshopitems);
})

