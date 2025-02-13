let dt, dt1, dt2;
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
