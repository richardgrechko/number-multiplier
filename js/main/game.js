let E = function(n)
{
	return new Decimal(n)
}
const game = {
	points: E(1),
	softcapRoot: E(1),
	softcapWeaken: E(1),
	pointsAreInfinite: false,
	multiplier: E(1.01),
	gain: E(1),
	upgrades: [
		new Upgrade("A little increase", E(1.2), E(1.1), E(1.01)),
		new Upgrade("Increasing!", E(1.5), E(1.2), E(1.1)),
		new Upgrade("Quickly Growing", E(16), E(4), E(2)),
		new Upgrade("What?", E(1048576), E(4096), E(128)),
	],
	infinities: E(0),
	brokenInfinity: false,
	eternities: E(0),
	realities: E(0),
	gameWon: false,
	settings: {
		tab: "main"
	}
}
