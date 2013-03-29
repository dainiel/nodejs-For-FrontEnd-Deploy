/* 重置密码 */
seajs.use(["jquery", "scValidator"], function ($, validator) {
	$(function(){
		var reset  = new validator.reset({
			form : ".scr-wrapper",
			id : "#username",
			submit : "#forget",
			submitIng : "#forget-ing"
		});

		reset.initialize();
	});
});