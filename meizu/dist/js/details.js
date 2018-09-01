define(["startMove","parabola", "jquery", "jquery-cookie"], function(startMove,parabola, $){
	var mainsss = function(){
              

		$(function(){
               sc_car();
               sc_msg();
               num();
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

		})
		$.ajax({
                 url:'data/last.json',
                     success:function(arr){
                     	var ld=eval($.cookie('id'))
                        for(var i=0;i<ld.length;i++){
                            $(`
               <a data-mtype="store_de_cart"  id="${arr[ld[i].id].id}" class="btn btn-empty btn-lg hide" style="display: inline-block;"><i></i>加入购物车</a>	
            `).appendTo($('.property-buy-action'))
                        }
                    },
                     error:function(data){
                    alert(data);
                }


          })


         /*点击加入购物出*/
         $('.property-buy-action').on('click','.hide',function(){
         	   sc_msg();
             num();
          var id = this.id;
			//存储cookie的时候，对于当前商品只存储两个值，id num
			//json格式的字符串去存 goods  [{id:1, num:3},{id:7, num2}];
			//
			//1、判断是否第一次添加cookie
			var first = $.cookie("goods") == null ? true : false;
			if(first){
				$.cookie('goods', `[{id:${id},num:1}]`, {expires: 7},{path:'http://localhost:8080/shop.html'});
			}else{
				//2、判断之前是否添加过该商品
				var str = $.cookie('goods');
				var arr = eval(str);
				var same = false; //假设没有相同的数据
				for(var i = 0; i < arr.length; i++){
					if(arr[i].id == id){
						//之前添加过
						arr[i].num++;
						var cookieStr = JSON.stringify(arr);
						$.cookie('goods', cookieStr, {expires: 7});
						same = true;

						break;


}				
}
				if(!same){
					//之前没添加过
					var obj = {id: id, num: 1};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
					$.cookie('goods', cookieStr, {expires: 7});

        
      
			
    }
  }
			sc_car();
			// alert($.cookie('goods'));
		})
    /*购物车数字 */
      function sc_car(){
			var str = $.cookie("goods");
			if(str){
				var arr = eval(str);
				var sum = 0;
				for(var i = 0; i < arr.length; i++){
					sum += arr[i].num;
				}
				$(".layout-header-service-cart-num").html(sum);
			}
		}
    /*不同商品个数*/
    function num(){
        var str = $.cookie("goods");
      if(str){
        var arr = eval(str);
        var sum = 1;
        for(var i = 0; i < arr.length; i++){
          sum += arr[i].num;
        }
        $(".store-cart-count").html(sum);
      }

    }
        /*显示购物车商品*/
		function sc_msg(){
			$.ajax({
				url: 'data/last.json',
				success: function(arr){
					$(".store-cart-list").html("");
					//在所有商品信息里面找出，加入购物车的商品信息
					var ld=eval($.cookie('goods'))
					for(var i = 0; i < ld.length; i++){
						$(`<li class="store-cart-item ">
  <div class="store-cart-item-content">
    <a href="//detail.meizu.com/item/samsung.html?skuId=4834" class="store-cart-link" target="_blank" >
      <img src="${arr[ld[i].id].img}" class="store-cart-pic" alt="">
    </a>
    <a class="store-cart-text" href="" target="_blank">
      <p class="store-cart-text-row">${arr[ld[i].id].title}</p>
      
      <p class="store-cart-text-row desc">32G</p>
    </a>
    <div class="store-cart-right">
      <p class="store-cart-item-total">${arr[ld[i].id].price} × ${ld[i].num}</p>
      <span class="store-cart-item-delete" data-mdesc="页头-购物车展开列表-商品删除按钮" data-mtype="store_index_dh_cart_del">删除</span>
      
    </div>
  </div>
</li>`).appendTo($(".store-cart-list"));
					}
				}
			})
		}
    
		/*数量增加和减少*/
        $('.mod-control').on('click','.vm-plus',function(){
                 var value=parseInt($('#J_quantity').val())+1;
                       $('#J_quantity').val(value);
                   $('.vm-minus').removeClass('disabled');
                
                 
                 
             })
       $('.mod-control').on('click','.vm-minus',function(){
       	
       	   var val=$('#J_quantity').val();
                if(val>1){
                 var value=parseInt($('#J_quantity').val())-1;
                       $('#J_quantity').val(value);

                }else if(val==1){
                	 $('.vm-minus').addClass('disabled');
                }
                 
                 
             })
       /*获得当前的id*/
         
         $.ajax({
                 url:'data/last.json',
                 dataType : "json",
                 type : "post",
                     success:function(arr){
                     	var ld=eval($.cookie('id'))
                        for(var i=0;i<ld.length;i++){
                            $(`
                <img src="${arr[ld[i].id].img}" height="560" width="560" alt="">
            `).appendTo($('#J_imgBooth'))
                        }
                    },
                     error:function(data){
                    alert(data);
                }


          })
         $.ajax({
                 url:'data/last.json',
                 dataType : "json",
                 type : "post",
                     success:function(arr){
                     	var ld=eval($.cookie('id'))
                        for(var i=0;i<ld.length;i++){
                            $(`
                <h1>${arr[ld[i].id].title}</h1>
        		<p class="mod-info ">支持3期免息 升级版  Class10 高速TF卡</p>	
            `).appendTo($('.property-hd'))
                        }
                    },
                     error:function(data){
                    alert(data);
                }


          })
          $.ajax({
                 url:'data/last.json',
                 dataType : "json",
                 type : "post",
                     success:function(arr){
                     	var ld=eval($.cookie('id'))
                        for(var i=0;i<ld.length;i++){
                            $(`
               <div class="mod-price">
                    <small>¥</small>
                    <span id="J_price" class="vm-money">${arr[ld[i].id].price}</span>
                </div>	
            `).appendTo($('.property-sell-price'))
                        }
                    },
                     error:function(data){
                    alert(data);
                }


          })
        
	}



return{
	mainsss:mainsss
}





})