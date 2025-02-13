let dt = Date.now(), dt1 = Date.now(), dt2 = Date.now();
function E(n)
{
	return new Decimal(n)
}
const tmp = {
	points: E(1),
	multiplier: E(1.01),
	infinities: E(0),
	brokenInfinity: false,
	autoInfinity: 1,
}
let update = function()
{
	dt1 = Date.now();
	dt = dt1-dt2;
	dt2 = Date.now();
	tmp.number = tmp.number.multiply(tmp.multiplier.pow(dt));
	update()
}
let onCreate = function()
{
	initialGame = functions.getSaveCode();

	functions.loadGame();

	update();
}
var app = new Vue({
	el: "#app",
	data: tmp,
	methods: functions,
	created: onCreate
});
