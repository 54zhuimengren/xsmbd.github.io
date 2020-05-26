$(function() {
    //根据url给激活头部导航
    switch (window.location.hash) {
        // case "#home": //首页
        //     $(".menus>li a").removeClass("z-active");
        //     $(".menus>li a.home").addClass("z-active");
        //     break;
        case "#step1": //五大安全
            $(".menus>li a").removeClass("z-active");
            $(".menus>li a.step1").addClass("z-active");
            break;
        case "#step3": //超级验号
            $(".menus>li a").removeClass("z-active");
            $(".menus>li a.step3").addClass("z-active");
            break;
        case "#step5": //功能解析
            $(".menus>li a").removeClass("z-active");
            $(".menus>li a.step5").addClass("z-active");
            break;
        case "#step6": //超极权重任务
            $(".menus>li a").removeClass("z-active");
            $(".menus>li a.step6").addClass("z-active");
            break;
        case "#step8": //收费标准
            $(".menus>li a").removeClass("z-active");
            $(".menus>li a.step8").addClass("z-active");
            break;
        default: //首页
            $(".menus>li a").removeClass("z-active");
            $(".menus>li a.home").addClass("z-active");
    };
    // 导航锚点跳转
    $(".menus>li").click(function(e) {
        var s = $(this).children().attr("href");
        if (!s) return;
        if (s.indexOf('#') == -1) {
            $("#" + s).ScrollTo(500);
        } else if (s.indexOf('/') == 0) {
            $(s.slice(1)).ScrollTo(500);
        } else {
            $(s).ScrollTo(500);
        };
        $(this).children().addClass("z-active");
        $(this).siblings().children("a").removeClass("z-active");
        e.stopPropagation();
    });
    var subHash = ["#culture", "#grow", "#member", "#team"];
    var layoutScrollTo = function(id) {
        if (id == '') {
            return false;
        }
        if (id.indexOf('#') == -1) id = '#' + id;
        $(id).ScrollTo(500);
        $(".menus>li a").each(function() {
            if (subHash.indexOf(id) > -1) return true;
            $(this).removeClass("z-active");
            if (this.hash == id) {
                $(this).addClass("z-active");
            }
        });
    };
    layoutScrollTo(window.location.hash || '');
    
    // 导航锚点跳转方法2
   // $('.menus>li a').on('click',function(){
   //     if( $(this).hasClass('z-active') ){
   //        return;
   //     }
   //     $('.menus>li a').removeClass('z-active');
   //     $(this).addClass('z-active');
   //  });

    //轮播banner
    (function() {
        var t = s = 0;
        var bannerPlay = bannerSetInt = null;
        var bannerSlide = $(".banner-wrapper .banner__swiper-bg");
        s = bannerSlide.length;
        bannerPlay = function() {
            t++;
            if (t > s - 1) {
                t = 0;
            }
            bannerSlide.eq(t).fadeIn(800).siblings().fadeOut(1000);
            $(".layer-banner_menus>ul>li").siblings().removeClass("z-active").eq(t).addClass("z-active");
        };
        bannerSetInt = setInterval(bannerPlay, 4000);
        $(".banner-container,.layer-banner_menus").mousemove(function() {
            clearInterval(bannerSetInt);
        }).mouseleave(function() {
            bannerSetInt = setInterval(bannerPlay, 4000);
        });
        $(".layer-banner_menus>ul>li").click(function() {
            var _menusLiIndex = $(this).index();
            t = _menusLiIndex;
            bannerSlide.eq(_menusLiIndex).fadeIn(800).siblings().fadeOut(1000);
            $(".layer-banner_menus>ul>li").siblings().removeClass("z-active").eq(_menusLiIndex).addClass("z-active");
        });
    })();



    //buoy模快
    //联系电话咨询
    $(".telephoneHover").mouseenter(function() {
        $(".telephone").animate({
            "right": "45px"
        });
    }).mouseleave(function() {
        $(".telephone").animate({
            "right": "-300px"
        });
    });
    //微信二维码咨询
    $(".markCodeHover").mouseenter(function() {
        $(".markCode").animate({
            "right": "45px"
        });
    }).mouseleave(function() {
        $(".markCode").animate({
            "right": "-300px"
        });
    });
    //QQ咨询
    $(".consultHover").mouseenter(function() {
        $(".consult").animate({
            "right": "45px"
        });
    }).mouseleave(function() {
        $(".consult").animate({
            "right": "-300px"
        });
    });
    //回到顶部
    $(".back-top").click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });

   //错误提示
   var errTisp = function(txt) {
       $("#cooperationForm .tisp").text(txt);
       $("#cooperationForm .tisp").show();
       setTimeout(function() {
           $("#cooperationForm .tisp").hide();
       }, 3500);
   };
});