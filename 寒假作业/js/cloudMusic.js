


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

let list5 = document.getElementsByClassName("dangqian1")
            for (var i = 0; i < list5.length; i++) {
            list5[i].onmouseover = function () {
                this.style.backgroundColor = "rgb(209,209,209)";
            };
            list5[i].onmouseout = function () {
                this.style.backgroundColor = "";
            };
        }



  
//杂项


//侧边栏

let xihuan=document.getElementById("xihuan");
            xihuan.onmouseover = function () {
                this.style.backgroundColor = "rgb(209,209,209)";
            xihuan.onmouseout = function () {
                this.style.backgroundColor = "";
            };
        }

        // let list6 = document.getElementsByClassName("wodege")
        //     for (var i = 0; i < list6.length; i++) {
        //     list6[i].onmouseover = function () {
        //         this.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        //     };
        //     list6[i].onmouseout = function () {
        //         this.style.backgroundColor = "";
        //     };
        // }


        let mic=document.getElementsByClassName("mic")[0]
        mic.onclick=function(){
            alert("我说了我妹做，憋点了")
        }

        let search1=document.getElementById("search1")
        search1.onclick=function (){
            window.location.href="./搜索.html"
        }