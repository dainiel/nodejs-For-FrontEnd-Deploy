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