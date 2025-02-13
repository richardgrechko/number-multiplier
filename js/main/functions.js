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
	abbreviate: function(n)
	{
		let abbrevs = 
		[["K","M","B","T","Qd","Qn","Sx","Sp","Oc","No"],
		 ["", "U","D","T","Qd","Qn","Sx","Sp","Oc","No"],
		 ["", "De","Vg","Tg","Qdg","Qng","Sxg","Spg","Ocg","Nog"]],
		a = "";
		n = E(n).floor();
		if (n.gt(10))
		{
			a = abbrevs[1][n.sub(1).mod(10)] + abbrevs[2][n.div(10).sub(1).floor()]
		}
		else
		{
			a = abbrevs[0][n.sub(1)]
		}
		return a
	},
	formatNumber: function(n, prec=4, prec1000=2, lim=E(303))
	{
		n = E(n);
		let e = n;
		if (n.gte(E(10).tetrate(5))) {
			let slog = n.slog();
			e = E(10).pow(slog.sub(slog.floor())).toFixed(prec) + "F" + slog.floor();
		} else if (n.gte(E(10).pow(E(10).pow(lim)))) {
			let log = n.log10();
			e = "10^" + functions.formatNumber(log);
		} else if (n.gte(E(10).pow(lim))) {
			let log = n.log10();
			e = E(10).pow(log.sub(log.floor())).toFixed(prec1000) + "e" + log.floor();
		} else if (n.gte(1000)) {
			e = n.div(E(1000).pow(E(1000).log10().div(3).floor())).toFixed(prec1000) + functions.abbreviate(E(1000).log10().div(3).sub(1).floor());
		} else if (n.gte(E(10).pow(-prec))) {
			e = n.toFixed(prec)
		} else if (n.gte(0)) {
			e = 0;
		} else {
			e = "-" + functions.formatNumber(n.negate(), prec, prec1000, lim)
		}
		return e;
	},
	getMultiplier: () => game.multiplier.mul(game.upgrades[1].multiplier)
};
