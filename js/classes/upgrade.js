class Upgrade
{
	constructor(name,price,priceIncrease,multiplier)
	{
		this.name = name;
		this.price = price;
		this.priceIncrease = priceIncrease;
		this.multiplier = multiplier;
		this.level = 0;
	}
	getMultiplier()
	{
		return functions.getMultiplier()
	}
	getPrice()
	{
		let price = this.price.mul(this.priceIncrease.pow(this.level));
		let dilation = price.gte(Decimal.pow(2, 1024)) ? Decimal.log(price.div(Decimal.pow(2, 1024)), 1e100) * 0.5 + 1 : 1;
        	return price.pow(dilation);
	}
	buy()
	{
		if(this.getPrice().lt(game.points))
		{
			game.points = game.points.div(this.getPrice());
			this.level++;
			return true;
		}
		return false;
	}
	buyMax()
	{
		while(this.buy());
	}
}
