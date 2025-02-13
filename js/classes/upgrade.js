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
		let base = this.multiplier.pow(this.level).mul(tmp.multiplier).mul(E(2).pow(tmp.infinities));
		let power = base;
	}
}
