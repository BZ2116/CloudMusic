
//播放量等转化为万，亿为单位
 function trans(num){
    let num2 =parseInt(num)
  if(num2<10000){
    return num2.toString()
  } else if(num2<100000000&&num2>10000){
    let numwan=(num2-num2%1000)/10000;
    return numwan.toString()+"万"
  }else{
    let numyi=(num2-num2%10000000)/100000000;
    return numyi.toString()+"亿"
  }
  }

  var gequarr=[]
  var geminarr=[]
  var geshouarr=[]
  var idarr=[]
  var imgarr=[]
  var dtarr=[]
  var limit1 =document.getElementsByClassName("dangqian1")
  var url=[]
  var indexge=-1
  var dangqianbofang=document.getElementById("dangqianbofang")
var fengmian1=document.getElementById("fengmian1")
var gemin1=document.getElementsByClassName("gemin1")[0]
var geshou1=document.getElementsByClassName("geshou1")[0]
var transTime=function (num){
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
async function start(){
  const res100 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/user/detail?uid=8334102993",{
    method:"get",
  
  
          })
  const data100=await res100.json()
  console.log(data100)
  let avatar=document.getElementById("avatar")
  let username0=document.getElementById("username0")
  avatar.src=data100.profile.avatarUrl
  username0.innerHTML=data100.profile.nickname

// 获取精品歌单top
const res10 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/top/playlist/highquality?limit=11",{
  method:"get",


        })
var data10=await res10.json()
// console.log(data10)

let pictimg=document.getElementById("pictimg")
let gemint=document.getElementsByClassName("gedanmin1")[0]
pictimg.src=data10.playlists[0].coverImgUrl
gemint.innerHTML=data10.playlists[0].name
let tuijianback=document.getElementsByClassName("toptui")[0]
tuijianback.style.backgroundImage="url("+data10.playlists[0].coverImgUrl+")" 


//歌单广场

//全部
let gedanall=document.getElementsByClassName("gedanguangchang")[0]
let bofangliang7=gedanall.getElementsByClassName("bofangliang")
let remenwords7=gedanall.getElementsByClassName("remenwords")
let geimg=gedanall.getElementsByClassName("gedanimg")
for(i=0;i<10;i++){
geimg[i].src=data10.playlists[i+1].coverImgUrl
bofangliang7[i].innerHTML=trans(data10.playlists[i+1].playCount)
remenwords7[i].innerHTML=data10.playlists[i+1].name
}
//华语
const res1 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/top/playlist/highquality?limit=10&cat=华语",{
  method:"get",


        })
const data1=await res1.json()
console.log(data1)
let gedan1=document.getElementsByClassName("gedanguangchang")[1]
let bofangliang1=gedan1.getElementsByClassName("bofangliang")
let remenwords1=gedan1.getElementsByClassName("remenwords")
let geimg1=gedan1.getElementsByClassName("gedanimg")
for(i=0;i<10;i++){
geimg1[i].src=data1.playlists[i].coverImgUrl
bofangliang1[i].innerHTML=trans(data1.playlists[i].playCount)
remenwords1[i].innerHTML=data1.playlists[i].name
}
//日语
const res2 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/top/playlist/highquality?limit=10&cat=日语",{
  method:"get",


        })
const data2=await res2.json()
let gedan2=document.getElementsByClassName("gedanguangchang")[2]
let bofangliang2=gedan2.getElementsByClassName("bofangliang")
let remenwords2=gedan2.getElementsByClassName("remenwords")
let geimg2=gedan2.getElementsByClassName("gedanimg")
for(i=0;i<10;i++){
geimg2[i].src=data2.playlists[i].coverImgUrl
bofangliang2[i].innerHTML=trans(data2.playlists[i].playCount)
remenwords2[i].innerHTML=data2.playlists[i].name
}

//电子
const res3 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/top/playlist/highquality?limit=10&cat=电子",{
  method:"get",


        })
const data3=await res3.json()
let gedan3=document.getElementsByClassName("gedanguangchang")[3]
let bofangliang3=gedan3.getElementsByClassName("bofangliang")
let remenwords3=gedan3.getElementsByClassName("remenwords")
let geimg3=gedan3.getElementsByClassName("gedanimg")
for(i=0;i<10;i++){
geimg3[i].src=data3.playlists[i].coverImgUrl
bofangliang3[i].innerHTML=trans(data3.playlists[i].playCount)
remenwords3[i].innerHTML=data3.playlists[i].name
}

//流行
const res4 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/top/playlist/highquality?limit=10&cat=流行",{
  method:"get",


        })
const data4=await res4.json()
let gedan4=document.getElementsByClassName("gedanguangchang")[4]
let bofangliang4=gedan4.getElementsByClassName("bofangliang")
let remenwords4=gedan4.getElementsByClassName("remenwords")
let geimg4=gedan4.getElementsByClassName("gedanimg")
for(i=0;i<10;i++){
geimg4[i].src=data4.playlists[i].coverImgUrl
bofangliang4[i].innerHTML=trans(data4.playlists[i].playCount)
remenwords4[i].innerHTML=data4.playlists[i].name
}

//欧美
const res6 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/top/playlist/highquality?limit=10&cat=欧美",{
  method:"get",
        })
const data6=await res6.json()
let gedan6=document.getElementsByClassName("gedanguangchang")[5]
let bofangliang6=gedan6.getElementsByClassName("bofangliang")
let remenwords6=gedan6.getElementsByClassName("remenwords")
let geimg6=gedan6.getElementsByClassName("gedanimg")
for(i=0;i<10;i++){
geimg6[i].src=data6.playlists[i].coverImgUrl
bofangliang6[i].innerHTML=trans(data6.playlists[i].playCount)
remenwords6[i].innerHTML=data6.playlists[i].name
}

//古风
const res5 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/top/playlist/highquality?limit=10&cat=摇滚",{
  method:"get",


        })
const data5=await res5.json()
let gedan5=document.getElementsByClassName("gedanguangchang")[6]
let bofangliang5=gedan5.getElementsByClassName("bofangliang")
let remenwords5=gedan5.getElementsByClassName("remenwords")
let geimg5=gedan5.getElementsByClassName("gedanimg")
for(i=0;i<10;i++){
geimg5[i].src=data5.playlists[i].coverImgUrl
bofangliang5[i].innerHTML=trans(data5.playlists[i].playCount)
remenwords5[i].innerHTML=data5.playlists[i].name
}







//我的歌单
const res28 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/user/playlist?uid=8334102993",{
  method:"get",
        })

const data28=await res28.json()
console.log(data28)
for(let i=1;i<data28.playlist.length;i++){
  let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data28.playlist[i].id+"&timerstamp=${Date.now()}",{
 method:"get",
       })
let data27=await res27.json()
var liebiao2=document.getElementsByClassName("liebiao2")

  for(let m=0;m<data27.songs.length;m++){
       var liebiao3add=document.createElement("li")
       liebiao3add.className="liebiao3"
   liebiao2[i+69].appendChild(liebiao3add)
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
    
   }}
   var liebiao3=document.getElementsByClassName("liebiao3")
let wodegedan=document.getElementsByClassName("wodegedan")[0]
for(let v=1;v<data28.playlist.length;v++){
  let a=  document.createElement("li")
  a.className="wodege"
  wodegedan.appendChild(a)
  // console.log(a)
  let c = document.createElement("div")
  a.appendChild(c)
  c.className="gedanmin"
  let b= document.createElement("img")
  a.insertBefore(b,c)
  b.className="wodeimg"
  
  
}
let wodeimg=document.getElementsByClassName("wodeimg")
// console.log(wodeimg)
let gedanmin00=document.getElementsByClassName("gedanmin")
for(let v=1;v<data28.playlist.length;v++){
wodeimg[v-1].src=data28.playlist[v].coverImgUrl
  gedanmin00[v-1].innerHTML=data28.playlist[v].name
}
let list6 = document.getElementsByClassName("wodege")
            for (var i = 0; i < list6.length; i++) {
            list6[i].onmouseover = function () {
                this.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
            };
            list6[i].onmouseout = function () {
                this.style.backgroundColor = "";
            };
        }
  var gedanmin = document.getElementsByClassName("gedanmin3")
  var chuangjianzhe =document.getElementsByClassName("chuangjianzhe")
  var gequshu =document.getElementsByClassName("gequshu")
  var gedanimg =document.getElementsByClassName("gedanimg0")

 var index0=-10 
  for(let i=1;i<data28.playlist.length;i++){
  list6[i-1].addEventListener("click",async()=>{  
      let res17=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data28.playlist[i].id+"&timerstamp=${Date.now()}",{
      method:"get",
            })
    let data17=await res17.json()
    for(let n=0;n<8;n++){
      gedanlist[n].style.display="none"
    }
    if(index0==-10){

    
var geminadd2=liebiao2[i+69].getElementsByClassName("gemin2add")
var geshou2add=liebiao2[i+69].getElementsByClassName("geshou2add")
var shichangadd2=liebiao2[i+69].getElementsByClassName("shichang2add")
var xuhao=liebiao2[i+69].getElementsByTagName("span")
    hide2()
    chuangjianzhe[69+i].innerHTML="创建者："+data28.playlist[i].creator.nickname
    gedanmin[69+i].innerHTML=data28.playlist[i].name
    gequshu[69+i].innerHTML="歌曲："+data17.songs.length
    gedanimg[69+i].src=data28.playlist[i].coverImgUrl
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
        gedanlist[i+69].style.display="block"
        
        
        for( let j=70;j<69+data28.playlist.length;j++){
          let gedanmin00=document.getElementsByClassName("gedanmin2")
          
          gedanmin00[j].onclick=function(){
             find2()
               for(let i=70;i<69+data28.playlist.length;i++){
              gedanlist[i].style.display="none"
          }
          }
          }
    index0=i+69
  }else{


let geminadd2=liebiao2[i+69].getElementsByClassName("gemin2add")
let geshou2add=liebiao2[i+69].getElementsByClassName("geshou2add")
let shichangadd2=liebiao2[i+69].getElementsByClassName("shichang2add")
let xuhao=liebiao2[i+69].getElementsByTagName("span")
    hide2()
    chuangjianzhe[i+69].innerHTML="创建者："+data28.playlist[i].creator.nickname
    gedanmin[i+69].innerHTML=data28.playlist[i].name
    gequshu[i+69].innerHTML="歌曲："+data17.songs.length
    gedanimg[i+69].src=data28.playlist[i].coverImgUrl
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
        gedanlist[i+69].style.display="block"
        
        
    for( let j=70;j<69+data28.playlist.length;j++){
    let gedanmin00=document.getElementsByClassName("gedanmin2")
    
    gedanmin00[j].onclick=function(){
       find2()
         for(let i=70;i<69+data28.playlist.length;i++){
        gedanlist[i].style.display="none"
    }
    }
    }
    gedanlist[index0].style.display="none"
    index0=i+69
  }
    })
    for(let i=0;i<liebiao3.length;i++){
      if(i%2==0){
          liebiao3[i].style.backgroundColor="rgb(247,247,247)";
      }else if(i%2!=0){
          liebiao3[i].style.backgroundColor="white"
      }}
    let nav1=document.getElementsByClassName("nav1")[0]
    let toptui =document.getElementsByClassName("toptui")[0]
    let nav2 =document.getElementsByClassName("nav2")[0]
    let gedan11 =document.getElementById("gedanguangchang1");
let gedan22 =document.getElementById("gedanguangchang2");
let gedan33 =document.getElementById("gedanguangchang3");
let gedan44 =document.getElementById("gedanguangchang4");
let gedan55 =document.getElementById("gedanguangchang5");
let gedan66 =document.getElementById("gedanguangchang6");
let gedan77 =document.getElementById("gedanguangchang7");
  function hide2(){
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
function find2(){   
  nav1.style.display="block"
  toptui.style.display="block"
  nav2.style.display="block"
gedan77.style.display="block"


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
 
// }
alert("先看一下吧，歌曲还在加载")
 //播放，添加歌曲
 for(let i=0;i<20;i++){//遍历歌单中的歌曲
  if(i<10){
  let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data10.playlists[i+1].id+"&timerstamp=${Date.now()}",{
 method:"get",
       })
var data277=await res27.json()
}else if(i<20&&i>9){
  let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data1.playlists[i-10].id+"&timerstamp=${Date.now()}",{
    method:"get",
          })
   var data277=await res27.json()
}else if(i<30&&i>19){
  let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data2.playlists[i-20].id+"&timerstamp=${Date.now()}",{
    method:"get",
          })
   var data277=await res27.json()
}else if(i<40&&i>29){
  let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data3.playlists[i-30].id+"&timerstamp=${Date.now()}",{
 method:"get",
       })
var data277=await res27.json()
}else if(i<50&&i>39){
  let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data4.playlists[i-40].id+"&timerstamp=${Date.now()}",{
 method:"get",
       })
var data277=await res27.json()
}else if(i<60&&i>49){
  let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data6.playlists[i-50].id+"&timerstamp=${Date.now()}",{
 method:"get",
       })
var data277=await res27.json()
}else if(i<70&&i>59){
  let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data5.playlists[i-60].id+"&timerstamp=${Date.now()}",{
 method:"get",
       })
var data277=await res27.json()
}
//我的歌单（除了我喜欢的音乐）
//创建歌曲

   //向数组中记录数据（除音乐的url）
    for(let j=0;j<10;j++){
geminarr.push(data277.songs[j].name)
geshouarr.push(data277.songs[j].ar[0].name)
idarr.push(data277.songs[j].id)
imgarr.push(data277.songs[j].al.picUrl)
dtarr.push(data277.songs[j].dt)

}

  
  } 
       //向数组中记录音乐url数据
      for(let y=url.length;y<dtarr.length;y++){
      let res111=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/song/url/v1?id="+idarr[y]+"&level=exhigh&timerstamp=${Date.now()}",{
        method:"get",
    })
    var data111=await res111.json()
   
    url.push(data111.data[0].url)
     }  
alert("歌有点多，先听着初始页面和华语歌单里的歌")

     for(let m=0;m<geminarr.length;m++){//遍历所有歌曲
      liebiao3[m].onclick=async  function(){
        if(Boolean(url[m])==1){
          
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
      alert("这首歌放不了，别问我，我也不知道怎么办,没版权，你去找丁磊")
    }
      }
      }


      for(let i=20;i<40;i++){//遍历歌单中的歌曲
        if(i<10){
        let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data10.playlists[i+1].id+"&timerstamp=${Date.now()}",{
       method:"get",
             })
      var data277=await res27.json()
      }else if(i<20&&i>9){
        let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data1.playlists[i-10].id+"&timerstamp=${Date.now()}",{
          method:"get",
                })
         var data277=await res27.json()
      }else if(i<30&&i>19){
        let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data2.playlists[i-20].id+"&timerstamp=${Date.now()}",{
          method:"get",
                })
         var data277=await res27.json()
      }else if(i<40&&i>29){
        let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data3.playlists[i-30].id+"&timerstamp=${Date.now()}",{
       method:"get",
             })
      var data277=await res27.json()
      }else if(i<50&&i>39){
        let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data4.playlists[i-40].id+"&timerstamp=${Date.now()}",{
       method:"get",
             })
      var data277=await res27.json()
      }else if(i<60&&i>49){
        let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data6.playlists[i-50].id+"&timerstamp=${Date.now()}",{
       method:"get",
             })
      var data277=await res27.json()
      }else if(i<70&&i>59){
        let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data5.playlists[i-60].id+"&timerstamp=${Date.now()}",{
       method:"get",
             })
      var data277=await res27.json()
      }
      //我的歌单（除了我喜欢的音乐）
      //创建歌曲
      
         //向数组中记录数据（除音乐的url）
          for(let j=0;j<10;j++){
      geminarr.push(data277.songs[j].name)
      geshouarr.push(data277.songs[j].ar[0].name)
      idarr.push(data277.songs[j].id)
      imgarr.push(data277.songs[j].al.picUrl)
      dtarr.push(data277.songs[j].dt)
      
      }
      
        
        } 
             //向数组中记录音乐url数据
            for(let y=url.length;y<dtarr.length;y++){
            let res111=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/song/url/v1?id="+idarr[y]+"&level=exhigh&timerstamp=${Date.now()}",{
              method:"get",
          })
          var data111=await res111.json()
         
          url.push(data111.data[0].url)
           }  
      alert("歌有点多，先听着初始页面和华语歌单里的歌")
      
           for(let m=0;m<geminarr.length;m++){//遍历所有歌曲
            liebiao3[m].onclick=async  function(){
              if(Boolean(url[m])==1){
                
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
            alert("这首歌放不了，别问我，我也不知道怎么办,没版权，你去找丁磊")
          }
            }
            }
      


            alert("日语和电子准备好了")



     for(let i=40;i<70;i++){//遍历歌单中的歌曲
      if(i<10){
      let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data10.playlists[i].id+"&timerstamp=${Date.now()}",{
     method:"get",
           })
    var data277=await res27.json()
    }else if(i<20&&i>9){
      let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data1.playlists[i-10].id+"&timerstamp=${Date.now()}",{
        method:"get",
              })
       var data277=await res27.json()
    }else if(i<30&&i>19){
      let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data2.playlists[i-20].id+"&timerstamp=${Date.now()}",{
        method:"get",
              })
       var data277=await res27.json()
    }else if(i<40&&i>29){
      let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data3.playlists[i-30].id+"&timerstamp=${Date.now()}",{
     method:"get",
           })
    var data277=await res27.json()
    }else if(i<50&&i>39){
      let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data4.playlists[i-40].id+"&timerstamp=${Date.now()}",{
     method:"get",
           })
    var data277=await res27.json()
    }else if(i<60&&i>49){
      let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data6.playlists[i-50].id+"&timerstamp=${Date.now()}",{
     method:"get",
           })
    var data277=await res27.json()
    }else if(i<70&&i>59){
      let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data5.playlists[i-60].id+"&timerstamp=${Date.now()}",{
     method:"get",
           })
    var data277=await res27.json()
    }
    //我的歌单（除了我喜欢的音乐）
    //创建歌曲
    
       //向数组中记录数据（除音乐的url）
        for(let j=0;j<10;j++){
    geminarr.push(data277.songs[j].name)
    geshouarr.push(data277.songs[j].ar[0].name)
    idarr.push(data277.songs[j].id)
    imgarr.push(data277.songs[j].al.picUrl)
    dtarr.push(data277.songs[j].dt)
    
    }
    
      
      } alert("再等一下吧，歌曲还在加载")
           //向数组中记录音乐url数据
          for(let y=url.length;y<dtarr.length;y++){
          let res111=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/song/url/v1?id="+idarr[y]+"&level=exhigh&timerstamp=${Date.now()}",{
            method:"get",
        })
        var data111=await res111.json()
       
        url.push(data111.data[0].url)
         }  
//播放，添加侧栏歌曲

for(let i=1;i<data28.playlist.length;i++){//遍历歌单中的歌曲
let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data28.playlist[i].id+"&timerstamp=${Date.now()}",{
method:"get",
})
let data27=await res27.json()//侧栏歌单（除了我喜欢的音乐）
//创建歌曲
for(let m=0;m<data27.songs.length;m++){
var liebiao3add=document.createElement("li")
liebiao3add.className="liebiao3"
liebiao2[i+7].appendChild(liebiao3add)
var countadd=document.createElement("span")
var div1add=document.createElement("div")
div1add.className="gemin2"
var div2add=document.createElement("div")
div2add.className="geshou2"
var div3add=document.createElement("div")
div3add.className="shichang2"
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
let gemin2add=liebiao2[i+7].getElementsByClassName("gemin2")
let geshou2add=liebiao2[i+7].getElementsByClassName("geshou2")
let shichang2add=liebiao2[i+7].getElementsByClassName("shichang2")

gemin2add[j].innerHTML=data27.songs[j].name
geshou2add[j].innerHTML=data27.songs[j].ar[0].name
shichang2add[j].innerHTML=transTime(data27.songs[j].dt)
}

}
//遍历侧栏歌单


//向数组中记录音乐url数据
for(let y=700;y<idarr.length;y++){
let res112=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/song/url/v1?id="+idarr[y]+"&level=exhigh&timerstamp=${Date.now()}",{
method:"get",
})
var data112=await res112.json()

url.push(data112.data[0].url)
}
alert("好了，全部加载好了")

// console.log(url1)





for(let m=0;m<geminarr.length;m++){//遍历所有歌曲
  liebiao3[m].onclick=async  function(){
    if(Boolean(url[m])==1){
      
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
  alert("这首歌放不了，别问我，我也不知道怎么办,没版权，你去找丁磊")
}
  }
  }
}
start()

//播放器
let tiao =document.getElementsByClassName("tiao")[0];
let spot1 =document.getElementsByClassName("spot1")[0];
tiao.onmouseover = function () {
            spot1.style.display="block";
        };
        tiao.onmouseout = function () {
            spot1.style.display="none";
        };


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

    if(indexge==limit1.length){
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
     let yinliangnew = x-scroll.offsetLeft;
        if(yinliangnew <0){
            yinliangnew=0;
        } else if (yinliangnew>400){
            yinliangnew=400;
        } 
        
        let rate = yinliangnew/400;
        jindu.style.width=yinliangnew+"px";
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
  window.location.href="./搜索.html"
}