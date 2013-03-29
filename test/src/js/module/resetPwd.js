/* 重置密码页面 */
seajs.use(["jquery", "scValidator"], function ($, validator) {
	$(function(){
		var pwdReset  = new validator.resetPwd({
			form : ".scr-wrapper",
			id : "#username",
			password : "#password",
			password2 : "#password2",
			remember : "#remPwd",
			submit : "#resetPwd",
			submitIng : "#resetPwdIng"
		});

		pwdReset.initialize();
	});
});