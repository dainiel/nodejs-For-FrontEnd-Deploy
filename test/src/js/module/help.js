/* 帮助页面 */

//区域切换
seajs.use("jquery", function ($) {
	var $contents = $(".sch-content"),
		$navItem = $(".sch-sidebar .sch-nav-item");
	//对每个item进行selected事件注册
	$navItem.each(function(i, ele) {
		var $item = $(this);
		(function(i) {
			$item.on("selected", function(e, n) {
				if(i == n) {
					$item.addClass("selected");
					$contents.eq(i).show();
				}else {
					$item.removeClass("selected");
					$contents.eq(i).hide();
				}
			});
		})(i);
	});

	//对标题变化进行时间注册
	var $currentPosition = $(".scf-title-one .cur-position");
	$currentPosition.on("change:position", function(e, position) {
		var $target = $(e.currentTarget);
		$target.text(">" + position);
	});
	

	$(".sch-sidebar").on("click", ".sch-nav-item", function(e) {
		var $target = $(e.currentTarget),
			position = $target.text(),
			n = parseInt($target.attr("data-value"));
			
		$currentPosition.trigger("change:position", [position]);
		$navItem.trigger("selected", [n]);
	});

	//初始化
	$navItem.eq(0).trigger("click");
});

//将帮助问题的数据注入页面中
seajs.use(["jquery", "scHelpClick", "data/question"], function($, titleClick, questions) {
	var $contents = $(".seachable");

	$contents.each(function(i, ele) {
		var $content = $(this),
			$list = $("<ul class='sch-content-list'></ul>"),
			qContents = questions[i].content;
		
		//将内容读出来，放到$list中
		for(var a = 0,l = qContents.length;a < l;a++) {
			var $item = $("<li class='sch-content-item'></li>"),
				qContent = qContents[a],
				$q = $('<h4 class="question"><a href="#">'+ (a + 1) + "." + qContent.q +'</a></h4>'),
				$a = $('<p class="answer">'+ qContent.a +'</p>');
			$item.append($q, $a);
			$list.append($item);

			titleClick($item, $list, a);
		}
		
		$content.html($list);
	});
});

//搜索按钮的注册以及相关展示
seajs.use(["jquery", "scSearch"], function($, search) {
	var $searchIpt = $("#searchIpt"),
		$searchBtn = $("#searchBtn"),
		$searchItem = $("#sch-search-item");

	$searchIpt.on("keypress", function(e) {
		if(e.keyCode == 13) {
			$searchBtn.trigger("click");
		}
	});

	$searchBtn.on("click", function(e) {
		e.preventDefault();
		var $target = $(e.currentTarget),
			keyword = $searchIpt.val();

		$searchItem.show().trigger("click");
		search({keyword : keyword});
	});	
});

	
	
