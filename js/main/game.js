let E = function(n)
{
	return new Decimal(n)
}
const game = {
	points: E(1),
	softcapRoot: E(1),
	softcapWeaken: E(1),
	getInfinities: E(0),
	pointsAreInfinite: false,
	multiplier: E(1.01),
	gain: E(1),
	upgrades: [
		new Upgrade("A Little Increase", E(1.2), E(1.05), E(1.01)),
		new Upgrade("Increasing", E(1.5), E(1.5), E(1.1)),
		new Upgrade("Quickly Growing", E(16), E(16), E(2)),
		new Upgrade("Skyrocketing", E(1048576), E(65536), E(128)),
	],
	infinities: E(0),
	brokenInfinity: false,
	autoInfinity: false,
	eternities: E(0),
	realities: E(0),
	gameWon: false,
	settings: {
		tab: "main"
	}
}
