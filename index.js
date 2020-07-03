const anime = require('animejs');
const saveSVG = require('save-svg-as-png')

const svgAnimation = anime({
  targets: '.path',
  opacity: 0,
  easing: 'easeInOutSine',
  duration: 500,
  delay: function(el, i) { return i * 200 },
  direction: 'alternate',
  loop: true,
  autoplay: false,
});

var seekProgressEl = document.querySelector('.progress');
seekProgressEl.oninput = function() {
  svgAnimation.seek(svgAnimation.duration * (seekProgressEl.value / 100));
};

var i = 1;                  //  set your counter to 1
var ii=15;

function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    console.log(i);   //  your code here
    var num = "";
    if(i<10){
      num = "0";
    }

    // svgAnimation.seek(i);
    if(i<16){
      svgAnimation.seek(svgAnimation.duration * i/18);
    }
    else{
      svgAnimation.seek(svgAnimation.duration * ii/18);
      ii--;
    }

    saveSVG.saveSvgAsPng(document.getElementById("UI"), num+i+".png");
    i++;                    //  increment the counter
    if (i < 31) {           //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another
    }                       //  ..  setTimeout()
  }, 100)
}

myLoop();
