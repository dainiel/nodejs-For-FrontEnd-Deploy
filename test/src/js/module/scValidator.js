define(function (require, exports, module) {
	var $ = require("jquery"),
		config = require("global").config;

	//登陆
	function login(options) {
		var $form;
		this.$form = $form = $(options.form);
		this.$id = $form.find(options.id);
		this.$password = $form.find(options.password);
		this.$remember = $form.find(options.remember);
		this.$submit = $form.find(options.submit);
		this.$submitIng = this.$submit.next();
		this.$msg = $form.find(".msg");
		this.loginStatus = true;
	}

	$.extend(login.prototype, {
		initialize : function() {
			this.events();
		},
		events : function() {
			var self = this;

			self.$submit.on("click", function(e) {
				e.preventDefault();        
				var id = self.$id.val(),
					password = self.$password.val(),
					remember = self.$remember.prop("checked");

				if(!id) {
					self.showError("请输入用户名");
					return;
				}

				if(!password) {
					self.showError("请输入密码");
					return;
				}

				/*var data = {
					passport : $.trim(id),
					password : $.trim(password),
					remember : remember
				}*/

				self.hideError();
				self.loginIng();
				/*$.ajax({
					url : config.login,
					type : "post",
					data : data
				}).done(function() {
					self.loginEnd();
				}).fail(function() {
					self.showError("网络似乎出了问题，请稍后再试");
					self.loginEnd();
				});*/
				var loginForm = $("#login-form");
				loginForm.trigger("submit");
			});

			self.$form.on("keyup", function(e) {
				if(e.keyCode == 13) {
					self.$submit.trigger("click");
				}
			});
		},
		loginSuc : function() {

		},
		loginIng : function() {
			this.$submitIng.show();
		},
		loginEnd : function() {
			this.$submitIng.hide();
		},
		showError : function(msg) {
			this.$msg.fadeIn("quick").text(msg);
		},
		hideError : function() {
			this.$msg.fadeOut("quick");
		}
	});

	//注册
	function register(options) {
		var $form;
		this.$form = $form = $(options.form);
		this.$id = $form.find(options.id);
		this.$mail = $form.find(options.mail);
		this.$password = $form.find(options.password);
		this.$password2 = $form.find(options.password2);
		this.$agree = $form.find(options.agree);
		this.$submit = $form.find(options.submit);
		this.$submitIng = this.$submit.next();
		this.$msg = $form.find(".msg2");
		this.loginStatus = true;
	}

	$.extend(register.prototype, {
		initialize : function() {
			this.events();
		},
		events : function() {
			var self = this;
			//失去焦点时各个输入框的反应
			self.$mail.on("blur", $.proxy(self.mailBlur, self));
			self.$id.on("blur", $.proxy(self.idBlur, self));
			self.$password.on("blur", $.proxy(self.passwordBlur, self));
			self.$password2.on("blur", $.proxy(self.passwordBlur2, self));

			//勾选同意时的变化
			self.$agree.on("click", $.proxy(self.agreeClick, self));

			//提交时的反应
			self.$submit.on("click", $.proxy(self.submit, self));

			self.$form.on("keyup", function(e) {
				if(e.keyCode == 13) {
					self.$submit.trigger("click");
				}
			});
		},
		mailBlur : function(e) {
			var self = this,
				$target = $(e.target),
				mail = $target.val();

			if(!mail || mail.search("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$") == -1) {
				self.showError("请输入正确的邮箱");
				self.loginStatus = false;
				return;
			}

			self.hideError();
			self.loginStatus = true;
		},
		idBlur : function(e) {
			var self = this,
				$target = $(e.target),
				id = $target.val();		

			if(!id || id.search("[A-Za-z0-9_]{4,20}") == -1) {
				self.showError("用户名为4-20个字符，仅允许字母、数字和下划线");
				self.loginStatus = false;
				return;
			}

			self.hideError();
			self.loginStatus = true;	
		},
		passwordBlur : function(e) {
			var self = this,
				$target = $(e.target),
				password = self.password = $target.val();

			if(!password) {
				self.showError("请输入密码");
				self.loginStatus = false;
				return;
			}

			if(password.length < 6 || password.length > 16) {
				self.showError("密码长度为6-16位");
				self.loginStatus = false;
				return;
			}

			if(self.password2 && (password != self.password2)) {
				self.showError("两次密码输入不一致！");
				self.loginStatus = false;
				return;
			}

			self.hideError();
			self.loginStatus = true;
		},
		passwordBlur2 : function(e) {
			var self = this,
				$target = $(e.target),
				password2 = self.password2 = $target.val();

			if(!password2) {
				self.showError("请确认密码");
				self.loginStatus = false;
				return;
			}

			if(password2.length < 6 || password2.length > 16) {
				self.showError("密码长度为6-16");
				self.loginStatus = false;
				return;
			}

			if(self.password && (password2 != self.password)) {
				self.showError("两次密码输入不一致");
				self.loginStatus = false;
				return;
			}

			self.hideError();
			self.loginStatus = true;
		},
		agreeClick : function(e) {
			var self = this,
				$target = $(e.target),
				result = $target.prop("checked");
			if(result) {
				self.loginStatus = true;
			}else {
				self.loginStatus = false;
			}
		},
		submit : function(e) {
			e.preventDefault();
			var self = this,
				ipts = [self.$mail, self.$id, self.$password ,self.$password2];

			for(var i = 0,l = ipts.length;i <l; i++){
				ipts[i].trigger("blur");
				if(!self.loginStatus) {
					return;
				}
			}

			if(!self.$agree.prop("checked")) {
				self.showError("请同意条款");
				return;
			}
			//如果没有任何问题，隐藏错误提示框
			self.hideError();
			self.loginIng();

			var data = {

			}

			$.ajax({
				url : config.register,
				type : "post",
				data : data
			}).done(function() {
				self.loginEnd();
			}).fail(function() {
				self.showError("网络似乎出了问题，请稍后再试");
				self.loginEnd();
			});;
		},
		loginSuc : function() {

		},
		loginIng : function() {
			this.$submitIng.show();
		},
		loginEnd : function() {
			this.$submitIng.hide();
		},
		showError : function(msg) {
			this.$msg.fadeIn("qucik").text(msg);
		},
		hideError : function() {
			this.$msg.fadeOut("qucik");
		}
	});

	//重置密码（输入用户名阶段）
	function reset(options) {
		var $form;
		this.$form = $form = $(options.form);
		this.$id = $form.find(options.id);
		this.$submit = $form.find(options.submit);
		this.$submitIng = this.$submit.next();
		this.$msg = $form.find(".msg");
		this.loginStatus = true;
	}

	$.extend(reset.prototype, {
		initialize : function() {
			this.events();
		},
		events : function() {
			var self = this;

			//提交
			self.$submit.on("click", $.proxy(self.submit, self));

			self.$form.on("keyup", function(e) {
				if(e.keyCode == 13) {
					self.$submit.trigger("click");
				}
			});
		},
		idCheck : function() {
			var self = this,
				id = self.$id.val();
			
			if(!id) {
				self.showError("请输入用户名");
				self.loginStatus = false;
				return false;
			}

			return true;
			self.loginStatus = true;		
		},
		submit : function(e) {
			e.preventDefault();

			var self = this;

			if(!self.idCheck()) {
				return;
			}

			self.hideError();
			self.loginIng();

			var data = {

			};

			$.ajax({
				url : config.reset,
				type : "post",
				data : data
			}).done(function() {
				self.loginEnd();
			}).fail(function() {
				self.loginEnd();
			});
		},
		resetSuccess : function() {

		},
		loginIng : function() {
			this.$submitIng.show();
		},
		loginEnd : function() {
			this.$submitIng.hide();
		},
		showError : function(msg) {
			this.$msg.fadeIn("quick").text(msg);
		},
		hideError : function() {
			this.$msg.fadeOut("quick");
		}
	});

	//重置密码（输入新密码段）
	function resetPwd(options) {
		var $form;
		this.$form = $form = $(options.form);
		this.$password = $form.find(options.password);
		this.$password2 = $form.find(options.password2);
		this.$submit = $form.find(options.submit);
		this.$msg = $form.find(".msg");
		this.loginStatus = true;
	}

	$.extend(resetPwd.prototype, {
		initialize : function() {
			this.events();
		},
		events : function() {
			var self = this;
			self.$submit.on("click", $.proxy(self.submit, self));

			self.$form.on("keyup", function(e) {
				if(e.keyCode == 13) {
					self.$submit.trigger("click");
				}
			});
		},
		//检查密码长度
		checkLength : function() {
			var self = this,
				password = self.$password.val();

			if(!password) {
				self.showError("请输入密码");
				return false;
			}

			var l = password.length;
			if(l<6 ||l>16) {
				self.showError("密码长度为6-16位");
				return false;
			}

			return true;
		},
		//检查两次输入
		checkRepeat : function() {
			var self = this,
				password = self.$password.val(),
				password2 = self.$password2.val();

			if(password != password2) {
				self.showError("两次密码输入不一致！");
				return false;
			}

			return true;
		},
		submit : function(e) {
			e.preventDefault();
			var self = this,
				$target = $(e.currentTarget);

			//如果通过条件有一个不满足，则不进行提交
			if(!self.checkLength() || !self.checkRepeat()) {
				return;
			}
			self.hideError();

			var data = {
				password : self.$password.val()
			}

			$.ajax({
				url : config.resetPsw,
				type : "post",
				data : data
			}).done(function() {

			}).fail(function() {

			});

		},
		loginSuc : function() {

		},
		loginIng : function() {
			this.$submitIng.show();
		},
		loginEnd : function() {
			this.$submitIng.hide();
		},
		showError : function(msg) {
			this.$msg.fadeIn("quick").text(msg);
		},
		hideError : function() {
			this.$msg.fadeOut("quick");
		}
	});

	exports.login = login;
	exports.register = register;
	exports.reset = reset;
	exports.resetPwd = resetPwd;
});