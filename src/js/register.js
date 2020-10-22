// 表单验证
$(function () {
    // 定义开关变量
    var flagUser=false
    var flagPwd=false
    var flagCpwd = false
    var flagAllow = false

    // 找到所在标签元素
    var $user_name = $('#username')
    var $pwd=$('#password')
    var $submit = $("#register-btn")
    var $cpwd = $("#re_psd")
    var $allow = $(".check-box")

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
            $(".phone-tip").css("display","block")
            flagUser=false
            return
        }
        if (re.test(vals)) {
            // 合法 -- 隐藏报错信息
            $(".input-rig1").css("display","block")
            $(".input-err1").css("display","none")
            $(".phone-tip").css("display","none")
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
            $(".psd1-tip").css("display","block")
            flagPwd=false
            return
        }
        // 正则验证密码输入是否合法
        if(rePass.test(vals))
        {
            // 如果匹配成功，则隐藏span标签
            $(".input-rig3").css("display","block")
            $(".input-err3").css("display","none")
            $(".psd1-tip").css("display","none")
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

    // 3.判断两次输入的密码是否一致
    $cpwd.blur(function(){
        // 封装函数，调用函数
        fnCheckCpwd()
    })
    function fnCheckCpwd(){
        // 获取重复密码框输入的数据
        var vals=$pwd.val()
        var cvals=$cpwd.val()
        if(cvals==''){
            $(".psd2-tip").css("display","block")
            $(".input-err4").css("display","block")
            $(".psd2_li").css("display","none")
            $(".input-rig4").css("display","none")
            flagCpwd=false
            return  
        }
        if (vals==cvals){
            $(".input-rig4").css("display","block")
            $(".input-err4").css("display","none")
            $(".psd2_li").css("display","none")
            $(".psd2-tip").css("display","none")
            flagCpwd=true
        }
        else{
            $(".input-rig4").css("display","none")
            $(".input-err4").css("display","block")
            $(".psd2-tip").css("display","none")
            $(".psd2_li").css("display","none")
            $cpwd.parent().siblings(".psd2_li").show().html('两次密码输入不一致，请重新输入')
            flagCpwd=false
            return
        }
    }
    
    //  // 5.点击同意协议复选框，判断是否勾选。如果勾选，则隐藏提示信息，没有勾选，则显示报错信息
    $allow.click(function(){
        fnCheckAllow()
    })
    // 封装函数
    function fnCheckAllow(){
        if($allow.prop('checked'))
        {
            $(".check-tip").css("display","none")
            flagAllow=true
        }else
        {
            $(".check-tip").css("display","block")
            flagAllow=false
        }
    }

    // 6.所有输入框验证通过再提交注册
    $submit.click(function(){
        if(flagUser && flagPwd && flagCpwd && flagAllow){
            console.log('OK!')

            // // jQuery发送一个ajax请求            
            $.ajax({
                url:'../interface/register.php',
                type:'post',
                data:{username:$("#username").val(),password:$("#password").val()},
                success:function(res){
                    console.log(res);
                    var i = JSON.parse(res);
                    console.log(i.code);
                    if(i.code == 1){
                        location.href = '../pages/login.html'
                    }else{
                        alert("注册失败")
                    }
                },
                error:function(){
                    console.log('失败的回调')
                },
                // dataType:'json'
            })
        }
        else{
            alert("请填写正确的用户名和密码并接受服务条款!")
            return false
        }
        
    })

})





