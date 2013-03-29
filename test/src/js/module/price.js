/* 定价 */
seajs.use("jquery", function ($) {
	var $numIpt = $("#numIpt"),
		$extra = $("#use-ip"),
		$sum = $("#sum");

	//对最后统计总数进行监听
	$sum.on("sumChange", function(e, price, plus) {
		var $target = $(e.target);
		
		//如果有plus参数则直接叠加
		if(plus) {			
			var oldValue = parseInt($target.text()),
				newValue = oldValue + price;
			
			//新值不能小于0
			if(newValue < 0) {newValue = 0}
			$target.text(newValue);
		}
		else {
			$target.text(price);
		}
	});


	//使用独立ip
	/*$extra.on("click", function(e) {
		var $target = $(e.target),
			result = $target.prop("checked"),
			extraPrice = parseInt($target.attr("data-value"));
		if(result) {
			$sum.trigger("sumChange", [extraPrice ,"plus"]);
		}
		else {
			$sum.trigger("sumChange", [-extraPrice, "plus"]);
		}
	});*/

	$numIpt.on("keypress", function(e) {		
		var $target = $(e.target),
			length = $target.val().length,
			word = e.keyCode || e.charCode;
		
		if((word < 48 || word > 57)&&(word != 8)) {
			e.preventDefault();
			return;
		}
	});

	$numIpt.on("keyup", function(e) {
		var $target = $(e.target),
			num = Math.ceil(parseInt($target.val())/1000),
			priceShow = $(".price-level"),
			price = 0,
			levelPrice = [];

		levelPrice = getPrice(num);

		priceShow.text("0");
		for(var i = 0,l = levelPrice.length;i < l;i++) {
			priceShow.eq(i).text(levelPrice[i]);	
			price += levelPrice[i];
		}
		
		$sum.trigger("sumChange", price);
	});

	function getPrice(num) {
		var levels = [20, 120, 500],
			prices = [59, 3, 2.5, 2],
			levelPrice = [];

		if(num < levels[0]) {
			levelPrice.push(prices[0]);
		}
		else if(num >= levels[0] && num < levels[1]) {
			levelPrice.push(prices[0]);
			levelPrice.push((num - levels[0])*prices[1]);
		}
		else if(num >= levels[1] && num < levels[2]) {
			levelPrice.push(prices[0]);
			levelPrice.push((levels[1] - levels[0])*prices[1]);
			levelPrice.push((num - levels[1])*prices[2]);
		}
		else if(num >= levels[2]) {
			levelPrice.push(prices[0]);
			levelPrice.push((levels[1] - levels[0])*prices[1]);
			levelPrice.push((levels[2] - levels[1])*prices[2]);
			levelPrice.push((num - levels[2])*prices[3]);
		}

		return levelPrice;
	}


});