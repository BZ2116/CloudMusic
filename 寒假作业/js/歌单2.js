//歌单详情
let gedan11 =document.getElementById("gedanguangchang1");
let gedan22 =document.getElementById("gedanguangchang2");
let gedan33 =document.getElementById("gedanguangchang3");
let gedan44 =document.getElementById("gedanguangchang4");
let gedan55 =document.getElementById("gedanguangchang5");
let gedan66 =document.getElementById("gedanguangchang6");
let gedan77 =document.getElementById("gedanguangchang7");
let nav1=document.getElementsByClassName("nav1")[0]
let toptui =document.getElementsByClassName("toptui")[0]
let nav2 =document.getElementsByClassName("nav2")[0]
function hide1(){
nav1.style.display="none"
toptui.style.display="none"
nav2.style.display="none"
gedan11.style.display="none"
gedan22.style.display="none"
gedan33.style.display="none"
gedan44.style.display="none"
gedan55.style.display="none"
gedan66.style.display="none"
gedan77.style.display="none"
}

let gedanlist=document.getElementsByClassName("gedans")
let reword=document.getElementsByClassName("remenwords")

// gedanlist[0].style.display="block" 
for(let i=0;i<70;i++){
var gedanmin = document.getElementsByClassName("gedanmin3")
var chuangjianzhe =document.getElementsByClassName("chuangjianzhe")
var gequshu =document.getElementsByClassName("gequshu")
var gedanimg =document.getElementsByClassName("gedanimg0")
var liebiao2=document.getElementsByClassName("liebiao2")
// var liebiao33=liebiao2[i].getElementsByClassName("liebiao3")

reword[i].addEventListener("click",async()=>{
    var data7
    var res71
    var data71
    var res7
    var gemin2 =document.getElementsByClassName("gemin2")
var geshou2 =document.getElementsByClassName("geshou2")
var shichang2 =document.getElementsByClassName("shichang2")
// console.log(gemin2.length)
   if(i<10){
     res7 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/top/playlist/highquality?limit=11",{
        method:"get",
              })
      data7=await res7.json()
     res71=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data7.playlists[i+1].id,{
  method:"get",
        })
data71=await res71.json()
// console.log(data7)

// console.log(data71)
    hide1()
chuangjianzhe[i].innerHTML="创建者："+data7.playlists[i+1].creator.nickname
gedanmin[i].innerHTML=data7.playlists[i+1].name
gequshu[i].innerHTML="歌曲数："+data71.songs.length
gedanimg[i].src=data7.playlists[i+1].coverImgUrl
for(let j=i*10;j<(i+1)*10;j++){
    


    gemin2[j].innerHTML=data71.songs[j-(i*10)].name
    geshou2[j].innerHTML=data71.songs[j-(i*10)].ar[0].name
    shichang2[j].innerHTML=transTime(data71.songs[j-(i*10)].dt) 

}

    gedanlist[i].style.display="block"
    
    
for(j=0;j<70;j++){
let gedanmin00=document.getElementsByClassName("gedanmin2")

gedanmin00[j].onclick=function(){
    nav1.style.display="block"
    toptui.style.display="block"
    nav2.style.display="block"
    gedan77.style.display="block"  ; 
     for(let i=0;i<70;i++){
    gedanlist[i].style.display="none"
}
}
}

} else if(i>9&&i<20){
     res7 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/top/playlist/highquality?limit=10&cat=华语",{
        method:"get",
              })
      data7=await res7.json()
     res71=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data7.playlists[i-10].id,{
  method:"get",
        })
data71=await res71.json()

// console.log(data71)
    hide1()
chuangjianzhe[i].innerHTML="创建者："+data7.playlists[i-10].creator.nickname
gedanmin[i].innerHTML=data7.playlists[i-10].name
gequshu[i].innerHTML="歌曲数："+data71.songs.length
gedanimg[i].src=data7.playlists[i-10].coverImgUrl
for(let j=i*10;j<(i+1)*10;j++){
    gemin2[j].innerHTML=data71.songs[j-(i*10)].name
    geshou2[j].innerHTML=data71.songs[j-(i*10)].ar[0].name
    shichang2[j].innerHTML=transTime(data71.songs[j-(i*10)].dt) 

}

    gedanlist[i].style.display="block"
    
    
for(j=0;j<70;j++){
let gedanmin00=document.getElementsByClassName("gedanmin2")

gedanmin00[j].onclick=function(){
    nav1.style.display="block"
    toptui.style.display="block"
    nav2.style.display="block"
    gedan77.style.display="block"  ; 
     for(let i=0;i<70;i++){
    gedanlist[i].style.display="none"
}
}
}
}else if(i<30&&i>19){
    res7 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/top/playlist/highquality?limit=10&cat=日语",{
        method:"get",
              })
      data7=await res7.json()
     res71=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data7.playlists[i-20].id,{
  method:"get",
        })
data71=await res71.json()

// console.log(data71)
    hide1()
chuangjianzhe[i].innerHTML="创建者："+data7.playlists[i-20].creator.nickname
gedanmin[i].innerHTML=data7.playlists[i-20].name
gequshu[i].innerHTML="歌曲数："+data71.songs.length
gedanimg[i].src=data7.playlists[i-20].coverImgUrl
for(let j=i*10;j<(i+1)*10;j++){
    gemin2[j].innerHTML=data71.songs[j-(i*10)].name
    geshou2[j].innerHTML=data71.songs[j-(i*10)].ar[0].name
    shichang2[j].innerHTML=transTime(data71.songs[j-(i*10)].dt) 

}
    gedanlist[i].style.display="block"
for(j=0;j<70;j++){
let gedanmin00=document.getElementsByClassName("gedanmin2")

gedanmin00[j].onclick=function(){
    nav1.style.display="block"
    toptui.style.display="block"
    nav2.style.display="block"
    gedan77.style.display="block"  ; 
     for(let i=0;i<70;i++){
    gedanlist[i].style.display="none"
}
}
}
}else if (i<40&&i>29){
    res7 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/top/playlist/highquality?limit=10&cat=电子",{
        method:"get",
              })
      data7=await res7.json()
     res71=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data7.playlists[i-30].id,{
  method:"get",
        })
data71=await res71.json()

// console.log(data71)
    hide1()
chuangjianzhe[i].innerHTML="创建者："+data7.playlists[i-30].creator.nickname
gedanmin[i].innerHTML=data7.playlists[i-30].name
gequshu[i].innerHTML="歌曲数："+data71.songs.length
gedanimg[i].src=data7.playlists[i-30].coverImgUrl
for(let j=i*10;j<(i+1)*10;j++){
    gemin2[j].innerHTML=data71.songs[j-(i*10)].name
    geshou2[j].innerHTML=data71.songs[j-(i*10)].ar[0].name
    shichang2[j].innerHTML=transTime(data71.songs[j-(i*10)].dt) 

}
    gedanlist[i].style.display="block"
for(j=0;j<70;j++){
let gedanmin00=document.getElementsByClassName("gedanmin2")

gedanmin00[j].onclick=function(){
    nav1.style.display="block"
    toptui.style.display="block"
    nav2.style.display="block"
    gedan77.style.display="block"  ; 
     for(let i=0;i<70;i++){
    gedanlist[i].style.display="none"
}
}
}
}else if(i<50&&i>39){
    res7 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/top/playlist/highquality?limit=10&cat=流行",{
        method:"get",
              })
      data7=await res7.json()
     res71=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data7.playlists[i-40].id,{
  method:"get",
        })
data71=await res71.json()

// console.log(data71)
    hide1()
chuangjianzhe[i].innerHTML="创建者："+data7.playlists[i-40].creator.nickname
gedanmin[i].innerHTML=data7.playlists[i-40].name
gequshu[i].innerHTML="歌曲数："+data71.songs.length
gedanimg[i].src=data7.playlists[i-40].coverImgUrl
for(let j=i*10;j<(i+1)*10;j++){
    gemin2[j].innerHTML=data71.songs[j-(i*10)].name
    geshou2[j].innerHTML=data71.songs[j-(i*10)].ar[0].name
    shichang2[j].innerHTML=transTime(data71.songs[j-(i*10)].dt) 

}
    gedanlist[i].style.display="block"
for(j=0;j<70;j++){
let gedanmin00=document.getElementsByClassName("gedanmin2")

gedanmin00[j].onclick=function(){
    nav1.style.display="block"
    toptui.style.display="block"
    nav2.style.display="block"
    gedan77.style.display="block"  ; 
     for(let i=0;i<70;i++){
    gedanlist[i].style.display="none"
}
}
}
}else if (i<60&&i>49){
    res7 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/top/playlist/highquality?limit=10&cat=欧美",{
        method:"get",
              })
      data7=await res7.json()
     res71=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data7.playlists[i-50].id,{
  method:"get",
        })
data71=await res71.json()

// console.log(data71)
    hide1()
chuangjianzhe[i].innerHTML="创建者："+data7.playlists[i-50].creator.nickname
gedanmin[i].innerHTML=data7.playlists[i-50].name
gequshu[i].innerHTML="歌曲数："+data71.songs.length
gedanimg[i].src=data7.playlists[i-50].coverImgUrl
for(let j=i*10;j<(i+1)*10;j++){
    gemin2[j].innerHTML=data71.songs[j-(i*10)].name
    geshou2[j].innerHTML=data71.songs[j-(i*10)].ar[0].name
    shichang2[j].innerHTML=transTime(data71.songs[j-(i*10)].dt) 

}
    gedanlist[i].style.display="block"
for(j=0;j<70;j++){
let gedanmin00=document.getElementsByClassName("gedanmin2")

gedanmin00[j].onclick=function(){
    nav1.style.display="block"
    toptui.style.display="block"
    nav2.style.display="block"
    gedan77.style.display="block"  ; 
     for(let i=0;i<70;i++){
    gedanlist[i].style.display="none"
}
}
}
}else if(i<70&&i>59){
    res7 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/top/playlist/highquality?limit=10&cat=摇滚",{
        method:"get",
              })
      data7=await res7.json()
     res71=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data7.playlists[i-60].id,{
  method:"get",
        })
data71=await res71.json()
    hide1()
chuangjianzhe[i].innerHTML="创建者："+data7.playlists[i-60].creator.nickname
gedanmin[i].innerHTML=data7.playlists[i-60].name
gequshu[i].innerHTML="歌曲数："+data71.songs.length
gedanimg[i].src=data7.playlists[i-60].coverImgUrl
for(let j=i*10;j<(i+1)*10;j++){
    gemin2[j].innerHTML=data71.songs[j-(i*10)].name
    geshou2[j].innerHTML=data71.songs[j-(i*10)].ar[0].name
    shichang2[j].innerHTML=transTime(data71.songs[j-(i*10)].dt) 

}
    gedanlist[i].style.display="block"
for(j=0;j<70;j++){
let gedanmin00=document.getElementsByClassName("gedanmin2")

gedanmin00[j].onclick=function(){
    nav1.style.display="block"
    toptui.style.display="block"
    nav2.style.display="block"
    gedan77.style.display="block"  ; 
     for(let i=0;i<70;i++){
    gedanlist[i].style.display="none"
}
}
}
}

})
}




var transTime= function (num){
    let num3 =parseInt(num)
    let num2=(num3-(num3%1000))/1000
    let numb=num2%60
    let numa=(num2-numb)/60
    if(num2<60){
    if(numb<10){
      return "00:0"+numb.toString() 
    }
    return "00:"+numb.toString() 
    }else{
    if(numb<10&&numa>=10){
      return numa.toString()+":0"+numb.toString() 
    }else if(numa<10&&numb>=10){
    return "0"+numa.toString() +":"+numb.toString() 
    }else if(numa<10&&numb<10){
    return "0"+numa.toString()+":0"+numb.toString() 
    }else{
    return numa.toString()+":"+numb.toString() 
    
    }
    }}













