let gedan1 =document.getElementById("gedanguangchang1");
let gedan2 =document.getElementById("gedanguangchang2");
let gedan3 =document.getElementById("gedanguangchang3");
let gedan4 =document.getElementById("gedanguangchang4");
let gedan5 =document.getElementById("gedanguangchang5");
let gedan6 =document.getElementById("gedanguangchang6");
let gedan7 =document.getElementById("gedanguangchang7");

let all =document.getElementById("more")
let fenlei1 =document.getElementById("gedanfenlei1");
let fenlei2 =document.getElementById("gedanfenlei2");
let fenlei3 =document.getElementById("gedanfenlei3");
let fenlei4 =document.getElementById("gedanfenlei4");
let fenlei5 =document.getElementById("gedanfenlei5");
let fenlei6 =document.getElementById("gedanfenlei6");

all.onclick=function(){
    gedan1.style.display="none";
    gedan2.style.display="none";
    gedan3.style.display="none";
    gedan4.style.display="none";
    gedan5.style.display="none";
    gedan6.style.display="none";
    gedan7.style.display="block";
    
    }

fenlei1.onclick=function(){
gedan1.style.display="block";
gedan2.style.display="none";
gedan3.style.display="none";
gedan4.style.display="none";
gedan5.style.display="none";
gedan6.style.display="none";
gedan7.style.display="none";

}
fenlei2.onclick=function(){
    gedan2.style.display="block";
    gedan1.style.display="none";
    gedan3.style.display="none";
    gedan4.style.display="none";
    gedan5.style.display="none";
    gedan6.style.display="none";
gedan7.style.display="none";

    }
fenlei3.onclick=function(){
        gedan3.style.display="block";
        gedan2.style.display="none";
        gedan1.style.display="none";
        gedan4.style.display="none";
        gedan5.style.display="none";
        gedan6.style.display="none";
gedan7.style.display="none";

        }
fenlei4.onclick=function(){
            gedan4.style.display="block";
            gedan2.style.display="none";
            gedan3.style.display="none";
            gedan1.style.display="none";
            gedan5.style.display="none";
            gedan6.style.display="none";
gedan7.style.display="none";

            }
fenlei5.onclick=function(){
                gedan5.style.display="block";
                gedan2.style.display="none";
                gedan3.style.display="none";
                gedan4.style.display="none";
                gedan1.style.display="none";
                gedan6.style.display="none";
gedan7.style.display="none";

                }
fenlei6.onclick=function(){
                    gedan6.style.display="block";
                    gedan2.style.display="none";
                    gedan3.style.display="none";
                    gedan4.style.display="none";
                    gedan5.style.display="none";
                    gedan1.style.display="none";
gedan7.style.display="none";

                    }





//播放列表
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

let liebiao3=document.getElementsByClassName("liebiao3");
for(var i=0;i<liebiao3.length;i++){
if(i%2==0){
    liebiao3[i].style.backgroundColor="rgb(247,247,247)";
}else{
    liebiao3[i].style.backgroundColor="white"
}

}


let mic=document.getElementsByClassName("mic")[0]
mic.onclick=function(){
    alert("我说了我妹做，憋点了")
}



