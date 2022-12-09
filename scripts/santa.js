var santaDiv = document.createElement('div');
santaDiv.classList.add('santa');
document.body.appendChild(santaDiv);
var santa = $('.santa');
var scale = 1;
function moveSanta(e) {
    var a = santa.position().left - e.pageX;
    var b = santa.position().top - e.pageY;
    var tan = b / a;
     
    var arctan = Math.atan(tan) * 180 / Math.PI;
	if(b > 0 && a > 0 ) {
      	arctan = 360 - arctan; 
    }
    else if(b < 0 && a > 0) {
		arctan = -arctan;
    }
	  
    if((a < 0 && scale == 1) || (a > 0 && scale == -1)) {
		scale = scale * (-1);
    }
	santa.css({"transform": "scaleX(" + -scale + ") rotate(" + arctan + "deg) "});
    
	gsap.to(santa, 2, {
    css: {
      left: e.pageX - 10,
      top: e.pageY - 10
    }
  });
}
$(window).on('mousemove', moveSanta);
