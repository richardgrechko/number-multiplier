let dt1 = Date.now(), dt2 = Date.now();
function E(n)
{
	return new Decimal(n)
}
const game = {
	points: E(1),
	multiplier: E(1.01),
	gain: E(1),
	upgrades: [
		new Upgrade("A little increase", E(1.1), E(1.02), E(1.01)),
		new Upgrade("Increasing!", E(1.5), E(1.2), E(1.1)),
		new Upgrade("Quickly Growing", E(16), E(4), E(2)),
		new Upgrade("What?", E(1048576), E(4096), E(128)),
	],
	infinities: E(0),
	brokenInfinity: false,
	gameWon: false,
}
let update = function()
{
	dt1 = Date.now();
	let dt = (dt1-dt2)/1000;
	dt2 = Date.now();
	game.points = game.points.mul(game.gain.pow(dt));
	game.multiplier = functions.getMultiplier().mul(E(2).pow(game.infinities))
	if (game.points.gte(Number.MAX_VALUE))
	{
		game.gain = game.multiplier.pow(E(1).div(game.points.log10().div(E(2).log10()).sub(1024)))
	}
	else
	{
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
