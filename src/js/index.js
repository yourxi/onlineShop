// 4.初始化Swiper
var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    autoplay:{
        delay:3000
    },
    effect : 'fade',
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    
    // 如果需要滚动条
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // }
}) 

// 右边固定导航 弹出特效
$(".zhanghao").mouseenter(function(){
    $('.bar-lar').animate({
        right:36,
    },200,'linear')
})
$(".youhuiquan").mouseenter(function(){
    $('.bar-a').animate({
        right:36,
    },200,'linear')
})
$(".shuocang").mouseenter(function(){
    $('.bar-b').animate({
        right:36,
    },200,'linear')
})
$(".xihuan").mouseenter(function(){
    $('.bar-c').animate({
        right:36,
    },200,'linear')
})
$(".zuji").mouseenter(function(){
    $('.bar-d').animate({
        right:36,
    },200,'linear')
})
$(".fankui").mouseenter(function(){
    $('.bar-e').animate({
        right:36,
    },200,'linear')
})
$(".fanhui").mouseenter(function(){
    $('.bar-f').animate({
        right:36,
    },200,'linear')
})
// 右边固定导航 鼠标移出
$(".zhanghao").mouseleave(function(){
    $('.bar-lar').animate({
        right:-103,
    },200,'linear')
})
$(".youhuiquan").mouseleave(function(){
    $('.bar-a').animate({
        right:-100,
    },200,'linear')
})
$(".shuocang").mouseleave(function(){
    $('.bar-b').animate({
        right:-100,
    },200,'linear')
})
$(".xihuan").mouseleave(function(){
    $('.bar-c').animate({
        right:-100,
    },200,'linear')
})
$(".zuji").mouseleave(function(){
    $('.bar-d').animate({
        right:-100,
    },200,'linear')
})
$(".fankui").mouseleave(function(){
    $('.bar-e').animate({
        right:-100,
    },200,'linear')
})
$(".fanhui").mouseleave(function(){
    $('.bar-f').animate({
        right:-100,
    },200,'linear')
})







// nav-category的鼠标移入事件
$(".nav-category").mouseover(function(){
    $(".nav-tips").addClass("box-out")
})
$(".nav-tips").mouseover(function(){
    $(".nav-tips").addClass("box-out")
})
$(".nav-category").mouseout(function(){
    $(".nav-tips").removeClass("box-out")
})
$(".nav-tips").mouseout(function(){
    $(".nav-tips").removeClass("box-out")
})
$(".nav-tips>ul>li").mouseover(function(){
    $(this)
    .addClass('li-style')
    .siblings()
    .removeClass('li-style')
})



// 商品分类导航（顶部固定导航栏）
// 更多
$(".more-wrap").mouseover(function(){
    $(this).children(".one")
    .css('display','block')
})
$(".more-wrap").mouseout(function(){
    $(this).children(".one")
    .css('display','none')
})
// 商品分类导航滑动一段距离显示
$(function(){ 
    $(window).scroll(function(){
        if($(window).scrollTop()>=175){
            $('.head-nav')
            .css({
                'position':'fixed',
                'top':0,
                'z-index':99
            }).siblings(".plugin").css("marginTop",112)
        }else{
            $('.head-nav').css('position','relative')
            .siblings(".plugin").css("marginTop",0)
        }
    })
})




// 回到顶部
$(function(){ 
    $('.bar-f').click(function(){
        $('html').animate(
            {scrollTop:0},
        1500)
    })
})



// 左边导航栏滑动一段距离显示
$(function(){ 
    $(window).scroll(function(){
        if($(window).scrollTop()>=1300) {
            $(".left-nav").css({
                'position':'fixed',
                'top':100,
                'left':50,                
            });
        }else{
            $(".left-nav").css({
                'position':'absolute',
                'left': -124,
                'top':68,            
            });
        } 
    })
})



// 底部滑动特效
// $(".footer-tip1").mouseenter(function(){
//     $(".footer-tip1").children("dd").children("a").animate({
//         backgroundPosition: 3,
//     },200,'linear')
// })


// 左边导航栏点击事件
$(".left-nav-list > a").click(function(){
    $(this)  //你点击的那一个li
    .addClass('left-nav-b') //添加类名
    .siblings() //所有兄弟元素(不包括自己)
    .removeClass('left-nav-b') //移除类名
})


// 倒计时 秒杀
var time_btn = $('.time_btn');//关闭按钮
var count_down = $(".count_down");//倒计时
var time_detail = $(".time_detail");//具体时间

//点击关闭的时候可以关闭
time_btn.click(function(){
    count_down.css("display", "none");
})

//每隔一段时间自动还弹出来
setInterval(function(){
    count_down.css("display", "block");
},120000)


function getTime(){
    var target = new Date("2020-11-11 00:00:00");
    var from = new Date();
    
    // 1 先获取两个时间点到格林威治时间的毫秒数
    target = target.getTime()
    from = from.getTime()
    
    // 2 两个毫秒数相减,得到两个时间点之间的毫秒数
    var differenceTime = target - from;
    differenceTime = parseInt(differenceTime/1000);//把毫秒换算成秒
    
    // 3 把我们计算的秒数换算成时间
    //3.1 先计算出有多少天
    //一天是24*60*60秒
    //用总的秒数除以一天的秒数,就能得到多少天
    var day = differenceTime/(24*60*60);
    day = Math.floor(day)
    
    //3.2 计算有多少小时
    //不够一天的就变成小时
    var afterHours = differenceTime - day*24*60*60;//单位是秒
    //一小时:60*60秒
    var hours = parseInt(afterHours/3600);//单位是小时
    
    //3.3 计算有多少分钟
    //不够一小时的就变成分钟
    var afterMinutes = afterHours - hours*3600;
    //一分钟:60秒
    var minutes = Math.floor(afterMinutes/60);
    
    //3.4 计算有多少秒
    var seconds = afterMinutes - minutes*60;
    
    time_detail.html(day+'天'+hours+'小时'+minutes+'分'+seconds+'秒')
}
getTime();

var timerId = setInterval(function(){
    getTime()
},1000)