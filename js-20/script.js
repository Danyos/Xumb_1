
//1.
// let test=["Vazgen","muxi","grish"]
//
// function games(test,pmsg="greq anun@",i=0){
//    let test_1= prompt(pmsg)
//     if(test_1.toUpperCase()==test[i].toUpperCase()){
//
//         if(i<test.length-1){
//             i++
//             return games(test,test[i],i)
//         }
//         return "avart"
//
//     }
//     games(test,pmsg,i)
// }
// games(test)


//2.
// function f(a,b=0,sum=0,d=true) {
//
//
//     if(b==0 && a!=0 || a>b && d) {
//         return f(b,a,sum,false)
//     }
//
//         if(a-1===b){
//             return sum
//         }
//         sum+=b
//         b--
//         return  f(a,b,sum,false)
//
//
//
// }
// console.log(f(15,7 ))
// console.log(f(15 ))
// console.log(f(7,15 ))


// tnayin

//1.xndir 2-i nman nuyn kzbunqov. 3 ketov st excel aynpisi rekursia erb muqtagres
// tiv veradarcni qez parz tvery zangvac (lucel  rekursia) orinak f(7,15)// 7,11,13 || f(7) // 1,3,57 || f(14,2)// 2,5,7,11,13
// 2. xndir 2-i nman nuyn kzbunqov. 3 ketov stexcel aynpisi
// ashxati veradarcni zuygeri zangvac  orinak //f(7,15)//[8,10,12,14]

// 3. zangvac unenal jnjel krknvoxnery andamnery (rekursiayov)




//
//
//
// function parztver(arg,arg2=0,i=2,res=[]){
//     if(arg==i){
//         return res
//     }
//     i++
//     //
//    if( checkParztver(i)){
//        res.push(i)
//    }
//
//     return parztver(arg,i,res)
//
// }
//
// function checkParztver(arg,i=parseInt(arg/2),res=true){
//     if(i===1){
//         return res
//     }
//     if(arg%i==0){
//         res=false
//         return false
//     }
//     i--
//     return checkParztver(arg,i,res)
//
//
//
// }
//
// console.log(parztver(20,40))
//





// function parztver2(a,b=0,i=a,res=[],d=true) {
//     if(b==0 && a!=0 || a>b && d) {
//         return f(b,a,res,false)
//     }
//     if(i==b){
//         return res
//     }
//     if( checkParztver(i,b)){
//        res.push(i)
//    }
//     i++
//     return  parztver2(a,b,i,res,false)
// }
// function checkParztver(start,end,i=2,j=parseInt(end/2),res=true){
//     if(i==j){
//         return res
//     }
//     if(start%i==0 && start!=i){
//         res=false
//         return  false
//     }
//     i++
//   return  checkParztver(start,end,i,j,res)
// }
// console.log(parztver2(13,50 ))

let company="Nisan"
let model="March"
let year="2003"
let color="black"

const company2="Nisan"
let model2="March"
let year2="2003"
let color2="black"

console.log(window)

const car={
    company:"Nisan",
    model:"March",
    year:"2003",
    color:"black",
    "heppy birtday":"1997"
}
car["heppy"]="Muxi"
// car.company="axmax firma"
car['did Mount']="2022"
// delete  car.company
// let x="colors"
// if(!(x in car)){
//     car[x]="red"
// }
// console.log(car)
// let str="barev"
// str.slice()
//
// const k=[414,4,4,4]
// k.push(7)


// for(const x in car){
//     console.log(x,car[x])
// }




const price=[
    {
        id:1,
        name:"Valod",
        payment_way:"visa",
        price:"1500$"
    }, {
        id:2,
        name:"Vazgen",
        payment_way:"paypal",
        price:"1400$"
    }, {
        id:3,
        name:"grish",
        payment_way:"bitcoin",
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
console.log(price)
price.forEach(res=>{
    console.log(res.price)
})
// tnayin gumarnery stadartvorel u pahel nor obj mej ynst irenc gumari
// orinak
// {
//     bitcoin:"yndhanur gumar",
//         visa:"yndhanur gumar",
//     paypal:"yndhanur gumar"
//
// }

// urnenq nor object user voruy uni anun,azganun,username,passord mekl statuss

// status ayn mardn e ov false e nshankum e ir anketan pakvel e

// dher xndiry login password sarqeln e vory stugelu eq promptov u plus ete statuss false aseq duq jnjvac ogtater eq
// bazai karucvacqy motavor
// [
//     {
//         id,
//         name,
//         surname,
//         username,
//         psw
//     }
//     ]
// dhez ognutyan khasni find hramany



