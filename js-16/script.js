// function view(){
//     let num1=prompt("Greq tiv","7")
//     let num2=prompt("Greq tiv2","8")
//     let opertor=prompt("Greq gortcoxutyan nshan","+")
//    let val= validate(num1,num2,opertor)
//     if(val){
//         document.write(val)
//     }
// }
// function validate(num1,num2,opertor){
//     if(!isNaN(num1) && !isNaN(num2) && (opertor == "+"|| "-"||"/"|| "*")){
//      return action(num1,num2,opertor)
//     }
//     return errors("Sax")
//
// }
// function action(num1,num2,opertor){
//   return eval(num1+opertor+num2)
// }
// function errors(msg){
//     console.log(msg)
//     return false
// }

// let a=[1,2,3,4,5,6,7,"8",9]
// let b=[]
// for (let aKey in a) {
//     b.push(aKey*2)
// }
// console.log(b)
//
// const b=a.map(function (res){
//     if(res===false){
//         return  true
//     }
//     return res%2
// })

// console.log(b)
// for (let aKey in a) {
//   if(aKey%2==0){
//       b.push(aKey)
//   }
// }
// const c=a.filter(function (res){
//    if(res%2==0){
//        return true
//    }
//    return false
// }).map(function (res){
//     return res*10
// }).reduce(function (currentValue,previousValue){
//     return currentValue+previousValue
// },0)
// console.log(c)

// let res=a.reduce(function (currentValue,previousValue){
//     return currentValue+previousValue
// },0)
// let d=a.find(function (res){
//     if(res==="8"){
//         return true
//     }
// })
// console.log(d)
// a.filter(res=>res%2==0).forEach(function (res,index){
//     console.log(res)
// })
//


// tnayin

// 1. prompti mej tver glselis arandznacnes , ov
// 2. gumari irar
// 3. bazmapakel 2 ov
// 4.maqrel zangvacy krknvoxneric
// 5.aradznacnel tvyal zanvaci zuygery ev kentery even ev odd zangvacnerum
// nayel
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// tnayin 2 rd mas

// let arr=[
//     ['o', 'o', 'o', 'x', 'o'],
//     ['o', 'o', 'o', 'x', 'x'],
//     ['o', '*', 'o', 'x', '*'],
//     ['o', 'o', 'o', 'x', '*'],
//     ['x', '*', '*', 'x', 'o'],
// ]

// https://www.figma.com/file/BURn7pFfYgigkgQfvMNniz/Landing?node-id=580%3A2&t=x1adPTMxDJ9aGHWh-0

// filter
let x=[1,2,3,4,5,6,7,8,9]

// let y=x.filter(function (par){
//     if(typeof(par)=="number"){
//         return true
//     }
//     return false
// })
// let y2=x.map(function (params){
//     if(params==5){
//         return params*5
//     }
//     return params
//
// })
// console.log(y2)

// let y2=x.reduce(function (previousValue, currentValue){
//     return previousValue+currentValue
// },0)

// console.log(y2)
// x.forEach(function (params,i){
//     console.log(params,i)
// })
//
// let y3=x.findIndex(function (params){
//     if(params===6){
//         return true
//     }
// })
// console.log(y3)











