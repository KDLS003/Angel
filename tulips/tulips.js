gsap.defaultEase = Linear.easeNone;
const time = 3;
const d = 0.2;
const master = new gsap.timeline({repeat: -1, yoyo: true, paused: true});

gsap.set(".flower, .leftleaf, .rightleaf", { transformOrigin: "center bottom" });

for (let i = 1; i < 5; i++) {
  let tl = new gsap.timeline();
  tl.to("#tulip" + i + " .flower", { rotation: -20, duration: time }, 0);
  tl.to("#tulip" + i + " .leftleaf", { rotation: 5, duration: time }, 0);
  tl.to("#tulip" + i + " .rightleaf", { rotation: 5, duration: time }, 0);
  tl.to(".stemStart" + i, { morphSVG: ".stemEnd" + i, duration: time }, 0);
  master.add(tl, (i - 1) * d);
}

master.play();
