// let remenwords=document.getElementsByClassName("remenwords")
// let nav1=document.getElementsByClassName("nav1")[0]
// let lunbo=document.getElementsByClassName("lunbo")[0]
// let tuijiange=document.getElementsByClassName("tuijiange")[0]
// let tagzuixin=document.getElementsByClassName("tagzuixin")[0]
// let zuixin=document.getElementsByClassName("zuixin")[0]
// let gedanlist=document.getElementsByClassName("gedans")

// function hide2(){
//     nav1.style.display="none"
//     lunbo.style.display="none"
//     tuijiange.style.display="none"
//     tagzuixin.style.display="none"
//     zuixin.style.display="none"
// }
// function find2(){   
//     nav1.style.display="block"
// lunbo.style.display="block"
// tuijiange.style.display="block"
// tagzuixin.style.display="block"
// zuixin.style.display="block"
// }



// for(i=0;i<8;i++){
// remenwords[i].addEventListener("click",async()=>{
//     var res71
//     var data71
//     var data72
//     var res72
//     var gemin2 =document.getElementsByClassName("gemin2")
// var geshou2 =document.getElementsByClassName("geshou2")
// var shichang2 =document.getElementsByClassName("shichang2")
// var gedanmin = document.getElementsByClassName("gedanmin3")
// var chuangjianzhe =document.getElementsByClassName("chuangjianzhe")
// var gequshu =document.getElementsByClassName("gequshu")
// var gedanimg =document.getElementsByClassName("gedanimg0")

//  res72 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/top/playlist?limit=8&timerstamp=${Date.now()}",{
//         method:"get",
//               })
//        data72=await res72.json()
//       console.log(data72)
//       res71=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data72.playlists[i].id+"&timerstamp=${Date.now()}",{
//   method:"get",
//         })
// data71=await res71.json()

// // console.log(data71)
//     hide2()
// chuangjianzhe[i].innerHTML="创建者："+data72.playlists[i].creator.nickname
// gedanmin[i].innerHTML=data72.playlists[i].name
// gequshu[i].innerHTML="歌数："+data71.songs.length
// gedanimg[i].src=data72.playlists[i].coverImgUrl
// for(let j=i*10;j<(i+1)*10;j++){
    


//     gemin2[j].innerHTML=data71.songs[j-(i*10)].name
//     geshou2[j].innerHTML=data71.songs[j-(i*10)].ar[0].name
//     shichang2[j].innerHTML=transTime(data71.songs[j-(i*10)].dt) 

// }

//     gedanlist[i].style.display="block"
    
    
// for(j=0;j<8;j++){
// let gedanmin00=document.getElementsByClassName("gedanmin2")

// gedanmin00[j].onclick=function(){
//    find2()
//      for(let i=0;i<8;i++){
//     gedanlist[i].style.display="none"
// }
// }
// }

// })
// }

// function transTime(num){
//     let num3 =parseInt(num)
//     let num2=(num3-(num3%1000))/1000
//     let numb=num2%60
//     let numa=(num2-numb)/60
//     if(num2<60){
//         if(numb<10){
//             return "00:0"+numb.toString() 
//         }
//         return "00:"+numb.toString() 
//     }else{
//         if(numb<10&&numa>10){
//             return numa.toString()+":0"+numb.toString() 
//         }else if(numa<10&&numb>10){
//         return "0"+numa.toString() +":"+numb.toString() 
//     }else if(numa<10&&numb<10){
//         return "0"+numa.toString()+":0"+numb.toString() 
//     }else{
//         return numa.toString()+":"+numb.toString() 
    
//     }
//     }}