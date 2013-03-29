/* 配置文件 */
define("global", function (require, exports, module) {
	var config = {
		/* 登陆 */
		login : "/loginAjax.do",
		loginSuccess : "/data_center.do",

		/* 注册 */
		register : "",
		registerSuccess : "",

		/* 重置密码 */
		reset : "",
		resetSuccess : "",

		/* 重置输入密码 */
		resetPsw : ""
	};

	config.resetPswSuccess = config.loginSuccess;

	exports.config = config;
})