// let obj={
//     name:"Samuel",
//     surname:"Piliposyan",
//     fullName(){
//         return this.name+this.surname
//     }
// }
// function a(){
//
//     console.log(this)
// }
//
// a.call(obj)
// this.alert("barev")




// _________________________________

// const obj={
//     name:"Samuel",
//     age:25
// }
//
// const obj2={
//     name:"valodik",
//     surname:"Piliposyan",
//     country:"Yerevan",
// }
// Object.freeze(obj2)
// obj2.name="gaspar"
// obj2.home=true
// delete obj2.country
// console.log(obj2)
// chi pioxum


// Object.seal(obj2)
// obj2.name="gaspar"
// obj2.home=true
// delete obj2.country
// console.log(obj2)
// miayn edit



// Object.preventExtensions(obj2)
// obj2.name="gaspar"
// obj2.home=true
// delete obj2.country
// console.log(obj2)
//
// const a=["barev"]
// a.push("hajox")
// const o={
//
// }
// o.a="ftg4r"


// let a=Object.keys(obj2)
// console.log(a)
// for (const obj2Key in obj2) {
//     if(!obj.hasOwnProperty(obj2Key)){
//         obj[obj2Key]=obj2[obj2Key]
//     }
// }
// for (const obj1Key in obj) {
//     if(!obj2.hasOwnProperty(obj1Key)){
//         obj2[obj1Key]=obj[obj1Key]
//     }
// }
// console.log(obj)
// console.log(obj2)



//
let obj={
    name:"Samuel",
    age:25
}

let obj2={

    surname:"Piliposyan",
    country:"Yerevan",
}

Object.defineProperties(obj2,{
    name: {
        value: "valodik",
        enumerable:true,
        configurable:true

    }
})
// delete  obj2.name

// obj2.name="samson"
// for (const obj2Key in obj2) {
//     console.log(obj2Key)
//
// }
console.log(obj2)
//
//
Object.freeze()
obj={


    ...obj,
    ...obj2,
}
obj2={


    ...obj2,
    ...obj,

}
//
console.log(obj)
console.log(obj2)



// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onscroll2