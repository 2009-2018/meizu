//完美运动框架，可以完成所有的动画特效。
function startMove(obj, json, complete){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){

		var isYes = true; //代表所有样式都到达目的值了

		for(var attr in json){
			//获取当前值
			var iCur = null;
			if(attr == 'opacity'){
				iCur = parseInt(parseFloat(getStyle(obj, 'opacity')) * 100);
			}else{
				iCur = parseInt(getStyle(obj, attr));

			}
			//计算速度
			var speed = (json[attr] - iCur) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			
			//赋值
			if(attr == 'opacity'){
				iCur += speed;
				obj.style.filter = 'alpha(opacity=' + iCur + ')';
				obj.style.opacity = iCur / 100;
			}else{
				obj.style[attr] = iCur + speed + 'px';
			}
			
			if(iCur != json[attr]){
				isYes = false;
			}
		}
		if(isYes == true){
			clearInterval(obj.timer);
			if(complete){
				complete.call(obj);
			}
		}
	}, 30);
}

function getStyle(element, cssType){
	return element.currentStyle ? element.currentStyle[cssType] : getComputedStyle(element)[cssType];
}