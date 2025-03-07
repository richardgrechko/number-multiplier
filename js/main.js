let dt1 = Date.now(), dt2 = Date.now(), dt;
let update = function()
{
	dt1 = Date.now();
	dt = (dt1-dt2)/1000;
	dt2 = Date.now();
	game.points = game.points.mul(game.gain.pow(dt));
	game.multiplier = functions.getMultiplier().mul(1.01).mul(E(1).add(game.infinities)).mul(E(1.1).pow(game.eternities)).mul(E(2).pow(game.realities))
	game.softcapRoot = game.points.log10().div(E(2).log10()).sub(1023).div(game.softcapWeaken);
	if (game.points.gte(Number.MAX_VALUE) && game.softcapRoot.gte(1))
	{
		game.pointsAreInfinite = true;
		game.gain = game.multiplier.pow(E(1).div(game.softcapRoot))
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
	if (!game.brokenInfinity && game.points.gte("1.798e308"))
	{
		game.infinities = game.infinities.add(1)
	}
	game.getInfinities = E(16).pow(game.points.log10().div(E(Number.MAX_VALUE).log10()).sub(1));
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
