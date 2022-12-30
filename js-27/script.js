//
// for(let i=0;i<15;i++){
//     if(i===10){
//         continue
//     }
//     console.log(i)
// }
// debugger
// let i=0
// while (i<15){
//         if(i===5){
//             i++
//         continue
//     }
//     console.log(i)
//     i++
// }









// jor:for(let i=0;i<5;i++){
//     for (let j=0;j<10;j++){
//         if (j === 5) {
//             continue jor
//         }
//         console.log(i,j)
//     }
// }
//
//
// document.body.innerHTML=`<input class="arjeq" data-i="2" data-j="5" onkeydown="search(event)" placeholder="greq arjeqy">`
//
//
// function search(ele) {
//     if(ele.key === 'Enter') {
//         let i=ele.target.dataset.i
//         let j=ele.target.dataset.j
//
//         if(i*j=== +ele.target.value){
//             alert("chisht")
//         }else{
//             alert("sxal")
//         }
//     }
// }
let tab = document.createElement("table")
document.body.append(tab)




for (let i = 0; i < 10; i++) {
    let tr =  document.createElement("tr")
    document.body.append(tr)
    tab.appendChild(tr)
    for (let j = 0; j < 10; j++) {
        tr.innerHTML += <td>${i}*${j}= <input data-i="${i}" data-j="${j}"  onkeydown="search(event)"  class="ok"></td>
    }


    }

    function search(ele){

            if(ele.key === 'Enter') {
                let i=ele.target.dataset.i
                let j=ele.target.dataset.j
                let x= ele.target.parentElement
                if(i*j=== +ele.target.value){
                    x.style.background="green"
                    x.innerHTML= ${i}*${j}=${ele.target.value}
                }else{
                    x.style.background="red"
                    x.innerHTML= ${i}*${j}=${ele.target.value}

                }
            }

        }
