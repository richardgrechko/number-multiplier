Vue.component("upgrade", {
	props: ["upgrade"],
	methods: {
		formatNumber: (n, prec, prec1000, lim) => functions.formatNumber(n, prec, prec1000, lim)
	},
	computed:
        {
            canAfford: function()
            {
                return this.upgrade.getPrice().lt(game.points);
            }
        },
});
