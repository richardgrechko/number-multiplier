let dt1 = Date.now(), dt2 = Date.now(), dt;
let E = function(n)
{
	return new Decimal(n)
}
let update = function()
{
	dt1 = Date.now();
	dt = (dt1-dt2)/1000;
	dt2 = Date.now();
	game.points = game.points.mul(game.gain.pow(dt));
	game.multiplier = functions.getMultiplier().mul(1.01).mul(E(2).pow(game.infinities)).mul(E(1024).pow(game.eternities)).mul(E(Number.MAX_VALUE).pow(game.realities))
	game.softcapRoot = game.points.log10().div(E(2).log10()).sub(1024).div(game.softcapWeaken);
	if (game.points.gte(Number.MAX_VALUE))
	{
		game.pointsAreInfinite = true;
		game.gain = game.multiplier.pow(E(1).div(game.points.log10().div(E(2).log10()).sub(1024).div(game.softcapWeaken)))
	}
	else
	{
		game.pointsAreInfinite = false;
		game.gain = game.multiplier
	}
	if (game.points.eq(Decimal.NaN))
	{
		game.points = E(1)
	}
	requestAnimationFrame(update);
}
let onCreate = function()
{
	initialGame = functions.getSaveCode();

	functions.loadGame();

	requestAnimationFrame(update);
}
var app = new Vue({
	el: "#app",
	data: game,
	methods: functions,
	created: onCreate
});
