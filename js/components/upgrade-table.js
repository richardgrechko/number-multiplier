Vue.component("upgrade-table", {
	props: ["upgrades"],
	methods: {
		formatNumber: (n, prec, prec1000, lim) => functions.formatNumber(n, prec, prec1000, lim)
	},
	computed:
        {
		totalProduction: () => functions.getMultiplier()
        },
	template: `<upgrade v-for="(u, i) in upgrades" :upgrades="u" :key="i">
<h2>Your total multiplier is {{formatNumber(totalProduction, 2, 2, 303)}}</h2>`
});
