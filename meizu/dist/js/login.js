define(["startMove","parabola", "jquery", "jquery-cookie"], function(startMove,parabola, $){
     
     var mains=function(){
         $(function(){
                 
            /* 二维码切换*/
            	$('.qr-btn').click(function(event) {
            		
            		 $('.qr-btn').toggleClass('pc-btn')	 
            	});
            	$('.qr-btn').click(function(event) {
            		 $('.qr-panel').toggleClass('hide')
                    

            	});
            	
            /* 小括号切换*/
            	$('.i_icon').click(function(event) {
            		 $('.checkboxPic').toggleClass('check_chk ')

            	});
            	$('.i_icon').click(function(event) {
            		 $('.checkboxPic').toggleClass('check_unchk')

            	});
            	$('label').click(function(event) {
            		 $('.checkboxPic').toggleClass('check_chk')
            		  $('.checkboxPic').toggleClass('check_unchk')

            	});
            	/*输入框获取焦点事件*/
                 $('.ipt-account').focus(function(event) {
            		 $('.cycode-box').addClass('btn-focus')
            		 

            	});
                 $('.ipt-account').blur(function(event) {
            		 $('.cycode-box').removeClass('btn-focus')
            		 
            	});
                  $('#password').focus(function(event) {
            		 $('.fieldInput').addClass('btn-focus')
            		 

            	});
                 $('#password').blur(function(event) {
            		 $('.fieldInput').removeClass('btn-focus')
            		 
            	});
                  $('#phone').focus(function(event) {
            		 $('.show-cycode').addClass('btn-focus')
            		 

            	});
                 $('#phone').blur(function(event) {
            		 $('.show-cycode').removeClass('btn-focus')
            		 
            	});
                 /*登陆注册页面切换*/
                  $('#toVCodeLogin').click(function(event) {
            		 $('#nextStep').css('display','block')
            		 $('#login').css('display','none')
            		 $('#toVCodeLogin').css('color','#32A5E7')
            		 $('#toAccountLogin').css('color','#7f7f7f')
            		 $('.op').css('display','none')
            		 $('.show-cycode').css('display','block')
            		 $('.rememberField').css('display','none')
            		 $('.oa').css('display','none')
            		  $('#flymeService').css('display','block')
                     obox1.style.visibility="hidden"
            		   ophonespan.style.visibility="hidden"
                      $("#password").val("");
            		 
            	});
                  $('#toAccountLogin').click(function(event) {
            		 $('#nextStep').css('display','none')
            		 $('#login').css('display','block')
            		 $('#toVCodeLogin').css('color','#7f7f7f')
            		 $('#toAccountLogin').css('color','#32A5E7')
            		 $('.op').css('display','block')
            		 $('.show-cycode').css('display','none') 
            		 $('.rememberField').css('display','block') 
            		 $('.oa').css('display','block')
            		  $('#flymeService').css('display','none')
            		  obox1.style.visibility="hidden"
            		   ophonespan.style.visibility="hidden"
                        $("#password").val("");

            	});
                  /*关闭提示框*/
                  $('.close-ico').click(function(event) {
                             ophonespan.style.visibility="hidden"
                             obox1.style.visibility="hidden"
                  });
            	/*微信切换*/
            	$('.footer-weChat').mousemove(function(event) {
            		$('#wechatPic').css('display', 'block');
            	});
            	$('.footer-weChat').mouseout(function(event) {
            		$('#wechatPic').css('display', 'none');
            	});
         }) 
         /* 账号注册手机号验证*/
         var ophone = document.getElementById('phone')
         var ophonespan = document.getElementById('box')
         var obox1=document.getElementById('box1')
         var opasword=document.getElementById('password')
         opasword.onblur=function(){
         	var oValue = opasword.value.replace(/ /g, "");
			opasword.value = oValue;
         }
         ophone.onblur = function(){
                   
                    var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
                    if(!phoneReg.test(this.value)){
                           ophonespan.innerHTML = '请输入正确的手机号';
                             ophonespan.style.visibility="visible"
                             obox1.style.visibility='visible'
                    }else{
                     
                    	 ophonespan.style.visibility="hidden"
                    	 obox1.style.visibility='hidden'
                    	 
                    
                    	  $('#nextStep').click(function(event) {
                      var username=$('#phone').val();
                     var password=$('#password').val();
                     if(password!=0){
                   $.ajax({
                          url:'php/register.php',
                          type:'post',
                          dataType:"TEXT",
                          data:{
                          	  'username':username,
                          	  'password':password
                          },
                            
                         success:function(data){           
                            alert("注册成功")
                            location.reload();  
                         },
                          error:function(data){
                              alert(data);
                }

                   })

                 } 

           });
        
                
                    }
                    
		       }
           
          /* 登陆手机号验证*/
       var ologin=document.getElementById('login')
        ologin.onclick=function(){
        	 var username=$('#account').val();
             var password=$('#password').val();
            if(account==0 || password==0){
            	 ophonespan.innerHTML = '请输入账号和密码';
            	 ophonespan.style.visibility="visible"
                 obox1.style.visibility='visible'

            }else{
            	 obox1.style.visibility="hidden"
                 ophonespan.style.visibility="hidden"
                $.ajax({
                      url:'php/login.php',
                      type:'post',
                      dataType: "json",
                      data:{
                          	  'username':username,
                          	  'password':password
                          },
                         success:function(data){
                            
                         	if(data==1){
                         		alert('登陆成功')
                         		location.reload();
                                   
                         	}else{
                 ophonespan.innerHTML = '请检查账号和密码';
                 ophonespan.style.visibility="visible"
                 obox1.style.visibility='visible'

                         	}
                              	
                              
                         }
                })

            }
        }

   }
     

return {
		mains: mains
	}

})