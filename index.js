const anime = require('animejs');

const svgAnimation = anime({
  targets: '.path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});


const colorBG = anime({
  targets: '#bg',
  background:"#000000",
  duration: 1000,
  easing:"linear",
  delay:1000
});

const colorText = anime({
  targets: '.path',
  stroke:"#FFFFFF",
  duration: 1000,
  easing:"linear",
  delay:1000
});
