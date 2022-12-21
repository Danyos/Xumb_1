// let x=0
// function changecolor(e){
//
//     switch (x){
//         case 0:
//
//             x++
//             break
//         case 1:
//             e.target.style.background="blue"
//             x++
//             break
//         case 2:
//             e.target.style.background="orange"
//             x++
//             break
//         default:
//             x=1
//             e.target.style.background="red"
//     }
//
// }

// _________________________________________
//
// function changecolor(color=null){
//
//     let header=document.querySelector('.header')
//     if(color){
//         header.style.background=color
//     }else{
//         header.style.background=rgb()
//     }
//
// }
// function rgb(){
//
//         let red=Math.round(Math.random()*255)
//         let green=Math.round(Math.random()*255)
//         let blue=Math.round(Math.random()*255)
//         return `rgb(${red},${green},${blue})`
//
//
// }
// function color_header(e){
//     changecolor(e.target.value)
// }

// _____________________________



// let p=document.querySelectorAll(".text")
// p.forEach(res=>{
//     res.addEventListener("click",function (e){
//        e.target.style.background="red"
//     })
// })


// ________________________________
// let box=document.querySelector(".box")
// box.addEventListener("mouseover",function (e){
//    let elements=document.querySelector(".element")
//     elements.classList.toggle("d-none")
// })
//

_____________________________________________

function add(){
    let list_data=document.querySelector("#list_data")
    let list=document.querySelector(".list")
    list.innerHTML+=`<p>${list_data.value}</p>`
    list_data.value=''
}









