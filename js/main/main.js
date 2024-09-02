var app = new Vue({
    el: "#app",
    data: tmp,
    computed: computed,
    methods: functions,
    created: onCreate
});
function getSaveCode() {
    return btoa(unescape(encodeURIComponent(JSON.stringify(tmp))));
}
function saveGame(){
    let str = getSaveCode();
    localStorage.setItem("NumberMultiplierGameSave", str);
}
function loadGame(importString) {
    let loadVal = function(v, alt) {
        return v !== undefined ? v : alt;
    }

    let item = importString !== undefined ? importString : localStorage.getItem("NumberMultiplierGameSave");
    if(item !== null)
    {
        let obj;
        try
        {
            obj = JSON.parse(decodeURIComponent(escape(atob(item))));
        }
        catch(e)
        {
            alert("Error loading Game: " + e);
            return;
        }
        game.rhoParticles = loadVal(E(obj.rhoParticles), E(0));
        game.thetaEnergy = loadVal(E(obj.thetaEnergy), E(0));
    }
}
function onCreate()
{
    initialGame = getSaveCode();

    loadGame();

    requestAnimationFrame(update);
}
function update()
{
    dt2 = Date.now();
    let dt = (dt2 - dt1) / 1000;
    dt1 = Date.now();

    tmp.number = tmp.number.mul(tmp.multiplier.pow(1/dt));

    requestAnimationFrame(update);
}
