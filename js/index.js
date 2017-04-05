//头部导航
~function () {
    var navRender=(function(){
        var $navCon=$('.navCon'),
            $menu=$navCon.children('.g-nav-entry'),
            $ul=$('.ul');
        var isBlock=false;
        return {
            init:function(){
                $menu.click(function(){
                    if(!isBlock){
                        isBlock=true;
                        $ul.css({
                            width:'100%',
                            height:'5rem',
                            display:'block'
                        });
                        return;
                    }
                    isBlock=false;
                    $ul.css({
                        height:'0'
                    });
                });
            }
        }
    })();
    navRender.init();
}();

//选项卡
(function () {
    var childTit=document.getElementById('childTit');
    var titA=childTit.getElementsByTagName('a');
    var conHid=document.getElementById('contexHid');
    var conList=conHid.children;
    for (var i=0;i<titA.length;i++){
        titA[i].index=i;
        titA[i].onclick=function () {
            for (var j=0;j<conList.length;j++){
                titA[j].id="";
                conList[j].style.display='none';
            }
            this.id='on';
            conList[this.index].style.display='block';
        }
    }
})();

//底部导航
~function () {
    var navFooter=(function(){
        var $footerMiddle=$('.footer_middle'),
            $dl1=$footerMiddle.children('.dl1'),
            $dl2=$footerMiddle.children('.dl2'),
            $dl3=$footerMiddle.children('.dl3'),
            $dl4=$footerMiddle.children('.dl4'),
            $dt1=$dl1.children('.dt1'),
            $dt2=$dl2.children('.dt2'),
            $dt3=$dl3.children('.dt3'),
            $dt4=$dl4.children('.dt4'),
            $dd1=$('dd.dd1'),
            $dd2=$('dd.dd2'),
            $dd3=$('dd.dd3'),
            $dd4=$('dd.dd4'),
            timer = null;
        var isBlock=false;
        return {
            init:function(){
                $dl1.click(function(){
                    $dt1.css({
                        backgroundColor:'#c8c8c8'
                    });
                    clearTimeout(timer);
                    timer = setTimeout(function () {
                        $dt1.css({
                            backgroundColor:''
                        });
                    },100);
                    if(!isBlock){
                        isBlock=true;
                        $dl1.css({
                            height:'auto'
                        });

                        $dd1.css({
                            display:'block'
                        });
                        return;
                    }
                    isBlock=false;
                    $dl1.css({
                        height:'.8rem'
                    });
                    $dd1.css({
                        display:'none'
                    });
                });
                $dl2.click(function(){
                    $dt2.css({
                        backgroundColor:'#c8c8c8'
                    });
                    clearTimeout(timer);
                    timer = setTimeout(function () {
                        $dt2.css({
                            backgroundColor:''
                        });
                    },100);
                    if(!isBlock){
                        isBlock=true;
                        $dl2.css({
                            height:'auto'
                        });

                        $dd2.css({
                            display:'block'
                        });
                        return;
                    }
                    isBlock=false;
                    $dl2.css({
                        height:'.8rem'
                    });
                    $dd2.css({
                        display:'none'
                    });
                });
                $dl3.click(function(){
                    $dt3.css({
                        backgroundColor:'#c8c8c8'
                    });
                    clearTimeout(timer);
                    timer = setTimeout(function () {
                        $dt3.css({
                            backgroundColor:''
                        });
                    },100);
                    if(!isBlock){
                        isBlock=true;
                        $dl3.css({
                            height:'auto'
                        });

                        $dd3.css({
                            display:'block'
                        });
                        return;
                    }
                    isBlock=false;
                    $dl3.css({
                        height:'.8rem'
                    });
                    $dd3.css({
                        display:'none'
                    });
                });
                $dl4.click(function(){
                    $dt4.css({
                        backgroundColor:'#c8c8c8'
                    });
                    clearTimeout(timer);
                    timer = setTimeout(function () {
                        $dt4.css({
                            backgroundColor:''
                        });
                    },100);
                    if(!isBlock){
                        isBlock=true;
                        $dl4.css({
                            height:'auto'
                        });

                        $dd4.css({
                            display:'block'
                        });
                        return;
                    }
                    isBlock=false;
                    $dl4.css({
                        height:'.8rem'
                    });
                    $dd4.css({
                        display:'none'
                    });
                });
            }
        }
    })();
    navFooter.init();
}();

//检测PC端和移动端
~function () {
    var reg1 = /AppleWebKit.*Mobile/i,
        reg2 = /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/;

    //->条件成立说明当前页面是运行在移动端设备中的
    if (reg1.test(navigator.userAgent) || reg2.test(navigator.userAgent)) {

        //->如果当前页面的URL是PC端项目的地址:我们需要跳转到移动端项目
        if (window.location.href.indexOf("https://xiaoxue1234.github.io/PC/") >= 0) {
            window.location.href = "https://xiaoxue1234.github.io/phone/.";
        }
        return;
    }

    //->反之则说明当前的页面是运行在PC端设备中的,如果访问的URL地址是移动端的,我们需要跳转到PC端地址上
    if (window.location.href.indexOf("https://xiaoxue1234.github.io/phone/.") >= 0) {
        window.location.href = "https://xiaoxue1234.github.io/PC/";
    }
}();

