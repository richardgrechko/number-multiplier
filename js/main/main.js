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
            tmp.number = loadVal(E(obj.number), E(0));
            tmp.multiplier = loadVal(E(obj.multiplier), E(0));
        }
    },
    update: function()
    {
        dt2 = Date.now();
        let dt = (dt2 - dt1) / 1000;
        dt1 = Date.now();

        tmp.number = tmp.number.mul(tmp.multiplier.pow(1/dt));

        requestAnimationFrame(update);
    }
};
let onCreate = function()
{
    initialGame = functions.getSaveCode();

    functions.loadGame();

    requestAnimationFrame(functions.update);
}
