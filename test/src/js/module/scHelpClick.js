define(function(define, exports, module) {
	//$item为项目,a为其在列表中的index
	function titleClick($item, $list, a) {
		$item.on("click", ".question a", function(e) {
			e.preventDefault();
			var $target = $("currentTarget");
			/*if($item.find("a").is($target)) {
				$item.trigger("selected", [a]);
			}*/
			$list.trigger("selected", [a]);
		});

		$list.on("selected", function(e, i) {
			if(i == a) {
				$item.toggleClass("selected");
			}else {
				$item.removeClass("selected");
			}
		});
	}

	return titleClick;
});