console.log("加载完成");

/*
	配置模块

 */
require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"parabola": "parabola",
		"startMove":"startMove",
		"details":"details"
	},
	//设置，模块之间的依赖关系
	shim: {
		//保证，先加载JQuery，再加载
		"jquery-cookie": ["jquery"],
		/*
			定义不遵从AMD规范的js文件

		 */
		"parabola": {
			exports: "_"
		},
		"startMove": {
			exports: "_"
		}
	}
})

require(["details"], function(details){
	details.mainsss();

})



























