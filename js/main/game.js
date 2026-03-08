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
		new Upgrade("1", E(1.2), E(1.05), E(1.01)),
		new Upgrade("2", E(1.5), E(1.5), E(1.1)),
		new Upgrade("3", E(16), E(16), E(2)),
		new Upgrade("why does this exist", E(1048576), E(65536), E(128)),
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
