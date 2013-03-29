/* placeholde */
define("scPlaceholder", function (require, exports, module) {
	var $ = require("jquery"),
		support = !!("placeholder" in document.createElement("input"));

	function placeholder($ipt, options) {
		//如果原生不支持placeholder，则进行适配
		if(!support) {
			var phrValue = $ipt.attr("placeholder");
			//如果placeholder的值本身不存在，则返回
			if(!phrValue) {
				return;
			}

			var cssInfo = {
				width : options.width || $ipt.outerWidth,
				height : options.height || $ipt.outerHeight,
				left : options.left,
				top : options.top,
				textIndent : options.textIndent
			},$phrEle = $('<span class="placeholder"></span>');

			cssInfo.lineHeight = cssInfo.height + "px";

			//点击placeholder元素时，需要消失，同时ipt获得焦点
			$phrEle.on("click", function(e) {
				var $target = $(e.target);
				$target.hide();
				$ipt.focus();
			});

			//$ipt聚焦时，placeholder元素也需要消失
			$ipt.on("focus", function(e) {
				$phrEle.hide();
			});

			//输入框失去焦点时，如果没有文字，placeholder元素显示
			$ipt.on("blur", function(e) {
				if(!$ipt.val()) {
					$phrEle.show();
				}
			});

			$phrEle.text(phrValue);
			$phrEle.css(cssInfo);
			$ipt.after($phrEle);
		}
	}

	return placeholder;
});