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
	template: `<button :disabled="!canAfford" @click="upgrade.buy()>
<div>{{upgrade.name}}</div>
<div>Lvl {{upgrade.level}}</div>
<div>Currently ×{{formatNumber(upgrade.getMultiplier(), 4, 2, 303)}}</div>
<div>Price: {{formatNumber(upgrade.getPrice(), 4, 2, 303)}}</div>
</button>`
});
