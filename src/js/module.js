
// move down message 1

const vbLogo = '940 1800 125 250';
const vbArena = '750 1200 500 1000';
const vbFocus = '900 1300 300 600';
const vbHero = '750 1800 400 800';
const vbInterface = '950 1900 300 600';
// Possibly use staggering easing curve

const artwork = document.querySelector("[data-artwork]"); console.log(artwork);
const logo = artwork.querySelector("[data-logo]"); console.log(logo);
const cage = artwork.querySelector("[data-cage]"); console.log(cage);
const fighters = artwork.querySelectorAll("[data-fighter]");  console.log(fighters);
const messageBoxes = artwork.querySelectorAll("[data-messageBox]");  console.log(messageBoxes);
const hero = artwork.querySelector("[data-hero]"); console.log(hero);
const hand = artwork.querySelector("[data-hand]"); console.log(hand);
const ui = artwork.querySelectorAll("[data-ui]");  console.log(ui);

const allElems = [logo, cage, messageBoxes, hero];

const dur = 2;

const tl = new TimelineMax({ paused: false });
const tlTimer = new TimelineMax({ repeat: 4 });
const tlFight = new TimelineMax({ repeat: 100, yoyo: true });

// Start values
  // Visibility
TweenMax.set(allElems, { autoAlpha: 0 });
TweenMax.set([logo, artwork], { autoAlpha: 1 });
  // View
TweenMax.set(artwork, { attr: { viewBox: vbLogo } })
  // Logo
TweenMax.set(logo, { scale: 0, rotation: 45, transformOrigin: "center" });
TweenMax.set(messageBoxes[0], { scale: 0.4, y: "-=150", x: 2000, transformOrigin: "center" });
  // Positioning
TweenMax.set(messageBoxes[1], { y: "+=100" });

 // Hero
TweenMax.set(hand, { y: 500, rotation: 15, transformOrigin: "left bottom" }); 
TweenMax.set([ui[0], ui[1]], { autoAlpha: 0 });

tlFight
  .to(fighters[0], 0.1, {x: 10}, 0 )
  .to(fighters[1], 0.1, {x: -10}, 0 );

tlTimer.fromTo(messageBoxes[1], dur, { autoAlpha: 0 }, { autoAlpha: 1 });


tl
.add("logoIn")
.to(logo, dur, { scale: 1, rotation: 0, ease: Power4.easeIn }, "logoIn")
.to(messageBoxes[0], dur, { autoAlpha: 1, x: 750 })

.add("enterTheArena", "=+1")
.to(artwork, dur*2, { attr: { viewBox: vbArena } }, "enterTheArena" )
.to(cage, dur, { autoAlpha: 1 }, "enterTheArena" )
.to(messageBoxes[0], dur, { autoAlpha: 0, x: 0 }, "enterTheArena" )
.add(tlFight, "enterTheArena")
.add(tlTimer, "enterTheArena")

.add("endOfRound", "enterTheArena =+5")
.to(artwork, dur*2.5, { attr: { viewBox: vbFocus } }, "endOfRound" )

.to(messageBoxes[1], 0.1, { fill: "#C53F35" }, "endOfRound =+4" )

.to(fighters[0], dur*3, { x: "-=450" }, "endOfRound =+5.5")
.to(fighters[0], dur, { scale: 1.1, transformOrigin: "center bottom" }, "endOfRound =+5.5")
.to(fighters[0], dur*2, { scale: 1.0, transformOrigin: "center bottom" }, "endOfRound =+7.5")

.to(fighters[1], dur*3, { x: "+=450" }, "endOfRound =+5.5")
.to(fighters[1], dur, { scale: 0.9, transformOrigin: "center bottom" }, "endOfRound =+5.5")
.to(fighters[1], dur*2, { scale: 1.0, transformOrigin: "center bottom" }, "endOfRound =+7.5")

.add("logoMid", "endOfRound =+7")
.to(artwork, dur, { attr: { viewBox: vbLogo } }, "logoMid" )
.fromTo(messageBoxes[0], dur, { autoAlpha: 0, x: 2000 }, { autoAlpha: 1, x: 750 }, "logoMid =+1")

.add("hero")
.to(artwork, dur, { attr: { viewBox: vbHero } }, "hero" )
.to(messageBoxes[0], dur*0.5, { autoAlpha: 0 }, "hero")
.set(hero, { autoAlpha: 1 }, "hero")
.to(hero, dur, { y: "-=300" }, "hero")

.add("ui")
.to(ui[0], 0.1, { autoAlpha: 1 }, "ui")
.to(hand, 1, { y: 0, rotation: 0 }, "ui =+1")
.to(hand, 0.1, { scale: 0.95 }, "ui =+2")
.to(hand, 0.2, { scale: 1 }, "ui =+2.1")
.to(ui[1], 0.3, { autoAlpha: 1 }, "ui =+2.1")
.to(artwork, dur, { attr: { viewBox: vbInterface } }, "ui =+2.1")
.to(hand, 0.5, { y: 100, rotation: 20 }, "ui =+2.3")

.add("tapping")
.to(hand, 1, { y: 0, rotation: 0 })
.to(hand, 0.1, { scale: 0.95 })
.to(hand, 0.2, { scale: 1 })

;


