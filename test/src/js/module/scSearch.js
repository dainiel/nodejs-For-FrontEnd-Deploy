define(function (require, exports, module) {
	var $ = require("jquery"),
		titleClick = require("scHelpClick"),
		questions = require("data/question"),
		$resultContent = $("#sch-search-content");

	function search(options) {
		var keyword = options.keyword,
			$result = [],
			resultLength = 0,
			$list = $("<ul class='sch-content-list'></ul>");

		//如果关键字为空，显示错误消息
		if(!keyword) {
			var $errorResult = $('<div class="no-result"><p class="line-three">搜索内容不能为空! </p></div>');	
			$resultContent.html($errorResult);
			return;
		}

		for(var i = 0,l = questions.length; i <l; i++) {
			var qSection = questions[i].section,
				qContents = questions[i].content;

			for(var j = 0,l2 = qContents.length;j < l2; j++) {
				var qContent = qContents[j],
					q = qContent.q,
					a = qContent.a,
					keyReg = new RegExp("("+ keyword+ ")", "g");
					show = false;

				if(q.search(keyword) != -1) {
					q = q.replace(keyReg, "<span class='key-word'>$1</span>");
					show = true;
				}

				if(a.search(keyword) != -1) {
					a = a.replace(keyReg, "<span class='key-word'>$1</span>");
					show = true;
				}

				if(show) {
					var $item = $("<li class='sch-content-item'></li>"),
						$q = $('<h4 class="question"><a href="#">'+ (++resultLength) + "." + q +'</a></h4>'),
						$a = $('<p class="answer">'+ a +'</p>');
					$item.append($q, $a);
					$result.push($item);

					titleClick($item, $list, resultLength - 1);
				}
				
			}
		}
		
		if($result.length == 0) {
			var $noResult = $('<div class="no-result"><p class="line-one">很抱歉没有找到与 <span class="key-word">'+ keyword +'</span> 相关的内容</p><p class="line-two">建议您输入其他关键字试试 </p></div>');
			$resultContent.html($noResult);
		}
		else {
			$list.html($result);
			$resultContent.html($list);
		}
	}

	return search;
});