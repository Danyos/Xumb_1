const category=[
    {
        id:1,
        name:"Samsung"
    },
    {
        id:2,
        name:"Iphone"
    },
    {
        id:3,
        name:"Xiaomi"
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
        price:"45 000",
        images:{
            avatr_img:"images/courses-01.jpg",
            slider_images:["images/a03slid-1.png","images/a03slid-2.png"],
        }
    },
    {
        id:2,
        category_id:2,
        ram_id:2,
        color_id:2,
        name:"javaScript",
        price:"60 000",
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
        price:"160 000",
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
        name:"PHP",
        price:"260 000",
        images:{
            avatr_img:"images/70198.jpg",
            slider_images:["images/a03slid-1.png","images/a03slid-2.png"],
        }
    },
    {
        id:5,
        category_id:3,
        ram_id:2,
        color_id:4,
        name:"«Ապագա Փոքրիկ ծրագրավորող»",
        price:"260 000",
        images:{
            avatr_img:"images/190.jpg",
            slider_images:["images/a03slid-1.png","images/a03slid-2.png"],
        }
    }

]

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
showIndex(product)


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