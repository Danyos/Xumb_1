const category=[
    {
        id:1,
        name:"web"
    },
    {
        id:2,
        name:"childreen"
    },
    {
        id:3,
        name:"Marketin"
    },
]
const product_ram=[
    {
        id:1,
        name:"4gb"
    },
    {
        id:2,
        name:"6gb"
    },
    {
        id:3,
        name:"8gb"
    },
    {
        id:4,
        name:"2gb"
    },
]
const product_color=[
    {
        id:1,
        name:"black"
    },
    {
        id:2,
        name:"red"
    },
    {
        id:3,
        name:"pink"
    },
    {
        id:4,
        name:"orange"
    },
]

const product=[
    {
        id:1,
        category_id:2,
        ram_id:2,
        color_id:3,
        name:"Web 0",
        price:"5 000",
        images:{
            avatr_img:"images/courses-01.jpg",
            slider_images:["images/a03slid-1.png","images/a03slid-2.png"],
        }
    },
    {
        id:2,
        category_id:1,
        ram_id:2,
        color_id:2,
        name:"javaScript and js and web",
        price:"10 000",
        images:{
            avatr_img:"images/courses-02.jpg",
            slider_images:["images/a03slid-1.png","images/a03slid-2.png"],
        }
    },
    {
        id:3,
        category_id:1,
        ram_id:2,
        color_id:3,
        name:"React js",
        price:"30 000",
        images:{
            avatr_img:"images/courses-03.jpg",
            slider_images:["images/a03slid-1.png","images/a03slid-2.png"],
        }
    },
    {
        id:4,
        category_id:1,
        ram_id:3,
        color_id:1,
        name:"PHP an js",
        price:"2 000",
        images:{
            avatr_img:"images/70198.jpg",
            slider_images:["images/a03slid-1.png","images/a03slid-2.png"],
        }
    },
    {
        id:5,
        category_id:1,
        ram_id:2,
        color_id:4,
        name:"«Ապագա Փոքրիկ ծրագրավորող»",
        price:"60 000",
        images:{
            avatr_img:"images/190.jpg",
            slider_images:["images/a03slid-1.png","images/a03slid-2.png"],
        }
    }

]
let showProduct=[...product]
function showIndex(products){
    let mypage=document.querySelector(".mypage")
    let myproduct= document.createElement("div")
    myproduct.setAttribute('class',"grid myproduct")
    myproduct.setAttribute('id',"grid")
    mypage.appendChild(myproduct)
    products.forEach(res=>{
        let card = document.createElement("div")
        card.setAttribute('class',"card")
        myproduct.appendChild(card)
        card.innerHTML+=`<img class="card__image" src=${res.images.avatr_img}>`
        let card__info = document.createElement("div")
        card__info.setAttribute('class',"card__info")
        card.appendChild(card__info)
        card__info.innerHTML+=` <h4 class="card__title">${res.name}</h4>`
        card__info.innerHTML+=` <p class="card__price">${res.price} դրամ</p>`
        card__info.innerHTML+=` <button class="card__btn add-to-cart" data-ids=${res.id}>Add to Cart</button>`


    })






}
showIndex(showProduct)
let myproduct=document.querySelector(".myproduct")

let add_to_cart=document.querySelectorAll(".add-to-cart")
add_to_cart.forEach(res=>{
    res.addEventListener("click",(event)=>{
        if(res.classList.contains("add-to-cart")){

            res.classList.remove("add-to-cart")
            cart_count()
        }


    })

})

function cart_count(){
    let mycart=document.querySelector('.mycart')
    mycart.innerHTML=+mycart.innerHTML+1

}

// _______filter__________

let category_select=document.querySelector("#category")
console.log(category_select)
category.forEach(res=>{
    category_select.innerHTML+=`<option value=${res.id}>${res.name}</option>`
})

category_select.addEventListener("change",function (e) {
    let myproduct=document.querySelector(".myproduct")
    let price_way =document.querySelector("#price_way").value
    console.log(e.target.value)
    let products=product.filter(res=>res.category_id===+e.target.value)
    let item=products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

    myproduct.remove();
    if(price_way==1){
        showProduct=[...item.reverse()]
    }else{
        showProduct=[...item]
    }
    showIndex(showProduct)


})



function hightLow(){
    let myproduct=document.querySelector(".myproduct")
    let price_way =document.querySelector("#price_way").value
    let product=showProduct.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    console.log(product)
    myproduct.remove();
    if(price_way==1){
        showProduct=[...product.reverse()]
    }else{
        showProduct=[...product]
    }

    showIndex(showProduct)
}


function search(){
    let myproduct=document.querySelector(".myproduct")
    let price_way =document.querySelector("#price_way").value

    let searchval=document.querySelector("#searchval")
    let product_defalut=null
    if (category_select.value>0){
         product_defalut=product.filter(res=>res.name.toLowerCase().includes(searchval.value.toLowerCase()) && res.category_id==category_select.value)

    }else{
         product_defalut=product.filter(res=>res.name.toLowerCase().includes(searchval.value.toLowerCase()))

    }

    product_defalut=product_defalut.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    myproduct.remove();
    if(price_way==1){
        showProduct=[...product_defalut.reverse()]
    }else{
        showProduct=[...product_defalut]
    }

    showIndex(showProduct)

}
