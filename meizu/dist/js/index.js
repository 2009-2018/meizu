define(["startMove","parabola", "jquery", "jquery-cookie"], function(startMove,parabola, $){
	var main = function(){

		$(function(){
            /* 导航栏加载数据*/
		  $.ajax({
                 url:'data/data.json',
                     success:function(arr){
                        for(var i=0;i<arr.length;i++){
                            $(`
               <li class="nav-item">
                <a class="nav-link">${arr[i].title}</a>
                </li>
            `).appendTo($('.nav'))
                        }
                    },
                     error:function(data){
                    alert(data);
                }


          })
            /* 导航栏下拉菜单数据加载*/
           
           $.ajax({ 
                 url:'data/data.json',
                     success:function(arr){

                        for(var i=0;i<1;i++){
                            $(`
                         <div class="nav-child">
        <div class="mzcontainer">
          <ul class="nav-child-list" style="margin-left: -608px">
            
          </ul>
        </div>
        
       </div>
                   `).appendTo($('.nav-item'))
                        }
                    },
                     error:function(data){
                    alert(data);
                }


          })
            $.ajax({ 
                 url:'data/data.json',
                     success:function(arr){
                            $('.nav-child-list').empty();
                        for(var i=0;i<arr[index].phone.length;i++){
                         
                            $(`
                        <li class="nav-child-item">
                            <a class="nav-child-link">
                                <div class="nav-child-box">
                                    <img src="${arr[index].phone[i].img}" class="nav-child-img">
                                </div>
                                <p class="nav-child-name">${arr[index].phone[i].name}</p>
                               <p class="nav-child-bottom">
            <span class="nav-child-price">${arr[index].phone[i].price}</span>起
          </p>
                            </a>
                        </li>
                   `).appendTo($('.nav-child-list'))
                        }
                    },
                     error:function(data){
                    alert(data);
                }


          })
           
          /* 轮播图数据加载*/
           $.ajax({
                 url:'data/datas.json',
                     success:function(arr){
                        for(var i=0;i<arr.length;i++){
                            $(`
               <li><img src ="${arr[i].img}";></li>
            `).appendTo($('.nb'))
                        }
                    },
                     error:function(data){
                    alert(data);
                }


          })
            /* 小人下拉菜单数据加载*/
           $.ajax({
                 url:'data/people.json',
                     success:function(arr){
                        for(var i=0;i<arr.length;i++){
                            $(`
                <li class="user-item">
        <a href="http://localhost/meizu/dist/login.html">${[arr[i].name]}</a>
       </li>
            `).appendTo($('.user-list'))
                        }
                    },
                     error:function(data){
                    alert(data);
                }


          })
            /*轮播下的图片 */
             $.ajax({
                 url:'data/img.json',
                     success:function(arr){
                        for(var i=0;i<arr.length;i++){
                            $(`
                <li class="home-server-item">
         <a class="home-server-link">
            <img src="${arr[i].img}" class="home-server-img">
         </a>
    </li>
            `).appendTo($('.home-server'))
                        }
                    },
                     error:function(data){
                    alert(data);
                }


          })
             /* 滑动轮播图*/
              $.ajax({
                     url:'data/dataes.json',
                     success:function(arr){
                        for(var i=0;i<arr.length;i++){
                            $(`<li class="home-product">
                <a href="#" class="home-product-link">
                    <img  class="home-product-img" src="${arr[i].img}">
                    <h4 class="home-product-title">${arr[i].title}</h4>
                    <h6 class="home-product-subtitle">
                        <span class="home-product-subtitle-label">${arr[i].lable}</span>
                    </h6>
                    <p class="home-product-bottom">
                        <span class="home-product-price">
                            ${arr[i].price}
                            
                        </span>
                    </p>
                </a>
             </li>`).appendTo($('.home-hot-list'))
                        }
                     }

               })
              /* 主菜单加载*/
               $.ajax({
                     url:'data/menu.json',
                     async :false,
                     success:function(arr){
                        for(var i=0;i<2;i++){
                            $(`<li class="home-floor-item mzcontainer">
        <div class="home-floor-ad">
            <div class="home-floor-ad-content">
                <div class="mzcontainer">
                    <img src="//openfile.meizu.com/group1/M00/06/1F/Cgbj0Vt2ijiAYaOpAALoOBrSrns028.jpg" class="home-floor-ad-img">
                </div>
            </div>
        </div>
        <div class="home-floor-content">
            <div class="home-floor-header clearfix">
                <h2 class="home-floor-title">手机</h2>
                <div class="home-floor-nav">
                    <a href="#" class="home-floor-nav-link actives">超值推荐</a>
                </div>
                <a href="#" class="home-floor-more">更多></a>
            </div>
            <div class="home-floor-content-list">
                <ul class="home-floor-product clearfix ae">
                    <li class="home-product ad">
      <a class="home-product-link">
        <img class="home-product-img" src="//openfile.meizu.com/group1/M00/05/F5/Cgbj0Vtqmn2AeU1cAACNntiM81g940.jpg" alt="MEIZU 15"> 
      </a>
      
    </li>
                    `).appendTo($('.home-floor'))
                        }   
                     }

               })
               $.ajax({
                     url:'data/menu.json',
                     success:function(arr){
                        for(var i=0;i<arr.length;i++){
                            $(`
                    <li class="home-product ">
                        <a class="home-product-link">
                          <img src="${arr[i].img}" class="home-product-img">
                          <h4 class="home-product-title">${arr[i].title}</h4>
                          <h6 class="home-product-subtitle red"> 
            <span class="home-product-subtitle-label">${arr[i].label}</span>
            骁龙845 年度旗舰
            </h6>
            <P class="home-product-bottom">
            <span class="home-product-price">2698
               <span class="home-product-start-tag">起</span> 
            </span>
            </P>
                        </a>
                    </li>`).appendTo($('.ae'))
                        }   
                     }

               })

                $.ajax({
                     url:'data/last.json',
                     async :false,
                     success:function(arr){
                        for(var i=0;i<1;i++){
                            $(`<li class="home-floor-item mzcontainer">
        <div class="home-floor-ad">
            <div class="home-floor-ad-content">
                <div class="mzcontainer">
                    <img src="//openfile.meizu.com/group1/M00/06/1F/Cgbj0Vt2ijiAYaOpAALoOBrSrns028.jpg" class="home-floor-ad-img">
                </div>
            </div>
        </div>
        <div class="home-floor-content">
            <div class="home-floor-header clearfix">
                <h2 class="home-floor-title">手机周边</h2>
                <div class="home-floor-nav">
                    <a href="#" class="home-floor-nav-link actives">超值推荐</a>
                    <a href="#" class="home-floor-nav-link">数据线/电源适配器</a>
                    <a href="#" class="home-floor-nav-link">保护套/后盖/贴膜</a>
                </div>
                <a href="#" class="home-floor-more">更多></a>
            </div>
            <div class="home-floor-content-list ab">
               
                
               
            </div>
        </div>
    </li>`).appendTo($('.home-floor'))
                        }   
                     }

               })
                $.ajax({
                     url:'data/last.json',
                     async :false,
                     success:function(arr){
                        for(var i=0;i<2;i++){
                            $(`
                <ul class="home-floor-product clearfix ac">
                
                </ul>
                
        `).appendTo($('.ab'))
                        }   
                     }

               })
                 $.ajax({
                     url:'data/last.json',
                     async :false,
                     success:function(arr){
                        for(var i=0;i<1;i++){
                            $(`
                <ul class="home-floor-product clearfix aa">
                
                </ul>
                
        `).appendTo($('.ab'))
                        }   
                     }

               })
                $.ajax({
                     url:'data/last.json',
                     async :false,
                     success:function(arr){
                        for(var i=0;i<arr.length;i++){
                            $(`
               
                    <li class="home-product">
      <a class="home-product-link" target='_blank'href='http://localhost/meizu/dist/details.html'>
        <img class="home-product-img" src="${arr[i].img}" alt="MEIZU 15">
        <h4 class="home-product-title">${arr[i].title}</h4>
        <h6 class="home-product-subtitle">
            
            支持3期免息 升级版
          </h6>
          <p class="home-product-bottom">  
            <span class="home-product-price">${arr[i].price}  
            </span>
            
          </p>
      </a>
      
    </li>
                
        `).appendTo($('.ac'))
                        }   
                     }

               })
                $.ajax({
                     url:'data/menus.json',
                     async :false,
                     success:function(arr){
                        for(var i=0;i<arr.length;i++){
                            $(`
               
                    <li class="home-product">
      <a class="home-product-link" target='_blank' >
        <img class="home-product-img" src="${arr[i].img}" alt="MEIZU 15">
        <h4 class="home-product-title">${arr[i].title}</h4>
        <h6 class="home-product-subtitle">
            
            支持3期免息 升级版
          </h6>
          <p class="home-product-bottom">  
            <span class="home-product-price">${arr[i].price}  
            </span>
            
          </p>
      </a>
      
    </li>
                
        `).appendTo($('.aa'))
                        }   
                     }

               })
                
               
           /* 侧边栏数据加载*/
           $.ajax({
                 url:'data/nav.json',
                     success:function(arr){
                      
                        for(var i=0;i<arr.length;i++){
                            $(`
                <li class="home-category-item">
        <a class="home-category-link" href="#">${arr[i].title}</a>
        <div class="home-category-child clearfix">
            <div class="home-category-child-list clearfix">
                <a href="#" class="home-category-child-item title">魅族手机</a>
                <a class="home-category-child-item">
                    <img class="home-category-child-img" src="//openfile.meizu.com/group1/M00/05/F6/Cgbj0VtqstmAFgV1AAdk_Uz-jKk275_180x180.png">
                    <div class="home-category-child-text">魅族 16th</div>
                </a>

            </div>
           

        </div>

    </li>
            `).appendTo($('.home-category'))
                        }
                    },
                     error:function(data){
                    alert(data);
                }


          }) 

          /* 页脚数据加载*/
           $.ajax({
                 url:'data/footer1.json',
                     success:function(arr){
                      
                        for(var i=0;i<arr.length;i++){
                            $(`
                <li class="layout-footer-services-item">
                          <a href="#" class="layout-footer-services-link">
                          <img src="${arr[i].img}" >
                          <span class="layout-footer-services-text">${arr[i].name}</span>
                          </a>
                        </li>
            `).appendTo($('.layout-footer-services'))
                        }
                    },
                     error:function(data){
                    alert(data);
                }


          }) 
           
          $.ajax({
                 url:'data/footer2.json',
                     success:function(arr){
                      
                        for(var i=0;i<arr.length;i++){
                            $(`
                <li class="layout-footer-interlock-item">
          <a href="//www.meizu.com/about.html" target="_blank" class="layout-footer-interlock-link" data-mtype="wmz_public_yw_learn">${arr[i].name}</a>
        </li>
            `).appendTo($('.layout-footer-interlock'))
                        }
                    },
                     error:function(data){
                    alert(data);
                }


          }) 
         $.ajax({
                 url:'data/footer3.json',
                     success:function(arr){
                      
                        for(var i=0;i<arr.length;i++){
                            $(`
               <li class="footer-lang-item">
    <a href="https://www.meizu.com/index.html">
      <img class="lang-icon" src="${arr[i].img}" alt="">
      <span>${arr[i].title}</span>
    </a>
  </li>
            `).appendTo($('.footer-lang-list'))
                        }
                    },
                     error:function(data){
                    alert(data);
                }


          })   
		})
              
        /* 购物车显示隐藏*/
	          $('.layout-header-service').on('mouseover','#layoutHeaderCart',function(){
                  $('.store-cart').css('display','block');

            })
        $('.layout-header-service').on('mouseout','#layoutHeaderCart',function(){
                  $('.store-cart').css('display','none');

            })
       /*导航轮播图*/
       var num=0;
       var timer=null;
     $(function(){
       
         $('.center_top').mousemove(function(event) {
              clearInterval(timer);
          });
          $('.center_top').mouseout(function(event) {
              timer = setInterval(run2,6000);
          });
              $('.left').click(function(){
                 clearInterval(timer);
                num--;    
                  if(num<0){
                    num=7;
                    
                  }

          $('.nb li').eq(num).siblings().stop(true,true).animate({
          opacity:0,
 
        },1000);
        $('.nb li').eq(num).stop(true,true).animate({
          opacity:1,
          
        },1000)
           $('#nav span').eq(num).addClass('active').siblings().removeClass('active');     
             })
          
         $('.right').click(function(){
             clearInterval(timer);
                num++;    
                  if(num>7){
                    num=0;
                    
                  }

          $('.nb li').eq(num).siblings().stop(true,true).animate({
          opacity:0,
 
        },1000);
        $('.nb li').eq(num).stop(true,true).animate({
          opacity:1,
          
        },1000);
         $('#nav span').eq(num).addClass('active').siblings().removeClass('active');      
             })

      $('#nav span').mouseover(function(){
        clearInterval(timer);
                var n=$(this).index()
                
               num=n;
         $('.nb li').eq(num).siblings().stop(true,true).animate({
          opacity:0,
 
        },1000);
        $('.nb li').eq(num).stop(true,true).animate({
          opacity:1,
          
        },1000)
           $('#nav span').eq(num).addClass('active').siblings().removeClass('active');
       })

       function move1(){
      $('.nb li').eq(num).siblings().stop().animate({
          opacity:0
         
        },1000);
        $('.nb li').eq(num).stop().animate({
          opacity:1
        },1000);
      
       $('#nav span').eq(num).addClass('active').siblings().removeClass('active');
 }

function run2(){ 
      num++;
       if(num>7){
              num=0;
         }
       move1();  
}
   timer = setInterval(run2,6000);
     })
        /*输入框获取焦点事件*/
    $(function(){
         $(".layout-header-service").on('focus', "#layoutHeaderSearch", function(){
                    $(this).css('border-color', 'black');                  
                })
          $(".layout-header-service").on('blur', "#layoutHeaderSearch", function(){
                    $(this).css('border-color', '');                  
                })

    })
       /*导航栏下拉 */ 
            $(".nav").on('mousemove', ".nav-item", function(){

                    $("#layoutHeaderNavDownmenu").addClass('activeee')
                    
           $(".nav .nav-item .nav-child").eq($(this).index()).addClass('activeeee');
              $.ajax({ 
                 url:'data/data.json',
                     success:function(arr){
                           
                        for(var i=0;i<arr[index].phone[i].length;i++){

                            $(`
                        <li class="nav-child-item">
                            <a class="nav-child-link">
                                <div class="nav-child-box">
                                    <img src="${arr[index].phone[i].img}" class="nav-child-img">
                                </div>
                                <p class="nav-child-name">${arr[index].phone[i].name}</p>
                               <p class="nav-child-bottom">
            <span class="nav-child-price">${arr[index].phone[i].price}</span>起
          </p>
                            </a>
                        </li>
                   `).appendTo($('.nav-child-list'))
                        }
                    },
                     error:function(data){
                    alert(data);
                }


          })
           
                })
            $(".nav").on('mouseout', ".nav-item", function(){ 
          
                    $("#layoutHeaderNavDownmenu").removeClass('activeee')
                     $(".nav .nav-item .nav-child").eq($(this).index()).removeClass('activeeee');
                })
           
     /*小人的下拉功能*/
      $(".layout-header-service-avatar").hover(
        function(){
            $(".user").slideToggle(800);
        },function(){
           $('.user').css('display','block');
                   })
     var oel = document.getElementById('ul1');
     oel.onmouseover= function(ev){
                    var e = ev || window.event;
                    var target = e.target || window.event.srcElement;
                    if(target.tagName.toLowerCase() == 'a'){

                        target.style.backgroundColor = 'rgba(0,0,0,.15)';
                         target.style.color = '#00c3f5';
                    }
                }
        oel.onmouseout= function(ev){
                    var e = ev || window.event;
                    var target = e.target || window.event.srcElement;
                    if(target.tagName.toLowerCase() == 'a'){

                        target.style.backgroundColor = '';
                        target.style.color = '';
                    }
                }
         /* 侧边栏导航*/
         $("#homeCategory").on('mousemove', "li", function(){
                    $(this).css('backgroundColor', '#fff');
                    $("#homeCategory li .home-category-child ").eq($(this).index()).css('display', 'block');
                })
          $("#homeCategory").on('mouseout', "li", function(){
                    $(this).css('backgroundColor', '');
                    $("#homeCategory li .home-category-child ").eq($(this).index()).css('display', 'none');
                })
          /* 滑动轮播*/
          play();
          $(".home-hot-list").on('mousemove', 'li', function(event) {      
           $(this).addClass('activee')
          
        });
        $(".home-hot-list").on('mouseout', 'li', function(event) {      
           $(this).removeClass('activee')
          
       });
                 
       $('#right').click(function(){
                   $('.home-hot-list').css('left', -1240);
                 
                   $('#right').css('border-color', "gray");
                   $('#left').css('border-color', "black");
       })
        $('#left').click(function(){
                   $('.home-hot-list').css('left', 0);  
                    $('#right').css('border-color', "black");
                    $('#left').css('border-color', "gray");
       })
       var index=0;
       var oNbs = $('#nbs')
       var timers=0;
     function play() {
        timers = setInterval(function () {
            index++;
            if(index>1){index=0; $('#right').css('border-color', "black");
                    $('#left').css('border-color', "gray");}else{ $('#right').css('border-color', "gray");
                   $('#left').css('border-color', "black");}
          oNbs.css('left', -1240*index);
          
        },6000)
    }
       /*主菜单*/
       $(".home-floor-product").on('mousemove', 'li', function(event) {      
           $(this).addClass('activee')
          
       });
        $(".home-floor-product").on('mouseout', 'li', function(event) {      
           $(this).removeClass('activee')
          
       });  
       $(".home-floor-nav").find('a').on('mousemove','',function(event){
                    $(".home-floor-nav").find('.home-floor-nav-link').removeClass( 'actives');
                    $(".ab").find('ul').css('display', 'none').eq($(this).index()).css('display', 'block');
                    $(this).addClass('actives');
                    

                }) 
              /*主菜单点击*/
                 $('.home-floor-content-list').on('click','.home-product',function(){
                     var id=($(this).index())

                     $.cookie('id', `[{id:${id}}]`, {expires: 7});
       }) 

	}
        

	return {
		main: main
	}

})




