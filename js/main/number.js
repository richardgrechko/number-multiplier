let tmp = {};
var app = new Vue({
    el: "#app",
    data: tmp,
});
tmp.FPS = E(60);
tmp.number = E(1);
tmp.multiplier = E(2);
setInterval(()=>{
  tmp.number = tmp.number.mul(tmp.multiplier.pow(1/tmp.FPS));
}, 1000/tmp.FPS);
