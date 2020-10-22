//点击购物车,把商品加入数据库
$('.add_cart').click(function(){
    
    $.ajax({
        url:'../interface/addwq.php',
        data:{
            id:'10088',
            name:'针织开衫毛衣',
            price:259,
            img:'../img/pro_1_s.jpg',
            num:$('.cart_num').val()
        },
        success:function(res){
            if(res.code){
                alert('商品加入成功')
            }    
        },
        dataType:'json'
    })

    return false
})
//点击查看购物车,进入购物车页面
$('.look_cart').click(function(){
    location.href='../pages/cart.html'

    return false
})



// 图片跳转
$(".pro_s1").click(function(){
    $(this)
    .parent().parent().siblings(".pro_small")
    .children(".pro_1_s").css("display","block")
    .siblings().css("display","none")
})
$(".pro_s2").click(function(){
    $(this)
    .parent().parent().siblings(".pro_small")
    .children(".pro_2_s").css("display","block")
    .siblings().css("display","none")
})
$(".pro_s3").click(function(){
    $(this)
    .parent().parent().siblings(".pro_small")
    .children(".pro_3_s").css("display","block")
    .siblings().css("display","none")
})
$(".pro_s4").click(function(){
    $(this)
    .parent().parent().siblings(".pro_small")
    .children(".pro_4_s").css("display","block")
    .siblings().css("display","none")
})
$(".pro_s5").click(function(){
    $(this)
    .parent().parent().siblings(".pro_small")
    .children(".pro_5_s").css("display","block")
    .siblings().css("display","none")
})


