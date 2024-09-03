function E(n) {
  return new ExpantaNum(n);
}
function formatNumber(n, prec=4, prec1000=0, lim=E(10)) {
  n = E(n);
  let e = n;
  if (n.gte(E(10).tetrate(5))) {
    let slog = n.slog();
    e = "10^^" + slog.floor() + ";" + E(10).pow(slog.sub(slog.floor())).toFixed(prec);
  } else if (n.gte(E(10).pow(E(10).pow(lim)))) {
    let log = n.log10();
    e = "10^" + format(log);
  } else if (n.gte(E(10).pow(lim))) {
    e = E(10).pow(log.sub(log.floor())).toFixed(prec) + "e" + log.floor();
  } else if (n.gte(1000)) {
    e = n.toFixed(prec1000);
  } else if (n.gte(E(10).pow(-prec))) {
    e = n.toFixed(prec)
  } else if (n.gte(0)) {
    e = 0;
  } else {
    e = "-" + formatNumber(n.negate(), prec, prec1000, lim)
  }
  return e;
}
