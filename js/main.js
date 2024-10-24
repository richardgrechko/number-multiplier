let functions = {
    getSaveCode: function() {
        return btoa(unescape(encodeURIComponent(JSON.stringify(tmp))));
    },
    saveGame: function(){
        let str = getSaveCode();
        localStorage.setItem("NumberMultiplierGameSave", str);
    },
    loadGame: function(importString) {
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
            tmp.number = loadVal(E(obj.number), E(1));
            tmp.multiplier = loadVal(E(obj.multiplier), E(1.01));
        }
    },
    update: function()
    {
        tmp.number = tmp.number.mul(tmp.multiplier.pow(0.016));
        requestAnimationFrame(functions.update());
    },
    formatNumber: function(n, prec=4, prec1000=0, lim=E(10)) {
        n = E(n);
        let e = n;
        if (n.gte(E(10).tetrate(5))) {
            let slog = n.slog();
            e = "10^^" + slog.floor() + ";" + E(10).pow(slog.sub(slog.floor())).toFixed(prec);
        } else if (n.gte(E(10).pow(E(10).pow(lim)))) {
            let log = n.log10();
            e = "10^" + functions.formatNumber(log);
        } else if (n.gte(E(10).pow(lim))) {
            let log = n.log10();
            e = E(10).pow(log.sub(log.floor())).toFixed(prec) + "e" + log.floor();
        } else if (n.gte(1000)) {
            e = n.toFixed(prec1000);
        } else if (n.gte(E(10).pow(-prec))) {
            e = n.toFixed(prec)
        } else if (n.gte(0)) {
            e = 0;
        } else {
            e = "-" + functions.formatNumber(n.negate(), prec, prec1000, lim)
        }
        return e;
    }
};
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
