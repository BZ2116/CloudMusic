var audio =document.getElementsByTagName('audio')[0];




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
var container=document.getElementById("container")
var xihuan=document.getElementById("xihuan")
var wode=document.getElementById("wode")
var footer=document.getElementsByClassName("footer")[0]
var topnav=document.getElementsByClassName("topnav")[0]
var mid=document.getElementsByClassName("mid")[0]
var leftm=document.getElementsByClassName("leftm")[0]
// var liebiao1=document.getElementsByClassName("liebiao1")[0]
var top1=document.getElementsByClassName("top1")[0]
var nav22=document.getElementsByClassName("nav22")[0]
var liebiao00=document.getElementsByClassName("liebiao00")[0]
var lyricarea=document.getElementById("lyricarea")
var lyricbox=document.getElementById("lyricbox")
var lyric = document.getElementById("lyric"); //歌词容器列表

var sousuo=async function(){
 
    const res200 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/cloudsearch?keywords="+searchvalue,{
           method:"get",
                 })
         const data200=await res200.json()
        //  console.log(data200)
         for(let i=0;i<15;i++){
   
           gemin0[i].innerHTML=data200.result.songs[i].name
           geshou0[i].innerHTML=data200.result.songs[i].ar[0].name
           shichang0[i].innerHTML=transTime(data200.result.songs[i].dt) 
         }
       
         for(let i=0;i<15;i++){
   geminarr.push(data200.result.songs[i].name)
           geshouarr.push(data200.result.songs[i].ar[0].name)
           imgarr.push(data200.result.songs[i].al.picUrl)
           idarr.push(data200.result.songs[i].id)
           dtarr.push(data200.result.songs[i].dt)
           const res300 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/song/url/v1?id="+data200.result.songs[i].id+"&level=exhigh",{
               method:"get",
             
             
                     })
             const data300=await res300.json()
        //  console.log(data300)
          url.push(data300.data[0].url)
         }
   }
   
   var shanchu=function(){
    for(let m=gecilist.length-1;m>=0;m--){
    lyric.removeChild(gecilist[m])   
}
//    let lyricadd=document.createElement("ul")
//    lyricadd.id="lyric"
//    lyricbox.appendChild(lyricadd)
   
   lyric.style.transform="translateY("+0+"px)"
   }
   
      var startsearch2=async function(){
           // 获得歌词
           var count000=0
           var count00=0
           var gecicount
            fengmian1.onclick=async function(){
                if(count000==0){
               fengmianlyimg.style.transitionDuration="10s"       
               let currfu=0
                      var ss = setInterval(() => {
                           currfu+=0.5
                       fengmianlyimg.style.transform='rotate('+currfu+'deg)';
                       }, 100);
                   count000=1}
           if(count00==0){
            //    clearInterval(zhuanfu)
               for(let x=0;x<idarr.length;x++){
                   if(gequarr[indexge]==url[x]){
                       gecicount=x
                   }
               }
           lygemin.innerHTML=geminarr[gecicount]
           lygeshou.innerHTML="歌手："+geshouarr[gecicount]
           fengmianlyimg.src=imgarr[gecicount]
            
               hide00()
           count00=1
           }else{
               count00=0
               find00()
           }
           
           }
           fanhui.onclick=function(){
               count00=0
               find00()
           }
           for(let x=0;x<idarr.length;x++){
               if(gequarr[indexge]==url[x]){
                   gecicount=x
               }
           }
   
           const res500 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/lyric/new?id="+idarr[gecicount],{
               method:"get",
             
             
                     })
             const data500=await res500.json()
            //  console.log(typeof(data500.lrc.lyric) )
            //  console.log(data500)   
           let lrc =data500.lrc.lyric
   
   let kaishi=lrc.match("00:")
   var lrcb="["+lrc.slice(kaishi.index)

   //参考
   //https://blog.csdn.net/fenglin247/article/details/86686151?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522167566511416800184130462%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=167566511416800184130462&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~baidu_landing_v2~default-3-86686151-null-null.142^v73^pc_new_rank,201^v4^add_ask,239^v1^control&utm_term=js%E6%AD%8C%E8%AF%8D&spm=1018.2226.3001.4187
//    console.log(createLrcObj(lrcb))
   
   var gecizu= createLrcObj(lrcb)
   console.log( gecizu.ms)
   showLRC(gecizu);
   
   function showLRC(mm) {
//    lyricbox.appendChild(lyricadd)
       for(let i=0;i<mm.ms.length;i++){//遍历ms数组，把歌词加入列表
              
           let geciadd=document.createElement("li")
           geciadd.className="gecilist"
           geciadd.innerHTML=mm.ms[i].c;
           lyric.appendChild(geciadd)
       }
       // document.getElementById("lyric").innerHTML = s;
   }
     var oLRC = {
       // ti: "", //歌曲名
       // ar: "", //演唱者
       // al: "", //专辑名
       // by: "", //歌词制作人
       // offset: 0, //时间补偿值，单位毫秒，用于调整歌词整体位置
       ms: [] //歌词数组{t:时间,c:歌词}
   }; 
   
   function createLrcObj(lrc) {
 
    let oLRC = {
        // ti: "", //歌曲名
        // ar: "", //演唱者
        // al: "", //专辑名
        // by: "", //歌词制作人
        // offset: 0, //时间补偿值，单位毫秒，用于调整歌词整体位置
        ms: [] //歌词数组{t:时间,c:歌词}
    }; 
       if(lrc.length==0) return;
       var lrcs = lrc.split('\n');//用回车拆分成数组
       for(var i in lrcs) {//遍历歌词数组
           lrcs[i] = lrcs[i].replace(/(^\s*)|(\s*$)/g, ""); //去除前后空格
           var t = lrcs[i].substring(lrcs[i].indexOf("[") + 1, lrcs[i].indexOf("]"));//取[]间的内容
           var s = t.split(":");//分离:前后文字
           if(isNaN(parseInt(s[0]))) { //不是数值
               for (var i in oLRC) {
                   if (i != "ms" && i == s[0].toLowerCase()) {
                       oLRC[i] = s[1];
                   }
               }
           }else { //是数值
               var arr = lrcs[i].match(/\[(\d+:.+?)\]/g);//提取时间字段，可能有多个
               var start = 0;
               for(var k in arr){
                   start += arr[k].length; //计算歌词位置
               }
               var content = lrcs[i].substring(start);//获取歌词内容
               for (var k in arr){
                   var t = arr[k].substring(1, arr[k].length-1);//取[]间的内容
                   var s = t.split(":");//分离:前后文字
                   oLRC.ms.push({//对象{t:时间,c:歌词}加入ms数组
                       t: (parseFloat(s[0])*60+parseFloat(s[1])).toFixed(3),
                       c: content
                   });
               }
           }
       }
       oLRC.ms.sort(function (a, b) {//按时间顺序排序
           return a.t-b.t;
       });
       
       // for(var i in oLRC){ //查看解析结果
        //    console.log(i,":",oLRC[i]);
       // }
       return oLRC
   }  
   
   
   
   
    
   
   
   //当前行
   var lineNo= 0
   var C_pos= 1//C位
   
   
   
   //高亮显示歌词当前行及文字滚动控制，行号为lineNo
   function lineHigh() {
       var lis = lyric.getElementsByTagName("li");//歌词数组
       if(lineNo>0){
            lis[lineNo-1].removeAttribute("id");//去掉上一行的高亮样式
            lis[lineNo-1].className="gecilist"
   
       }
       lis[lineNo].id = "lineHigh";//高亮显示当前行
   
       //文字滚动
       if(lineNo>C_pos){
           for(let m=0;m<lineNo;m++){
            lyric.style.transform= "translateY("+(lineNo-C_pos)*-47+"px)"; //整体向上滚动一行高度
      } }
   }
   
//    滚回到开头，用于播放结束时
   function goback() {
       document.querySelector("#lineHigh").removeAttribute("id");
       lyric.style.transform = "translateY(0)";
       lyric.style.transitionDuration="2s"
       lineNo = 0;
   }
   
   //监听播放器的timeupdate事件，实现文字与音频播放同步
   audio.ontimeupdate = function () {
       if(lineNo==gecizu.ms.length)
           return;
       var curTime = audio.currentTime; //播放器时间
       if(parseFloat(gecizu.ms[lineNo].t)<=curTime){
           lineHigh();//高亮当前行
           lineNo++;
       }
   };
   
   //监听播放器的ended事件，播放结束时回滚歌词
   audio.onended = function () {
       goback(); //回滚歌词
   };
       
      
   
       
       
      
           //   searchinput.setAttribute("placeholder",data400.data.realkeyword)
           /***** 用法 ******/
   
   // var  oLRC= createLrcObj(lrcb)
   // var  oLRC= parseLyric(lrcb)
   
   
    
   
   console.log(oLRC);
   //     showLRC(oLRC) 
       
       
   
       
   // function showLRC(mm) {
   //         var s="";
   //         for(let i =0;i< mm.ms.length;i++){//遍历ms数组，把歌词加入列表
   //             s=mm.ms[i].c+"\r\n";  
   //             var geciadd=document.createElement("li")
   //             geciadd.className="gecilist"
   //             geciadd.innerHTML=s
   //             document.getElementById("lyric").appendChild(geciadd)
   //         }
   //         // lyric.innerHTML = s;
       
   //     }
       
   
   }


 var resou=document.getElementsByClassName("resou")
    var sousuojilu=document.getElementsByClassName("sousuojilu")
var sousuoci=document.getElementById("sousuoci");
var liebiao3=document.getElementsByClassName("liebiao3");
var liebiao0=document.getElementsByClassName("liebiao0");
var gemin0=document.getElementsByClassName("gemin0");
var geshou0=document.getElementsByClassName("geshou0");
var shichang0=document.getElementsByClassName("shichang0");
var limit1 =document.getElementsByClassName("dangqian1")
var fengmian1=document.getElementById("fengmian1")
var gemin1=document.getElementsByClassName("gemin1")[0]
var geshou1=document.getElementsByClassName("geshou1")[0]
var gequarr=[]
var geminarr=[]
var geshouarr=[]
var imgarr=[]
var url=[]
var idarr=[]
var dtarr=[]

var indexge=-1
var indexsousuo=-1
var resou1 =document.getElementById("resou1")
var sousuojilu1 =document.getElementById("sousuojilu1")

var bofang0=document.getElementsByClassName("bofang")[0]


var  gecilist=document.getElementsByClassName("gecilist")

var lygemin=document.getElementById("lygemin")
var lygeshou=document.getElementById("lygeshou")
var fengmianlyimg=document.getElementById("fengmianlyimg")
var fanhui=document.getElementById("fanhui")

var hide00=function(){
    xihuan.style.display="none"
    wode.style.display="none"
    topnav.style.display="none"
    leftm.style.display="none"
    top1.style.display="none"
    nav22.style.display="none"
    liebiao00.style.display="none"
    footer.style.display="block"
    lyricarea.style.display="block"
    lyricbox.style.display="block"
    liebiao1.style.right=-380+"px"
liebiao1.style.height=100+"%"

    count00=1
   
   }
   var find00=function(){
       xihuan.style.display="block"
       wode.style.display="block"
       topnav.style.display="block"
       leftm.style.display="block"
       top1.style.display="block"
       nav22.style.display="block"
       liebiao00.style.display="block"
       footer.style.display="block"
       lyricarea.style.display="none"
       lyricbox.style.display="none"
       
    liebiao1.style.right=-125+"px"
    count00=0
   
   }


var startcelan =async function (){


 //获取头像，用户名等
    const res100 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/user/detail?uid=8334102993",{
        method:"get",
      
      
              })
      const data100=await res100.json()
      
      let avatar=document.getElementById("avatar")
      let username0=document.getElementById("username0")
      avatar.src=data100.profile.avatarUrl
      username0.innerHTML=data100.profile.nickname

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
            list6[i].onclick=function(){
                alert("这页没加侧栏歌单")
            }
        }
  
for(var i=0;i<liebiao3.length;i++){
    if(i%2==0){
        liebiao3[i].style.backgroundColor="rgb(247,247,247)";
    }else{
        liebiao3[i].style.backgroundColor="white"
    }}

    for(var i=0;i<liebiao0.length;i++){
        if(i%2==0){
            liebiao0[i].style.backgroundColor="rgb(247,247,247)";
        }else{
            liebiao0[i].style.backgroundColor="white"
        }}
}

var startbofang =async function (){

    
    for(let m=0;m<15;m++){//遍历所有歌曲
        liebiao0[m].onclick=async  function(){
          if(Boolean(url[indexsousuo*15+m])==1||geminarr.length==0){
            
            indexge++
        gequarr.push(url[indexsousuo*15+m])//记录播放的音乐
  
        
        
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
        gemin.innerHTML=geminarr[indexsousuo*15+m]
        shichang.innerHTML=transTime(dtarr[indexsousuo*15+m])
        audio.src=gequarr[indexge] //播放音乐
        //播放器的封面，歌名，歌手信息
        
        gemin1.innerHTML=geminarr[indexsousuo*15+m]
        geshou1.innerHTML=geshouarr[indexsousuo*15+m]
        fengmian1.src=imgarr[indexsousuo*15+m]
        setTimeout("bofang2()",1000)
        bofang()
        bofang()
        

        }

shanchu()


 startsearch2() 
        
var dangqian1=document.getElementsByClassName("dangqian1")
for(let s=0;s< dangqian1.length;s++){
    dangqian1[s].onclick=function(){
      indexge=s
      for(let t=0;t<geminarr.length;t++){
        if(url[t]==gequarr[indexge]){
            gemin1.innerHTML=geminarr[t]
            geshou1.innerHTML=geshouarr[t]
            fengmian1.src=imgarr[t]
            lygemin.innerHTML=geminarr[t]
            lygeshou.innerHTML=geshouarr[t]
            fengmianlyimg.src=imgarr[t]
        }
    }
    audio.src= gequarr[indexge]
    setTimeout("bofang2()",1000)
    bofang()
          bofang()
          shanchu()
  
  startsearch2()
  }
  }



}else{
  alert("这首歌放不了，别问我，我也不知道怎么办,没版权，你去找丁磊")

}}


    }}

   var startsearch1=async function(){
        const res400 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/search/default",{
            method:"get",
          
          
                  })
          const data400=await res400.json()
        //   console.log(data400)
          searchinput.setAttribute("placeholder",data400.data.realkeyword)
 const res600 =await fetch("https://service-rmmwonig-1315774598.gz.apigw.tencentcs.com/release/search/hot",{
            method:"get",
                  })
          const data600=await res600.json()
        //   console.log(data600)
          for(let m=0;m<10;m++){
            let resouadd=document.createElement("li")
            resouadd.className="resou"
            resou1.appendChild(resouadd)
            resouadd.innerHTML=data600.result.hots[m].first
            if(sousuojilu.length>15){
                sousuojilu1.removeChild(sousuojilu[0])
              }
        }
          for(let n=0;n<10;n++){
    resou[n].onclick=function(){
        indexsousuo++
     searchvalue = resou[n].innerHTML 
     sousuoci.innerHTML=resou[n].innerHTML
        sousuo()
        let sousuojiluadd=document.createElement("li")
        sousuojiluadd.className="sousuojilu"
        sousuojilu1.appendChild(sousuojiluadd)
        sousuojiluadd.innerHTML=searchvalue
        if(sousuojilu.length>15){
            sousuojilu1.removeChild(sousuojilu[0])
          }
// resou1.removeChild(resou[n])
    }
    
}
for(let n=0;n<sousuojilu.length;n++){
    sousuojilu[n].onclick=function(){
      searchvalue=sousuojilu[n].innerHTML
      sousuoci.innerHTML=sousuojilu[n].innerHTML
        sousuo()
    }
}
    }

var suosoubutton=document.getElementById("suosoubutton")
var searchinput=document.getElementById("searchinput")
var searchvalue=""

document.onkeydown = function (e) { 
        var theEvent = window.event || e;
        var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
        if (code == 13) {// 回车搜索
            indexsousuo++
            searchvalue=searchinput.value
            sousuo()
            sousuoci.innerHTML=searchinput.value
            let sousuojiluadd=document.createElement("li")
            sousuojiluadd.className="sousuojilu"
            sousuojilu1.appendChild(sousuojiluadd)
            sousuojiluadd.innerHTML=searchvalue
          if(sousuojilu.length>15){
            sousuojilu1.removeChild(sousuojilu[0])
          }
            
console.log(idarr)
           
        }
      
    }

startcelan()
startbofang()
startsearch1()


// 侧边栏
var liebiao =document.getElementById("liebiao");
var liebiao1=document.getElementById('liebiao1');
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
        
      


//播放器
let tiao =document.getElementsByClassName("tiao")[0];
let spot1 =document.getElementsByClassName("spot1")[0];
tiao.onmouseover = function () {
            spot1.style.display="block";
        };
        tiao.onmouseout = function () {
            spot1.style.display="none";
        };


  
   
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
                lygemin.innerHTML=geminarr[t]
                lygeshou.innerHTML=geshouarr[t]
                fengmianlyimg.src=imgarr[t]
            }
        }
      
   audio.src= gequarr[indexge] 
  setTimeout(shanchu(),500) 
startsearch2()
//    bofang2() 
//    bofang()
// bofang()
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
                lygemin.innerHTML=geminarr[t]
                lygeshou.innerHTML=geshouarr[t]
                fengmianlyimg.src=imgarr[t]
            }
        }
       
   audio.src= gequarr[indexge]
   
   setTimeout(shanchu(),500) 

startsearch2()
// bofang2()
// bofang()
// bofang()
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

bofang0.onclick=function (){
   
    if(audio.paused){ 
     audio.play();  
        rBox.style.backgroundPositionY=  -165+"px";
duraTime.innerHTML = transTime1(audio.duration);   
// clearInterval(zhuanfu)
// let currfu=0
// var  zhuanfu= setInterval(() => {
//     currfu+=0.5
// fengmianlyimg.style.transform='rotate('+currfu+'deg)';
// }, 100)
}else {
        audio.pause();
        rBox.style.backgroundPositionY= -204 +'px';
    // clearInterval(zhuanfu)
    
    }
}
// bofang0.onclick=function (){
//     if(audio.paused){ 
//      audio.play();  
//         rBox.style.backgroundPositionY=  -165+"px";
// let currfu=0
//         var  zhuanfu= setInterval(() => {
//             currfu+=0.5
//         fengmianlyimg.style.transform='rotate('+currfu+'deg)';
//         }, 100);
// duraTime.innerHTML = transTime1(audio.duration);    
// }else {
//         audio.pause();
//         rBox.style.backgroundPositionY= -204 +'px';
//         clearInterval(zhuanfu)
//     }
// }


function bofang2(){
  if(audio.paused){
   
      rBox.style.backgroundPositionY=  -165+"px";
duraTime.innerHTML = transTime1(audio.duration);

      audio.load
audio.play();


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
