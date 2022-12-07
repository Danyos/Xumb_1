// tnayin
// xai tesqov

//1 prompt unenal vor@ kharcni dher qarti gaxtnabary sxal patasxanelu depqum noric kberi prompty kasi sxal es patasxanel
//2 dnel limit 3 sxal patasxani depqum asi duq kexc ogtater eq
// 3 erb chisht gres asi greq dher bjjan heraxoshamary eli limiotov

// 4
// // xndir  function a(arg=0,sum=0){
//
// }
// a(7)

function bankomat(limit=3,msg="write your pin",step=1,check_info="1234",price="5000$"){
    let p=prompt(msg)
    if(p===check_info || step==check_info && limit>0 ){
    if(step==1){
       return  bankomat(3,"greq dher heraxoshamary",2,"098657545")

    }
    if(step==2){
        return  bankomat(3,"greq dher heraxoshamary ekac kdoy",3,"1111")
    }
    if(step==3){
        let c=confirm("duq cankanum eq stugel dher balans@")
        if(c){
            return  bankomat(4,"Dher hashivy kazmum e "+price,4,4)
        }else{
            return  bankomat(4,price,4,4)
        }
    }
    if(step==4){
        price=parseInt(price) >= parseInt(p)? parseInt(price) - parseInt(p):0;
        return 'dher balansy kazmum e '+price+"$"
    }
        return 'ok'
    }

    limit-=1
    if(limit===0){

        return "dher qarty arqelapakvel e"

    }

    return  bankomat(limit,msg,step,check_info)


}
console.log(bankomat())






// stexcel harc patasxan vor klini 2 hat promptov 2 hat confirmov
// verjum beri tresult te qani hatin e chisht patasxanel















