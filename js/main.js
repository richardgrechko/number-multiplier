let dt, dt1, dt2;
function E(n)
{
    return new Decimal(n)
}
const tmp = {
    number: E(1),
    multiplier: E(1.01),
    infinities: E(0),
    brokenInfinity: false
}
let onCreate = function()
{
    initialGame = functions.getSaveCode();

    functions.loadGame();

    requestAnimationFrame(functions.update);
}
var app = new Vue({
    el: "#app",
    data: tmp,
    methods: functions,
    created: onCreate
});
