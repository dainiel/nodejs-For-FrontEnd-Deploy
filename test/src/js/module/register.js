/* 注册页面 */
/* 提交验证 */
seajs.use(["jquery", "scValidator"], function ($, validator) {
	$(function(){
		var reg  = new validator.register({
			form : ".scr-wrapper",
			id : "#username",
			mail : "#mail",
			password : "#password",
			password2 : "#password2",
			agree : "#remember",
			submit : "#register",
			submitIng : "#register-ing"
		});

		reg.initialize();
	});
});

/* placeholder */
seajs.use(["jquery", "scPlaceholder"], function($, placeholder) {
	$(function() {
		$(".ipt, .pwd").each(function(i, ele) {
			placeholder($(ele), {
				width: 312,
				height : 30,
				top : 0,
				left : 0,
				textIndent : "7px"
			});
		});
	});
});