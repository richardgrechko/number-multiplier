let dt = Date.now(), dt1 = Date.now(), dt2 = Date.now();
function E(n)
{
	return new Decimal(n)
}
const game = {
	points: E(1),
	multiplier: E(1.01),
	gain: E(0),
	infinities: E(0),
	brokenInfinity: false,
}
let update = function()
{
	dt1 = Date.now();
	dt = dt1-dt2;
	dt2 = Date.now();
	game.points = game.points.mul(game.gain.pow(dt));
	if (game.points.gte(Number.MAX_VALUE))
	{
		game.gain = game.multiplier.pow(E(1).div(game.points.log10().div(E(2).log10()).sub(1024)))
	}
	else
	{
		game.gain = game.multiplier
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
