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
   audio.src="../mp3/手写的从前.mp3";
    audio.volume = 0.1;
let rBox =document.getElementsByClassName("bofang")[0];
let curTime =document.getElementById("time1");
let duraTime =document.getElementById("time2");
audio.load();
var index10=1
function bofang(){
    if(index10==1){
    alert("这个界面没做歌曲播放，送你一首“手写的从前”")
}
    if(audio.paused){
     audio.play();
        rBox.style.backgroundPositionY=  -165+"px";
duraTime.innerHTML = transTime1(audio.duration);

}else {
        audio.pause();
        rBox.style.backgroundPositionY= -204 +'px';
    }
    index10=2
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
        curTime.innerHTML=transTime(parseInt(audio.currentTime) );
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
        curTime.innerHTML=transTime(parseInt(audio.currentTime));
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
    let ratio = voiceProLen / 80;
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






var cookie4=encodeURIComponent("MUSIC_A_T=1674958715027; Max-Age=2147483647; Expires=Mon, 19 Feb 2091 17:32:57 GMT; Path=/api/feedback; HTTPOnly;MUSIC_R_T=1674958715285; Max-Age=2147483647; Expires=Mon, 19 Feb 2091 17:32:57 GMT; Path=/eapi/clientlog; HTTPOnly;MUSIC_A_T=1674958715027; Max-Age=2147483647; Expires=Mon, 19 Feb 2091 17:32:57 GMT; Path=/weapi/feedback; HTTPOnly;MUSIC_R_T=1674958715285; Max-Age=2147483647; Expires=Mon, 19 Feb 2091 17:32:57 GMT; Path=/wapi/feedback; HTTPOnly;__csrf=77c038e73c3c1327cbaf3b92e9be5a4a; Max-Age=1296010; Expires=Thu, 16 Feb 2023 14:19:00 GMT; Path=/;;MUSIC_A_T=1674958715027; Max-Age=2147483647; Expires=Mon, 19 Feb 2091 17:32:57 GMT; Path=/neapi/feedback; HTTPOnly;MUSIC_R_T=1674958715285; Max-Age=2147483647; Expires=Mon, 19 Feb 2091 17:32:57 GMT; Path=/eapi/feedback; HTTPOnly;MUSIC_A_T=1674958715027; Max-Age=2147483647; Expires=Mon, 19 Feb 2091 17:32:57 GMT; Path=/eapi/feedback; HTTPOnly;MUSIC_R_T=1674958715285; Max-Age=2147483647; Expires=Mon, 19 Feb 2091 17:32:57 GMT; Path=/wapi/clientlog; HTTPOnly;MUSIC_R_T=1674958715285; Max-Age=2147483647; Expires=Mon, 19 Feb 2091 17:32:57 GMT; Path=/weapi/clientlog; HTTPOnly;MUSIC_R_T=1674958715285; Max-Age=2147483647; Expires=Mon, 19 Feb 2091 17:32:57 GMT; Path=/api/clientlog; HTTPOnly;MUSIC_A_T=1674958715027; Max-Age=2147483647; Expires=Mon, 19 Feb 2091 17:32:57 GMT; Path=/wapi/feedback; HTTPOnly;MUSIC_A_T=1674958715027; Max-Age=2147483647; Expires=Mon, 19 Feb 2091 17:32:57 GMT; Path=/weapi/clientlog; HTTPOnly;MUSIC_R_T=1674958715285; Max-Age=2147483647; Expires=Mon, 19 Feb 2091 17:32:57 GMT; Path=/neapi/feedback; HTTPOnly;MUSIC_R_T=1674958715285; Max-Age=2147483647; Expires=Mon, 19 Feb 2091 17:32:57 GMT; Path=/neapi/clientlog; HTTPOnly;MUSIC_R_T=1674958715285; Max-Age=2147483647; Expires=Mon, 19 Feb 2091 17:32:57 GMT; Path=/openapi/clientlog; HTTPOnly;MUSIC_U=fad531027b271b05cd1cb9ac942ac728c0e2bf2a01f22af5bf3a7ab71371bdb9993166e004087dd3505009b88c5f770142adff145d8be7196bd7be17af1177938411a24e33bda135d4dbf082a8813684; Max-Age=15552000; Expires=Mon, 31 Jul 2023 14:18:50 GMT; Path=/; HTTPOnly;MUSIC_SNS=; Max-Age=0; Expires=Wed, 01 Feb 2023 14:18:50 GMT; Path=/;MUSIC_A_T=1674958715027; Max-Age=2147483647; Expires=Mon, 19 Feb 2091 17:32:57 GMT; Path=/neapi/clientlog; HTTPOnly;MUSIC_R_T=1674958715285; Max-Age=2147483647; Expires=Mon, 19 Feb 2091 17:32:57 GMT; Path=/weapi/feedback; HTTPOnly;MUSIC_A_T=1674958715027; Max-Age=2147483647; Expires=Mon, 19 Feb 2091 17:32:57 GMT; Path=/openapi/clientlog; HTTPOnly;MUSIC_R_T=1674958715285; Max-Age=2147483647; Expires=Mon, 19 Feb 2091 17:32:57 GMT; Path=/api/feedback; HTTPOnly;MUSIC_A_T=1674958715027; Max-Age=2147483647; Expires=Mon, 19 Feb 2091 17:32:57 GMT; Path=/eapi/clientlog; HTTPOnly;MUSIC_A_T=1674958715027; Max-Age=2147483647; Expires=Mon, 19 Feb 2091 17:32:57 GMT; Path=/wapi/clientlog; HTTPOnly;MUSIC_A_T=1674958715027; Max-Age=2147483647; Expires=Mon, 19 Feb 2091 17:32:57 GMT; Path=/api/clientlog; HTTPOnly")

    async function start(){
        //头像和昵称
        const res100 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/user/detail?uid=8334102993",{
  method:"get",


        })
const data100=await res100.json()
// console.log(data100)


let avatar=document.getElementById("avatar")
let gedanimg100=document.getElementById("gedanimg100")
let username0=document.getElementById("username0")
let woxihuan=document.getElementById("woxihuan")
let lv=document.getElementById("lv")
let gender=document.getElementById("gender")
let gerenjianjie=document.getElementById("gerenjianjie")
let nichen1=document.getElementById("nichen1")
let nicheninput=nichen1.getElementsByTagName("input")[0]
let gerenjianjie1=document.getElementById("gerenjianjie1")
let gerenjianjieinput=gerenjianjie1.getElementsByTagName("input")[0]
let xiugai=document.getElementById("xiugai")
let gender1=document.getElementById("gender1")
var genderinput=gender1.getElementsByTagName("input")
console.log(genderinput)
if(data100.profile.gender==0){
    genderinput[2].setAttribute("checked","checked")
}else if(data100.profile.gender==1){
genderinput[0].setAttribute("checked","checked")
}else{
genderinput[1].setAttribute("checked","checked")

}




xiugai.onclick=async function(){
let nichengai=nicheninput.value
let gerenjianjiegai=gerenjianjieinput.value
for(let i=0;i<3;i++){
    if (genderinput[i].checked==true){
        if(i==2){
            var gendergai=0
        }else{
            var gendergai=i+1
        }

    }
}


const res101 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/user/update?gender="+gendergai+"&nicknam="+nichengai+"&signature="+gerenjianjiegai+"&cookie="+cookie4,{
    method:"post",
          })
  const data101=await res101.json()
  console.log(data101)
}
gerenjianjieinput.setAttribute("placeholder",data100.profile.signature)

nicheninput.setAttribute("placeholder",data100.profile.nickname)

if(data100.profile.gender==1){
gender.style.backgroundPosition=-41+"px "+ -57+"px"
gender.style.backgroundImage="url(https://s2.music.126.net/style/web2/img/icon.png?de28704121d91fdf93468f40a2caeedf)"
}else if(data100.profile.gender==2){
    gender.style.backgroundPosition=-41+"px "+ -27+"px"
gender.style.backgroundImage="url(https://s2.music.126.net/style/web2/img/icon.png?de28704121d91fdf93468f40a2caeedf)"
}else{
    gender.style.background=""
    gender.innerHTML="猜猜我是男是女"
    gender.style.width=130+"px"
}

gerenjianjie.innerHTML="简介："+data100.profile.signature
avatar.src=data100.profile.avatarUrl
gedanimg100.src=data100.profile.avatarUrl
username0.innerHTML=data100.profile.nickname
woxihuan.innerHTML=data100.profile.nickname
lv.innerHTML="&nbspLV"+data100.level+"&nbsp"


 var liebiao2=document.getElementsByClassName("liebiao2")

let gedanlist=document.getElementsByClassName("gedans")

        // let res1=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/user/playlist?uid=8334102993&timerstamp=${Date.now()}",{
        //     method:"get",
        //           })
        //   let data1=await res1.json()

        //   let res2=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data1.playlist[0].id+"&timerstamp=${Date.now()}",{
        //     method:"get",
        //           })
        //   var data2=await res2.json()




const res28 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/user/playlist?uid=8334102993",{
  method:"get",
        })

const data28=await res28.json()
let wodegedan=document.getElementsByClassName("wodegedan")[0]
for(let v=1;v<data28.playlist.length;v++){
  let a=  document.createElement("li")
  a.className="wodege"
  wodegedan.appendChild(a)
  console.log(a)
  let c = document.createElement("div")
  a.appendChild(c)
  c.className="gedanmin"
  let b= document.createElement("img")
  a.insertBefore(b,c)
  b.className="wodeimg"
  
  
}
let wodeimg=document.getElementsByClassName("wodeimg")
console.log(wodeimg)
let gedanmin00=document.getElementsByClassName("gedanmin")
for(let v=1;v<data28.playlist.length;v++){
wodeimg[v-1].src=data28.playlist[v].coverImgUrl
  gedanmin00[v-1].innerHTML=data28.playlist[v].name
}
var list6 = document.getElementsByClassName("wodege")
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
 for(let i=1;i<data28.playlist.length;i++){
    let res27=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data28.playlist[i].id+"&timerstamp=${Date.now()}",{
   method:"get",
         })
 let data27=await res27.json()
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
      
     }}


for(let i=1;i<data28.playlist.length;i++){
  list6[i-1].addEventListener("click",async()=>{
    liebiao2[0].style.display="none"

       let res17=await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/playlist/track/all?id="+data28.playlist[i].id+"&timerstamp=${Date.now()}",{
   method:"get",
         })
 let data17=await res17.json()
 console.log(data17)
    if(index0==-10){
var geminadd2=liebiao2[i].getElementsByClassName("gemin2add")
var geshou2add=liebiao2[i].getElementsByClassName("geshou2add")
var shichangadd2=liebiao2[i].getElementsByClassName("shichang2add")
var xuhao=liebiao2[i].getElementsByTagName("span")

    hide2()
    chuangjianzhe[i].innerHTML="创建者："+data28.playlist[i].creator.nickname
    gedanmin[i-1].innerHTML=data28.playlist[i].name
    gequshu[i].innerHTML="歌曲："+data17.songs.length
    gedanimg[i].src=data28.playlist[i].coverImgUrl
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
        

        for( let j=1;j<data28.playlist.length;j++){
          let gedanmin00=document.getElementsByClassName("gedanmin2")
          gedanmin00[j-1].onclick=function(){
             find2()

               for(let i=0;i<data28.playlist.length-1;i++){
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
    chuangjianzhe[i].innerHTML="创建者："+data28.playlist[i].creator.nickname
    gedanmin[i-1].innerHTML=data28.playlist[i].name
    gequshu[i].innerHTML="歌曲："+data17.songs.length
    gedanimg[i].src=data28.playlist[i].coverImgUrl
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
        
        
    for( let j=1;j<data28.playlist.length;j++){
    let gedanmin00=document.getElementsByClassName("gedanmin2")
    
    gedanmin00[j-1].onclick=function(){
       find2()
       
         for(let i=0;i<data28.playlist.length-1;i++){
              
              gedanlist[i].style.display="none"
    }
    }
    }
    gedanlist[index0].style.display="none"
    index0=i-1
console.log(geminadd2)
  
}
  for(let i=0;i<liebiao3.length;i++){
    if(i%2==0||i==0){
        liebiao3[i].style.backgroundColor="rgb(247,247,247)";
    }else {
        liebiao3[i].style.backgroundColor="white"
    }}
  
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



}//格式化时间，化为分 ：秒
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
}
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

    }

    start()

    let mic=document.getElementsByClassName("mic")[0]
    mic.onclick=function(){
        alert("我说了我妹做，憋点了")
    }

    let search1=document.getElementById("search1")
    search1.onclick=function (){
        window.location.href="../html./搜索.html"
    }
