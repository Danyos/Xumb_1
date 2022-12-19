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


// let user=()=>[
//     {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Brat",
//         "email": "Sincere@april.biz",
//         password:"123456"
//     },
//     {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         password:"123456"
//
//     },
//     {
//         "id": 3,
//         "name": "Clementine Bauch",
//         "username": "Samantha",
//         "email": "Nathan@yesenia.net",
//         password:"123456"
//
//     },
//     {
//         "id": 4,
//         "name": "Patricia Lebsack",
//         "username": "Karianne",
//         "email": "Julianne.OConner@kory.org",
//         password:"123456"
//
//     },
//     {
//         "id": 5,
//         "name": "Chelsey Dietrich",
//         "username": "Kamren",
//         "email": "Lucio_Hettinger@annie.ca",
//         password:"123456"
//
//     },
//     {
//         "id": 6,
//         "name": "Mrs. Dennis Schulist",
//         "username": "Leopoldo_Corkery",
//         "email": "Karley_Dach@jasper.info",
//         password:"123456"
//
//     },
//     {
//         "id": 7,
//         "name": "Kurtis Weissnat",
//         "username": "Elwyn.Skiles",
//         "email": "Telly.Hoeger@billy.biz",
//         password:"123456"
//
//     },
//     {
//         "id": 8,
//         "name": "Nicholas Runolfsdottir V",
//         "username": "Maxime_Nienow",
//         "email": "Sherwood@rosamond.me",
//         password:"123456"
//
//     },
//     {
//         "id": 9,
//         "name": "Glenna Reichert",
//         "username": "val",
//         "email": "Chaim_McDermott@dana.io",
//         password:"123456"
//
//     },
//     {
//         "id": 10,
//         "name": "Clementina DuBuque",
//         "username": "Moriah.Stanton",
//         "email": "Rey.Padberg@karina.biz",
//         password:"123456"
//
//     }
// ]
// let count=1
// function login(){
//     let login_val=document.querySelector("#login")
//     let psw_val=document.querySelector("#password")
//     let res={
//         login:login_val.value,
//         psw:psw_val.value,
//         msg:'',
//         error:false,
//         success:null
//     }
//    let val= validate(res)
//     console.log(val)
//     if(count==4){
//         document.querySelector('.btn').setAttribute('disabled','')
//         return errors("duq cheq",res.count=3)
//     }
//
//     if( val.success){
//         window.open("https://google.com")
//     }
//
// }
// function validate(data){
//
//     console.log(data)
//     if(data.login.length>2 && data.psw.length>4){
//         return action(data)
//     }
//
//     return errors("Dashtery sxal en",data)
//
// }
// function action(data){
//
//   let user1=user().find(res=>res.username===data.login && res.password===data.psw)
//     if(!user1){
//         return errors("Log pas chi hamapatasxanum",data)
//     }
//
//     return {
//       ...data,
//         success: user1
//     }
//
// }
// function errors(msg=" ",data){
//
//     let msg_error=document.querySelector('.msg_error')
//     msg_error.innerHTML=msg
//     data.error=true
//     data.msg=msg
//     count++
//     return data
// }
let msg_error=document.querySelector('.msg_error')
// msg_error.setAttribute('class',"one two")
msg_error.classList.add("barev")
msg_error.classList.remove("msg_error")

console.log(msg_error.innerText)


// let c_a=document.createElement("a")
// c_a.setAttribute("href","#")
// c_a.innerText="read more"
// msg_error.appendChild(c_a)

msg_error.innerHTML+=`<a href="#">read more </a>`


// 1
// stexcel shaxmati daska domov
// 2// lam punenas vor sexmes luysy miana ekrany sevana naev tarery sexmi lusyi vra anjatvi tarery sevanan










