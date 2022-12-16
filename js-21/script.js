const price=[
    {
        id:1,
        name:"Valod",
        payment_way:"master",
        price:"1500$"
    }, {
        id:2,
        name:"Vazgen",
        payment_way:"paypal",
        price:"1400$"
    }, {
        id:3,
        name:"grish",
        payment_way:"idram",
        price:"1700$"
    }, {
        id:4,
        name:"Karo",
        payment_way:"visa",
        price:"100$"
    }, {
        id:5,
        name:"Serob",
        payment_way:"bitcoin",
        price:"500$"
    }
]
// let obj={}
// price.forEach(res=>{
//     // obj[res.payment_way]? obj[res.payment_way]+=parseFloat(res.price): obj[res.payment_way]=parseFloat(res.price)
//     if(obj[res.payment_way]){
//         obj[res.payment_way]+=parseFloat(res.price)
//     }else{
//         obj[res.payment_way]=parseFloat(res.price)
//     }
// })
// console.log(obj)
// let myallprice=price.reduce((previousValue, currentValue)=>{
//     if(previousValue[currentValue.payment_way]){
//     previousValue[currentValue.payment_way]+=parseFloat(currentValue.price)
//     }else{
//        previousValue[currentValue.payment_way]=parseFloat(currentValue.price)
//     }
//     return previousValue
// },{})
// console.log(myallprice)
// let men=[
//     {
//         id:1,
//         name:"Vardush",
//         gender:"girl"
//     },{
//         id:2,
//         name:"Vaspur",
//         gender:"man"
//     },{
//         id:3,
//         name:"Geghanush",
//         gender:"girl"
//     },{
//         id:4,
//         name:"Pilipos",
//         gender:"man"
//     },{
//         id:5,
//         name:"Marlen",
//         gender:"girl"
//     },{
//         id:6,
//         name:"Gvidon",
//         gender:"man"
//     },
// ]
// let myallman=men.reduce((previousValue, currentValue)=>{
//     previousValue[currentValue.gender].push(currentValue.id)
//     return previousValue
// },{
//     man:[],
//     girl:[]
// })
// console.log(myallman)

//


let men=[
    {
        id:1,
        name:"Vardush",
        gender:"girl"
    },{
        id:2,
        name:"Vaspur",
        gender:"man"
    },{
        id:3,
        name:"Geghanush",
        gender:"girl"
    },{
        id:4,
        name:"Pilipos",
        gender:"man"
    },{
        id:5,
        name:"Marlen",
        gender:"girl"
    },{
        id:6,
        name:"Gvidon",
        gender:"man"
    },
]
let obj={
    man:[2,4,6],
    girl:[1,3,5]
}
for (const objKey in obj) {
    for (const objKeyElement of obj[objKey]) {

       console.log( men.find(res=>res.id===objKeyElement))
    }
    console.log(objKey)
}


// tnayin gumarnery stadartvorel u pahel nor obj mej ynst irenc gumari
// orinak
// {
//     bitcoin:"yndhanur gumar",
//         visa:"yndhanur gumar",
//     paypal:"yndhanur gumar"
//
// }
// tnayin
// phanj

// 2 prompt gri username psw asi barev esinch jan
// bayc  ete ir status false e nshankum e ays account jamanakin jnjvel e
// ayd depqum petq e aseq jnjvats tvyalner

// [
//     {
//         id:1,
//         name:"Muxi",
//         status:true,
//         surname:"Asatryan",
//         username:"ivanik",
//         psw:"Horter"
//     },
//     {
//         id:2,
//         name:"Muxi",
//         status:true,
//         surname:"Asatryan",
//         username:"ivanik",
//         psw:"Horter"
//     },
//     {
//         id:3,
//         name:"Muxi",
//         status:true,
//         surname:"Asatryan",
//         username:"ivanik",
//         psw:"Horter"
//     },
//     ]
// ________2______________


//['a','b','c','d','a','b','c','d',"e"]
// stexcel object vory khashvi te vor antamic qani hat e krknvel


// const category=[
//     {
//         id:1,
//         name:"koshik"
//     },
//     {
//         id:2,
//         name:"vernashapik"
//     },
// ]
// const product=[
//     {
//         id:1,
//         cat_id:1,
//         name:"basanoshka",
//         price:"20$",
//         statuss:true,
//     },
//     {
//         id:2,
//         cat_id:1,
//         name:"Ked",
//         price:"20$",
//         statuss:false,
//     },
//     {
//         id:3,
//         cat_id:1,
//         name:"Charox",
//         price:"20$",
//         statuss:true,
//     },
//     {
//         id:4,
//         cat_id:2,
//         name:"Knaci vernshapik",
//         price:"20$",
//         statuss:true,
//     },{
//         id:4,
//         cat_id:2,
//         name:"txamardu vernshapik",
//         price:"20$",
//         statuss:true,
//     },
// ]
// tpel yst kategoryaneri apranqnery  u vori status false gri arka che