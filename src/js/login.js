// 扫码登录和账号登录跳转
$('.login-skin').click(function(){
    $(this).addClass("on")
    .siblings(".login-user").removeClass("on")
    .parent().siblings(".skin-sec").addClass("active")
    .siblings(".account-sec").removeClass("active")
})
$('.login-user').click(function(){
    $(this).addClass("on")
    .siblings(".login-skin").removeClass("on")
    .parent().siblings(".skin-sec").removeClass("active")
    .siblings(".account-sec").addClass("active")
})



// 表单验证
$(function () {
    // 定义开关变量
    var flagUser=false
    var flagPwd=false

    // 找到所在标签元素
    var $user_name = $('#username')
    var $pwd=$('#password')
    var $submit = $("#login-btn")

    // 1.如果失去焦点，则进行检查判断用户名是否合法
    $user_name.blur(function () {
        // 封装函数 调用函数
        fnCheckUser()
    })
    function fnCheckUser() {
        // 获取用户输入的数据
        var vals = $user_name.val()
        // 正则，正则验证用户输入的数据是否合法
        var re = /^1\d{10}$/

        if (vals == '') {
            $(".user-tip").css("display","block")
            flagUser=false
            return
        }
        if (re.test(vals)) {
            // 合法 -- 隐藏报错信息
            $(".input-rig1").css("display","block")
            $(".input-err1").css("display","none")
            $(".user-tip").css("display","none")
            flagUser=true
        } else {
            // 不合法 -- 报错 -- 下面的span标签显示
            $(".input-rig1").css("display","none")
            $(".input-err1").css("display","block")
            flagUser=false
        }
    }

        // 2.如果密码框失去焦点，则进行检查判断密码是否合法
    $pwd.blur(function(){
        // 封装函数，调用函数
        fnCheckPwd()
    })
    function fnCheckPwd(){
        // 获取密码框输入的数据
        var vals=$pwd.val()
        // 密码正则匹配表达式
        var rePass = /^[\w!-@#$%^&*]{8,20}$/
        // 如果输入框为空，则提示不能为空并return
        if (vals==''){
            $(".psd-tip").css("display","block")
            flagPwd=false
            return
        }
        // 正则验证密码输入是否合法
        if(rePass.test(vals))
        {
            // 如果匹配成功，则隐藏span标签
            $(".input-rig3").css("display","block")
            $(".input-err3").css("display","none")
            $(".psd-tip").css("display","none")
            flagPwd=true
        }
        else
        {
            // 如果匹配失败，则显示span标签，替换提示信息
            $(".input-rig3").css("display","none")
            $(".input-err3").css("display","block")
            flagPwd=false
        }
    }

    // 3.所有输入框验证通过再提交注册
    $submit.click(function(){
        if(flagUser && flagPwd ){
            console.log('OK!')

            // // jQuery发送一个ajax请求
            $.ajax({
                url:'../interface/login.php',
                type:'get',
                data:{username:$("#username").val(),password:$("#password").val()},
                success:function(res){
                    console.log(res);
                    var i = JSON.parse(res);
                    console.log(i.code);
                    if(i.code == 1){
                        location.href = '../pages/detail.html'
                    }else{
                        alert("登录失败")
                    }
                },
                error:function(){
                    console.log('失败的回调')
                },
                // dataType:'json'
            
            })
        }
        else{
            alert("请输入正确的用户名和密码!")
            return false
        }
    })
 
})



