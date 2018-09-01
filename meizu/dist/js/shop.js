define(["startMove","parabola", "jquery", "jquery-cookie"], function(startMove,parabola, $){
     var mainss=function(){
         $(function(){
            /*¹´Ñ¡È«Ñ¡*/
             sc_car();
            var num=0;
            $('.mz-checkbox').click(function(event) {

            	   num++;
                   $('.mz-checkbox').toggleClass('checked')
                  if(num%2){
                     var val=$('.mz-adder-input').val();
                     $('.mz-btn').attr('disabled', false);
                      //$('#totalPrice').text(${arr[i].price}*val);
                  }else{
                      $('.mz-btn').attr('disabled', true);

                      $('#totalPrice').text(0);
                  }
              
             
                	
             
            });
            /* ÊýÁ¿Ôö¼ÓºÍ¼õÉÙ*/
             $('.mz-adder').on('click','.mz-adder-add',function(){

                 var value=parseInt($('.mz-adder-input').val())+1;
                       $('.mz-adder-input').val(value);
                  var val=$('.mz-adder-input').val();
                 $('.main-goods').text(99*val);
                  $('.mz-adder-subtract').removeClass('disabled');
                   if(num%2){
                     $('#totalPrice').text(99*val);
                }
             })
             $('.mz-adder').on('click','.mz-adder-subtract',function(){
                
                  var val=$('.mz-adder-input').val();
                if(val>1){
                   var value=parseInt($('.mz-adder-input').val())-1;
                       $('.mz-adder-input').val(value);
                 $('.main-goods').text(99*val);
                }
                 else if(val==1){
                  $('.mz-adder-subtract').addClass('disabled');
                  $('.main-goods').text(99);
                }
                if(num%2){
                     $('#totalPrice').text(99*val);
                }
             })  
             

            /*É¾³ý°´Å¥*/
            $('.cart-product-remove').on('click','span',function(){
            		$('.mz-btn').css('display', 'none');
            })
           
         })
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
		   /*¹ºÎï³µÊý¾Ý¼ÓÔØ*/
        $.ajax({
                 url:'data/last.json',
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
            function sc_car(){
      var str = $.cookie("goods");

      if(str){
        var arr = eval(str);
        var sum = 0;
        for(var i = 0; i < arr.length; i++){
          sum += arr[i].num;

        }
        $("#num1").text(sum);
      }
    }
           $.ajax({
                 url:'data/last.json',
                  dataType : "json",
                 type : "post",

                     success:function(arr){
                    var ld=eval($.cookie('goods'))
                     sc_car();
                        for(var i=0;i<ld.length;i++){
                            $(`
                 <table class="cart-merchant-body">
      <tr class="cart-product ">
        <td class="cart-col-select">
           <div class="mz-checkbox">
        <span style="color: #FFF">√</span>
      </div>
          <a href="#" class="cart-product-link">
            <img src='${arr[ld[i].id].img}' class="cart-product-img">
          </a>
          <a href='#' class="cart-product-link cart-product-info">
            <p class="cart-product-item-name">${arr[ld[i].id].title}</p>
            <p class="cart-product-desc">32G</p>
          </a>
        </td>
      <td class="cart-col-prices">
       <p><span class="cart-product-price">${arr[ld[i].id].price}</span></p>
     </td>
     <td class="cart-col-number">
      <div class="cart-product-number-adder">
      <p class="cart-product-number-max">
        
      </p>
    <div class="mz-adder">
  <button class="mz-adder-subtract disabled"></button>
  <div class="mz-adder-num"><input type="text" class="mz-adder-input" value="1" id="num1"></div>
  <button class="mz-adder-add"></button>
</div></div>
    
  </td>
  <td class="cart-col-total">
    <span class="cart-product-price total main-goods">${arr[ld[i].id].price}</span>
  </td>
  <td class="cart-col-ctrl"><div class="cart-product-remove let-show"><span>×</span></div></td>
      </tr>
    </table>
            `).appendTo($('.cart-merchant'))
                        }
                    },
                     error:function(data){
                    alert(data);
                }


          })  

     }
    return{ mainss:mainss
   }
})