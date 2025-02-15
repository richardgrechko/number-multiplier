let dt1 = Date.now(), dt2 = Date.now(), dt;
function E(n)
{
	return new Decimal(n)
}
const game = {
	points: E(1),
	softcapRoot: E(1),
	softcapWeaken: E(1),
	pointsAreInfinite: false,
	multiplier: E(1.01),
	gain: E(1),
	upgrades: [
		new Upgrade("A little increase", E(1.2), E(1.1), E(1.01)),
		new Upgrade("Increasing!", E(1.5), E(1.2), E(1.1)),
		new Upgrade("Quickly Growing", E(16), E(4), E(2)),
		new Upgrade("What?", E(1048576), E(4096), E(128)),
	],
	infinities: E(0),
	brokenInfinity: false,
	eternities: E(0),
	realities: E(0),
	gameWon: false,
	settings: {
		tab: "main"
	}
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
