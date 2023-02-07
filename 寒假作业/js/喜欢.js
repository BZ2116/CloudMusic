
var gequarr=[]
var dangqianbofang=document.getElementById("dangqianbofang")
var fengmian1=document.getElementById("fengmian1")
var gemin1=document.getElementsByClassName("gemin1")[0]
var geshou1=document.getElementsByClassName("geshou1")[0]
var geminarr=[]
var geshouarr=[]
var idarr=[]
var imgarr=[]
var dtarr=[]
var limit1 =document.getElementsByClassName("dangqian1")
var url=[]

var indexge=-1

// 侧边栏
let liebiao =document.getElementById("liebiao");
let liebiao1=document.getElementById('liebiao1');
let count3 =0;
liebiao.addEventListener("click",function(){
    if(count3==0){
    liebiao1.style.display="block";
    count3=1
}else{
    liebiao1.style.display="none";
    count3=0
}
})

let list5 = document.getElementsByClassName("dangqian1")
            for (var i = 0; i < list5.length; i++) {
            list5[i].onmouseover = function () {
                this.style.backgroundColor = "rgb(209,209,209)";
            };
            list5[i].onmouseout = function () {
                this.style.backgroundColor = "";
            };
        }
        var liebiao3=document.getElementsByClassName("liebiao3");
        for(var i=0;i<liebiao3.length;i++){
        if(i%2==0){
            liebiao3[i].style.backgroundColor="rgb(247,247,247)";
        }else{
            liebiao3[i].style.backgroundColor="white"
        }
    
    }








    async function start(){
        //获取头像，用户名等
        const res100 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/user/detail?uid=8334102993",{
  method:"get",


        })
const data100=await res100.json()

let avatar=document.getElementById("avatar")
let username0=document.getElementById("username0")
avatar.src=data100.profile.avatarUrl
username0.innerHTML=data100.profile.nickname

 var liebiao2=document.getElementsByClassName("liebiao2")//歌单中的父列表，在该元素下添加歌曲
// console.log(liebiao2)
let gedanlist=document.getElementsByClassName("gedans")//歌单界面
//获取用户歌单数
        let res1=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/user/playlist?uid=8334102993&timerstamp=${Date.now()}",{
            method:"get",
                  })
          var data1=await res1.json()
        //   console.log(data1)
//获取喜欢的音乐的歌曲
          let res2=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data1.playlist[0].id+"&cookie="+encodeURIComponent('"MUSIC_A_T=1674888773759; Max-Age=2147483647; Expires=Sat, 17 Feb 2091 06:10:24 GMT; Path=/eapi/clientlog;;MUSIC_R_T=0; Max-Age=2147483647; Expires=Sat, 17 Feb 2091 06:10:24 GMT; Path=/neapi/clientlog;;MUSIC_R_T=0; Max-Age=2147483647; Expires=Sat, 17 Feb 2091 06:10:24 GMT; Path=/eapi/clientlog;;MUSIC_A_T=1674888773759; Max-Age=2147483647; Expires=Sat, 17 Feb 2091 06:10:24 GMT; Path=/wapi/clientlog;;MUSIC_R_T=0; Max-Age=2147483647; Expires=Sat, 17 Feb 2091 06:10:24 GMT; Path=/neapi/feedback;;MUSIC_A_T=1674888773759; Max-Age=2147483647; Expires=Sat, 17 Feb 2091 06:10:24 GMT; Path=/eapi/feedback;;MUSIC_A_T=1674888773759; Max-Age=2147483647; Expires=Sat, 17 Feb 2091 06:10:24 GMT; Path=/weapi/feedback;;MUSIC_A_T=1674888773759; Max-Age=2147483647; Expires=Sat, 17 Feb 2091 06:10:24 GMT; Path=/api/clientlog;;MUSIC_R_T=0; Max-Age=2147483647; Expires=Sat, 17 Feb 2091 06:10:24 GMT; Path=/weapi/feedback;;MUSIC_R_T=0; Max-Age=2147483647; Expires=Sat, 17 Feb 2091 06:10:24 GMT; Path=/api/clientlog;;__csrf=2c7fbbde865bfb461428007b03b870c9; Max-Age=1296010; Expires=Tue, 14 Feb 2023 02:56:27 GMT; Path=/;;MUSIC_A_T=1674888773759; Max-Age=2147483647; Expires=Sat, 17 Feb 2091 06:10:24 GMT; Path=/weapi/clientlog;;MUSIC_A_T=1674888773759; Max-Age=2147483647; Expires=Sat, 17 Feb 2091 06:10:24 GMT; Path=/openapi/clientlog;;MUSIC_A_T=1674888773759; Max-Age=2147483647; Expires=Sat, 17 Feb 2091 06:10:24 GMT; Path=/wapi/feedback;;MUSIC_A=bf8bfeabb1aa84f9c8c3906c04a04fb864322804c83f5d607e91a04eae463c9436bd1a17ec353cf7786b64e344ceb03d9068c947cc795f69993166e004087dd32f6f962663b22052611c474b737a5af43a866878aeba3cacd9ece83d776f747c807e650dd04abd3fb8130b7ae43fcc5b; Max-Age=1296000; Expires=Tue, 14 Feb 2023 02:56:17 GMT; Path=/;;MUSIC_R_T=0; Max-Age=2147483647; Expires=Sat, 17 Feb 2091 06:10:24 GMT; Path=/eapi/feedback;;MUSIC_A_T=1674888773759; Max-Age=2147483647; Expires=Sat, 17 Feb 2091 06:10:24 GMT; Path=/api/feedback;;MUSIC_R_T=0; Max-Age=2147483647; Expires=Sat, 17 Feb 2091 06:10:24 GMT; Path=/weapi/clientlog;;MUSIC_SNS=; Max-Age=0; Expires=Mon, 30 Jan 2023 02:56:17 GMT; Path=/;MUSIC_R_T=0; Max-Age=2147483647; Expires=Sat, 17 Feb 2091 06:10:24 GMT; Path=/wapi/clientlog;;MUSIC_R_T=0; Max-Age=2147483647; Expires=Sat, 17 Feb 2091 06:10:24 GMT; Path=/wapi/feedback;;MUSIC_A_T=1674888773759; Max-Age=2147483647; Expires=Sat, 17 Feb 2091 06:10:24 GMT; Path=/neapi/clientlog;;MUSIC_A_T=1674888773759; Max-Age=2147483647; Expires=Sat, 17 Feb 2091 06:10:24 GMT; Path=/neapi/feedback;;MUSIC_R_T=0; Max-Age=2147483647; Expires=Sat, 17 Feb 2091 06:10:24 GMT; Path=/api/feedback;;MUSIC_R_T=0; Max-Age=2147483647; Expires=Sat, 17 Feb 2091 06:10:24 GMT; Path=/openapi/clientlog;"')+"&timerstamp=${Date.now()}",{
            method:"get",
                  })
          var dataxihuan=await res2.json()
// console.log(dataxihuan)
//喜欢的音乐的信息
let chuangjianzhe100=document.getElementById("chuangjianzhe100")
let gequshu100=document.getElementById("gequshu100")
let gedanimg100=document.getElementById("gedanimg100")
var liebiao21=document.getElementById("liebiao21")//喜欢的音乐的歌单的父列表
//喜欢的音乐的添加
for(let m=0;m<dataxihuan.songs.length;m++){
    var liebiao3add=document.createElement("li")
    liebiao3add.className="liebiao3"
liebiao2[0].appendChild(liebiao3add)
var countadd=document.createElement("span")
var div1add=document.createElement("div")
div1add.className="gemin2add"
var div2add=document.createElement("div")
div2add.className="geshou2add"
var div3add=document.createElement("div")
div3add.className="shichang2add"
liebiao3add.appendChild(countadd)
liebiao3add.appendChild(div1add)
liebiao3add.appendChild(div2add)
liebiao3add.appendChild(div3add)
}

//喜欢的音乐的歌曲添加
for(let i=0;i<dataxihuan.songs.length;i++){
let xuhao1=liebiao21.getElementsByTagName("span")
let gemin2add1=liebiao21.getElementsByClassName("gemin2add")
let geshou2add1=liebiao21.getElementsByClassName("geshou2add")
let shichang2add1=liebiao21.getElementsByClassName("shichang2add")
    gemin2add1[i].innerHTML=dataxihuan.songs[i].name
        geshou2add1[i].innerHTML=dataxihuan.songs[i].ar[0].name
        shichang2add1[i].innerHTML=transTime(dataxihuan.songs[i].dt)
if(i+1<10){
    xuhao1[i].innerHTML="0"+(i+1)
    }else{
    xuhao1[i].innerHTML=i+1
    }
}
gedanimg100.src=data1.playlist[0].coverImgUrl
chuangjianzhe100.innerHTML="创建者："+data1.playlist[0].creator.nickname
gequshu100.innerHTML="歌曲："+dataxihuan.songs.length


//喜欢的音乐向数组中记录数据

for(let i=0;i<dataxihuan.songs.length;i++){
geminarr.push(dataxihuan.songs[i].name)
geshouarr.push(dataxihuan.songs[i].ar[0].name)
idarr.push(dataxihuan.songs[i].id)
imgarr.push(dataxihuan.songs[i].al.picUrl)
dtarr.push(dataxihuan.songs[i].dt)
}
console.log(geminarr)
// 音乐url
for(let y=0;y<dtarr.length;y++){
    let res111=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/song/url/v1?id="+idarr[y]+"&level=exhigh&timerstamp=${Date.now()}",{
      method:"get",
  })
  let data111=await res111.json()
  url.push(data111.data[0].url)
   }  
//增加侧栏歌单
var wodegedan=document.getElementsByClassName("wodegedan")[0]
for(let v=1;v<data1.playlist.length;v++){
  let a=document.createElement("li")
  a.className="wodege"
  wodegedan.appendChild(a)
//   console.log(a)
  let c = document.createElement("div")
  a.appendChild(c)
  c.className="gedanmin"
  let b= document.createElement("img")
  a.insertBefore(b,c)
  b.className="wodeimg"
}
var list6 = document.getElementsByClassName("wodege")//侧栏歌单，点击显示歌单页面
let wodeimg=document.getElementsByClassName("wodeimg")
// console.log(list6)
// console.log(wodeimg)
//侧栏歌单封面和名字
let gedanmin00=document.getElementsByClassName("gedanmin")
for(let v=1;v<data1.playlist.length;v++){
wodeimg[v-1].src=data1.playlist[v].coverImgUrl
  gedanmin00[v-1].innerHTML=data1.playlist[v].name
}
// console.log(data2)
//播放，添加歌曲
for(let i=1;i<data1.playlist.length;i++){//遍历歌单中的歌曲
    let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data1.playlist[i].id+"&timerstamp=${Date.now()}",{
   method:"get",
         })
 let data27=await res27.json()//我的歌单（除了我喜欢的音乐）
 //创建歌曲
    for(let m=0;m<data27.songs.length;m++){
         var liebiao3add=document.createElement("li")
         liebiao3add.className="liebiao3"
     liebiao2[i].appendChild(liebiao3add)
     var countadd=document.createElement("span")
     var div1add=document.createElement("div")
     div1add.className="gemin2add"
     var div2add=document.createElement("div")
     div2add.className="geshou2add"
     var div3add=document.createElement("div")
     div3add.className="shichang2add"
     liebiao3add.appendChild(countadd)
     liebiao3add.appendChild(div1add)
     liebiao3add.appendChild(div2add)
     liebiao3add.appendChild(div3add)
     }
     //向数组中记录数据（除音乐的url）
      for(let j=0;j<data27.songs.length;j++){
  geminarr.push(data27.songs[j].name)
  geshouarr.push(data27.songs[j].ar[0].name)
  idarr.push(data27.songs[j].id)
  imgarr.push(data27.songs[j].al.picUrl)
  dtarr.push(data27.songs[j].dt)
  
  }
    
    }

 for(let i=0; i<data1.playlist.length-1;i++){//遍历侧栏歌单
list6[i].onclick=async function(){

   //向数组中记录音乐url数据
  for(let y=url.length;y<dtarr.length;y++){
  let res111=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/song/url/v1?id="+idarr[y]+"&level=exhigh&timerstamp=${Date.now()}",{
    method:"get",
})
let data111=await res111.json()
url.push(data111.data[0].url)
 }  

}
}

var liebiao3=document.getElementsByClassName("liebiao3");//全部歌曲，点击可播放音乐
// console.log(liebiao3)
for(let m=0;m<geminarr.length;m++){//遍历所有歌曲
liebiao3[m].onclick=async  function(){
    if(Boolean(url[m]) ==1){
    indexge++
gequarr.push(url[m])//记录播放的音乐


if(limit1.length<25){//控制播放列表的长度
//在播放列表中添加
let dangqian1=document.createElement("li")
dangqian1.className="dangqian1"
dangqianbofang.appendChild(dangqian1)
let gemin=document.createElement("div")
gemin.className="gemin"
let shichang=document.createElement("div")
shichang.className="shichang"
dangqian1.appendChild(gemin)
dangqian1.appendChild(shichang)
gemin.innerHTML=geminarr[m]
shichang.innerHTML=transTime(dtarr[m])
audio.src=gequarr[indexge] //播放音乐
//播放器的封面，歌名，歌手信息
gemin1.innerHTML=geminarr[m]
geshou1.innerHTML=geshouarr[m]
fengmian1.src=imgarr[m]
setTimeout("bofang2()",1000)
bofang()
bofang()

}
var dangqian1=document.getElementsByClassName("dangqian1")
for(let s=0;s< dangqian1.length;s++){
  dangqian1[s].onclick=function(){
    indexge=s
    for(let t=0;t<geminarr.length;t++){
      if(url[t]==gequarr[indexge]){
          gemin1.innerHTML=geminarr[t]
          geshou1.innerHTML=geshouarr[t]
          fengmian1.src=imgarr[t]
      }
  }
  audio.src= gequarr[indexge]
  setTimeout("bofang2()",1000)
  bofang()
  bofang()
}
}

}else{
    alert("这首歌放不了，别问我，我也不知道怎么办，没版权你，去找丁磊")
}




}
}

//歌曲的灰白背景
for(var i=0;i<liebiao3.length;i++){
if(i%2==0){
    liebiao3[i].style.backgroundColor="rgb(247,247,247)";
}else{
    liebiao3[i].style.backgroundColor="white"
}

}
//转化时间的functionn
function transTime(num){
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
    //侧栏歌单hover变色
  for (var i = 0; i < list6.length; i++) {
            list6[i].onmouseover = function () {
                this.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
            };
            list6[i].onmouseout = function () {
                this.style.backgroundColor = "";
            };
        }
  let gedanmin = document.getElementsByClassName("gedanmin3")
  let chuangjianzhe =document.getElementsByClassName("chuangjianzhe")
  let gequshu =document.getElementsByClassName("gequshu")
  let gedanimg =document.getElementsByClassName("gedanimg0")

 var index0=-10 
//  liebiao2[0].style.display="none" 

//点击歌单显示相应歌单界面
for(let i=1;i<data1.playlist.length;i++){
  list6[i-1].addEventListener("click",async()=>{
    liebiao2[0].style.display="none"

       let res17=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data1.playlist[i].id+"&timerstamp=${Date.now()}",{
   method:"get",
         })
 let data17=await res17.json()
//  console.log(data17)

    if(index0==-10){
var geminadd2=liebiao2[i].getElementsByClassName("gemin2add")
var geshou2add=liebiao2[i].getElementsByClassName("geshou2add")
var shichangadd2=liebiao2[i].getElementsByClassName("shichang2add")
var xuhao=liebiao2[i].getElementsByTagName("span")

    hide2()
    chuangjianzhe[i].innerHTML="创建者："+data1.playlist[i].creator.nickname
    gedanmin[i-1].innerHTML=data1.playlist[i].name
    gequshu[i].innerHTML="歌曲："+data17.songs.length
    gedanimg[i].src=data1.playlist[i].coverImgUrl
    for(let j=0;j<data17.songs.length;j++){
        geminadd2[j].innerHTML=data17.songs[j].name
        geshou2add[j].innerHTML=data17.songs[j].ar[0].name
        shichangadd2[j].innerHTML=transTime(data17.songs[j].dt) 


        if(j+1<10){
        xuhao[j].innerHTML="0"+(j+1)
        }else{
        xuhao[j].innerHTML=j+1

        }
    
    }
        gedanlist[i-1].style.display="block"
        
        
        for( let j=1;j<data1.playlist.length;j++){
          let gedanmin00=document.getElementsByClassName("gedanmin2")
          
          gedanmin00[j].onclick=function(){
             find2()

               for(let i=0;i<data1.playlist.length-1;i++){
              gedanlist[i].style.display="none"
              
          }
          }
          }
    index0=i-1
  }else{

let geminadd2=liebiao2[i].getElementsByClassName("gemin2add")
let geshou2add=liebiao2[i].getElementsByClassName("geshou2add")
let shichangadd2=liebiao2[i].getElementsByClassName("shichang2add")
let xuhao=liebiao2[i].getElementsByTagName("span")


    hide2()
    chuangjianzhe[i].innerHTML="创建者："+data1.playlist[i].creator.nickname
    gedanmin[i-1].innerHTML=data1.playlist[i].name
    gequshu[i].innerHTML="歌曲："+data17.songs.length
    gedanimg[i].src=data1.playlist[i].coverImgUrl
    for(let j=0;j<data17.songs.length;j++){
        geminadd2[j].innerHTML=data17.songs[j].name
        geshou2add[j].innerHTML=data17.songs[j].ar[0].name
        shichangadd2[j].innerHTML=transTime(data17.songs[j].dt) 
        if(j+1<10){
        xuhao[j].innerHTML="0"+(j+1)
        }else{
        xuhao[j].innerHTML=j+1
      
        }
      }
        gedanlist[i-1].style.display="block"
        
        
    for( let j=1;j<data1.playlist.length;j++){
    let gedanmin00=document.getElementsByClassName("gedanmin2")
    
    gedanmin00[j].onclick=function(){
       find2()
       
         for(let i=0;i<data1.playlist.length-1;i++){
              
              gedanlist[i].style.display="none"
    }
    }
    }
    gedanlist[index0].style.display="none"
    index0=i-1
// console.log(geminadd2)
  
}
// console.log(liebiao3)
// console.log(dataxihuan.songs.length)
// for(let y=0;y<idarr.length;y++){
// liebiao3[y+dataxihuan.songs.length].onclick=async function(){
//     indexge++
// let res111=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/song/url/v1?id="+idarr[y]+"&level=exhigh&timerstamp=${Date.now()}",{
//     method:"get",
// })
// let data111=await res111.json()
// console.log(data111)
// gequarr.push(data111.data[0].url)
// //播放列表
// if(limit1.length<25){
// let dangqian1=document.createElement("li")
// dangqian1.className="dangqian1"
// dangqianbofang.appendChild(dangqian1)
// let gemin=document.createElement("div")
// gemin.className="gemin"
// let shichang=document.createElement("div")
// shichang.className="shichang"
// dangqian1.appendChild(gemin)
// dangqian1.appendChild(shichang)
// gemin.innerHTML=geminarr[y]
//         shichang.innerHTML=transTime(dtarr[y])
//     }
// //放歌        

// audio.src=gequarr[indexge]
//         gemin1.innerHTML=geminarr[y]
//         geshou1.innerHTML=geshouarr[y]
//         fengmian1.src=imgarr[y]
        
// }

// }



  for(let i=0;i<liebiao3.length;i++){
    if(i%2==0||i==0){
        liebiao3[i].style.backgroundColor="rgb(247,247,247)";
    }else {
        liebiao3[i].style.backgroundColor="white"
    }}
    // console.log(url)
    // console.log(geminarr)
    // console.log(geshouarr)
//   console.log(url)
    })
   

    let top1 =document.getElementsByClassName("top1")[0]
    let nav22 =document.getElementsByClassName("nav22")[0]

  function hide2(){
    // nav1.style.display="none"
    // toptui.style.display="none"
    // nav2.style.display="none"
    nav22.style.display="none"
    top1.style.display="none"

}
function find2(){   
//   nav1.style.display="block"
//   toptui.style.display="block"
//   nav2.style.display="block"
  
  nav22.style.display="block"
  top1.style.display="block"
  liebiao2[0].style.display="block"



}
function transTime(num){
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
  }}}


    }
    // console.log(geminarr)
    
    start()
    


    // let liebiao3=document.getElementsByClassName("liebiao3");
    let mic=document.getElementsByClassName("mic")[0]
    mic.onclick=function(){
        alert("我说了我妹做，憋点了")
    }
    //播放器
let tiao =document.getElementsByClassName("tiao")[0];
let spot1 =document.getElementsByClassName("spot1")[0];  
  let audio =document.getElementsByTagName('audio')[0];


    audio.volume = 0.1;
let rBox =document.getElementsByClassName("bofang")[0];
let curTime =document.getElementById("time1");
let duraTime =document.getElementById("time2");
let xiayishou=document.getElementsByClassName("xiayishou")[0]
let shangyishou=document.getElementsByClassName("shangyishou")[0]

shangyishou.onclick=function(){
    indexge--
    if(indexge==-1){
alert("已经是第一首了，别点了，别给我点出bug了")
indexge++
    }else{
        for(let t=0;t<geminarr.length;t++){
            if(url[t]==gequarr[indexge]){
                gemin1.innerHTML=geminarr[t]
                geshou1.innerHTML=geshouarr[t]
                fengmian1.src=imgarr[t]
            }
        }
        
   audio.src= gequarr[indexge]
   setTimeout("bofang2()",1000)
   bofang()
   bofang()
}
}
xiayishou.onclick=function(){
    indexge++

    if(indexge==(limit1.length)){
alert("已经是最后一首了，别点了，别给我点出bug了")
indexge--
    }else{
        
        for(let t=0;t<geminarr.length;t++){
            if(url[t]==gequarr[indexge]){
                gemin1.innerHTML=geminarr[t]
                geshou1.innerHTML=geshouarr[t]
                fengmian1.src=imgarr[t]
            }
        }
        
   audio.src= gequarr[indexge]
   setTimeout("bofang2()",1000)
   bofang()
   bofang()
}
}
audio.load();
tiao.onmouseover = function () {
            spot1.style.display="block";
        };
        tiao.onmouseout = function () {
            spot1.style.display="none";
        };



function bofang(){
    if(audio.paused){
     audio.play();
        rBox.style.backgroundPositionY=  -165+"px";
duraTime.innerHTML = transTime1(audio.duration);

}else {
        audio.pause();
        rBox.style.backgroundPositionY= -204 +'px';
    }
}
function bofang2(){
    if(audio.paused){
     
        rBox.style.backgroundPositionY=  -165+"px";
        audio.load
    duraTime.innerHTML = transTime1(audio.duration)
  audio.play();
  }else {
        audio.pause();
        audio.load
      
      while(duraTime.innerHTML == transTime1(audio.duration)){
      duraTime.innerHTML = transTime1(audio.duration)
    }
     audio.play();
        // rBox.style.backgroundPositionY= -204 +'px';
        
    }
  }


var scroll = document.getElementById('bo1');
var bar =document.getElementById("spot1");
var barleft = 0;
let jindu = document.getElementById("bo2");
let count2 =1;

audio.addEventListener("timeupdate", () => {
    curTime.innerHTML=transTime1(audio.currentTime)
    jindu.style.width=(audio.currentTime/audio.duration)*100+"%";
  });
bar.addEventListener("mousedown", function(e) {
    count2=0
    document.onmousemove = function(e){
        
     let x = e.pageX;
     let yinliangnew = x-jindu.offsetLeft
    
        if(yinliangnew <0){
            yinliangnew=0;
        } else if (yinliangnew>80){
            yinliangnew=80;
        } 
        
        let rate = yinliangnew/80;
        jindu.style.width=yinliangnew+1+"px";
        audio.currentTime=rate*audio.duration;
        curTime.innerHTML=transTime1(parseInt(audio.currentTime) );
        audio.pause();
    }
    document.onmouseup =function(){
document.onmouseup=null;
document.onmousemove=null;
count2 =1
audio.play();
rBox.style.backgroundPositionY= -165 +"px";
    }
    
})
scroll.addEventListener("mousedown", function(e) {
    count2=0
    document.onmousemove = function(e){
   
     let x = e.pageX;
     let yinliangnew = x-jindu.offsetLeft
        if(yinliangnew <0){
            yinliangnew=0;
        } else if (yinliangnew>400){
            yinliangnew=400;
        }
        
        let rate = yinliangnew/400;
        jindu.style.width=yinliangnew+1+"px";
        audio.currentTime=rate*audio.duration;
        curTime.innerHTML=transTime1(parseInt(audio.currentTime));
 audio.pause();
    }
    document.onmouseup =function(){
document.onmouseup=null;
document.onmousemove=null;
count2 =1
audio.play();
rBox.style.backgroundPositionY= -165 +"px";
    }
})
//格式化时间，化为分 ：秒
function transTime1(time){
    let duration =parseInt(time)
    let minute = parseInt(duration / 60);
        let sec = (duration % 60) + "";
        let isM0 = ":";
        if (minute == 0) {
          minute = "00";
        } else if (minute < 10) {
          minute = "0" + minute;
        }
        if (sec.length == 1) {
          sec = "0" + sec;
        }
        return minute + isM0 + sec;
}
//音量键
//参考了https://blog.csdn.net/qq_51567295/article/details/126939075?ops_request_misc=&request_id=&biz_id=102&utm_term=html%E8%BF%9B%E5%BA%A6%E6%9D%A1%E6%8B%96%E5%8A%A8&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-3-126939075.142^v71^pc_new_rank,201^v4^add_ask&spm=1018.2226.3001.4187
let ele2 = document.getElementsByClassName("yinliang")[0];
let menu =document.getElementById("voice");
// let flag =1,flag2=1;
        ele2.onmouseover = function(){
                menu.style.display = "block";
                
            }
            menu.onmouseover = function(){
            // flag2=0;
            } 
            ele2.onmouseleave =function(){
                // flag=0;
                // if(flag==0&&flag2==1)
            menu.style.display="none"
            }
            menu.onmouseleave =function(){
                // if(flag==0&&flag2==0)
                menu.style.display="none"
            }
let yinliangtiao =document .getElementsByClassName("voice")[0]
const voicePro = document.getElementById("yinliangtiao2");
yinliangtiao.addEventListener("mousedown", function (event) {

    let y = event.pageY;
    voicePro.style.height = (80 - event.offsetY) + "px";
    let voiceProLen = voicePro.offsetHeight
    // let ratio = voiceProLen / 80;
    document.onmousemove = function(event) {
        let diff = y - event.pageY;
        let voiceProLenNew = voiceProLen + diff;
        if(voiceProLenNew < 0) {
            voiceProLenNew = 0;
        } else if(voiceProLenNew > 80) {
            voiceProLenNew = 80;
        }
        voicePro.style.height = voiceProLenNew + "px";
        let ratio = voiceProLenNew / 80;
         audio.volume = ratio;
         
    }
});
document.onmouseup = function() {
    document.onmousemove = null;
}
let search1=document.getElementById("search1")

search1.onclick=function (){
    window.location.href="../html./搜索.html"
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
