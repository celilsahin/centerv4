var durdur = false;

window.onresize = function(event){
	centerobj();
	randomh();
	randomw();
	srandom();
}

$(document).ready(function(){
	stouch = new Audio("sound/touch.wav");
	sfail = new Audio("sound/fail.wav");
	sbutton = new Audio("sound/button.wav");
	centerobj(); 
	randomh();
	randomw();
	srandom();
	sborder();   
});

HTMLAudioElement.prototype.stop = function(){
    stouch.pause();
    stouch.currentTime = 0.0;
    sfail.pause();
    sfail.currentTime = 0.0;
    sbutton.pause();
    sbutton.currentTime = 0.0;
}

///////////////// CENTER START

function centerobj(){

	var centotalwidth = $('body').width();
	var centotalheight = $('body').height();

	var cenorjboyut = ($('body').height()/18);

	var cenplayerboyut = (cenorjboyut + ((cenorjboyut/2)*2));

	document.getElementById("obj").style.borderWidth = cenorjboyut + 'px';
	document.getElementById("obj").style.width = cenorjboyut + 'px';
	document.getElementById("obj").style.height = cenorjboyut + 'px';

	document.getElementById("player").style.width = cenplayerboyut + 'px';
	document.getElementById("player").style.height = cenplayerboyut + 'px';

	var cscenter = document.getElementById("obj");
	var cenboyut = ($('.obj').width() + (parseInt($(".obj").css("border-left-width"))*2));

	var leftorta = ((centotalwidth-cenboyut)/2);
	var toporta = (centotalheight-cenboyut)/2;
	document.getElementById("obj").style.left = leftorta + 'px';
	document.getElementById("obj").style.top = toporta + 'px';	
}

///////////////// CENTER END


///////////////// BORDER START

function sborder(){
window.sbor = "";
var sbr = Math.floor(15 + (Math.random() * (30 - 15) ));
document.getElementById('log4').innerHTML = sbr;
window.sbor = sbr; 
return sbor;
}

function animateBorder(){

	if (durdur==false){
    var sborderboyut = parseInt($(".obj").css("border-left-width"));
    var sbelem = document.getElementById("obj").style;
    var sbspeed = 1;
    var sbhiz = 0.01;

    if (sborderboyut > sbor){
        var idsb = setInterval(sbframe, sbspeed);
        function sbframe() {
        if ((sborderboyut == sbor) || (sborderboyut < sbor)){                 
            animateBorder();
            clearInterval(idsb);  
        }else{
        	if (durdur==false){
            sborderboyut = sborderboyut - sbhiz;
            sbelem.borderWidth = sborderboyut + 'px';
        	}
            }
        }        
    }

    else if(sborderboyut < sbor){
        var idsb = setInterval(sbframe, sbspeed);
        function sbframe() {
        if ((sborderboyut == sbor) || (sborderboyut > sbor)){               
            animateBorder();
            clearInterval(idsb);
        }else{
        	if (durdur==false){
            sborderboyut = sborderboyut + sbhiz;
            sbelem.borderWidth = sborderboyut + 'px';
       	 }
            }
        }
    }

    else if(sborderboyut == sbor){
        sborder();                  
        animateBorder();
        clearInterval(idsb);
    }
    }
};

///////////////// BORDER END


///////////////// SIZE START

function srandom(){
window.snhh = "";
var maxboyut = ($('body').width() / 6);
var snh = Math.floor(20 + (20 + (Math.random() * (maxboyut - 20))));
document.getElementById('log3').innerHTML = snh;
window.snhh = snh; 
return snhh;
}

function animateSize(){
	if (durdur==false){
    var stopboyut = $('.obj').width();
    var selem = document.getElementById("obj");
    var sspeed = 1;
    var shiz = 0.02;

    if (stopboyut > snhh){
        var ids = setInterval(sframe, sspeed);
        function sframe() {
        if ((stopboyut == snhh) || (stopboyut < snhh)){
            srandom();                  
            animateSize();
            clearInterval(ids);  
        }else{
        	if (durdur==false){
            stopboyut-=shiz;  
            selem.style.height = stopboyut + 'px';
            selem.style.width = stopboyut + 'px';
      		}
            }
        }        
    }

    else if(stopboyut < snhh){
        var ids = setInterval(sframe, sspeed);
        function sframe() {
        if ((stopboyut == snhh) || (stopboyut > snhh)){
            srandom();                  
            animateSize();
            clearInterval(ids);
        }else{
        	if (durdur==false){
            stopboyut+=shiz;        
            selem.style.height = stopboyut + 'px';
            selem.style.width = stopboyut + 'px';
        	}
            }
        }
    }

    else if(stopboyut == snhh){
        srandom();                  
        animateSize();
        clearInterval(ids);
    }
	}
};

///////////////// SIZE END


///////////////// MOVE START

function randomh(){
window.nhh = "";
var topboyut = $(".obj").height();
var topborder = $(".obj").css("border-left-width");

var h = $('body').height() - (topboyut + parseInt(topborder));
var nh = Math.floor(Math.random() * h);
if ((nh%2)==1){
	nh+=1;
}
document.getElementById('log').innerHTML = nh;
window.nhh = nh; 
return nhh;
}

function randomw(){
window.nww = "";
var topboyut = $(".obj").width()
var topborder = $(".obj").css("border-left-width");
var w = $('body').width() - (topboyut + (parseInt(topborder)*2));
var nw = Math.floor((Math.random() * w) + parseInt(topborder));
if ((nw%2)==1){
	nw+=1;
}
document.getElementById('log2').innerHTML = nw; 
window.nww = nw; 
return nww;
}

function animateDiv(){
	if (durdur==false){
    var oldq = $('.obj').offset();
	var elem = document.getElementById("obj");  
	var speed = 1;
	var hiz = 0.3;
	
        if (oldq.top > nhh && oldq.left > nww){
		var id = setInterval(frame, speed);
		function frame() {
		if ((oldq.top == nhh) || (oldq.top < nhh)){
		animateDiv();
		clearInterval(id);
		}
		else if ((oldq.left == nww) || (oldq.left < nww)){
		animateDiv();
		clearInterval(id);
		}else{
			if (durdur==false){
            oldq.top-=hiz;
            elem.style.top = oldq.top + 'px'; 
			oldq.left-=hiz;
            elem.style.left = oldq.left + 'px';
       		}
        }}
        }
		
		else if ((oldq.top > nhh) && (oldq.left < nww)){
		var id = setInterval(frame, speed);
		function frame() {
		if ((oldq.top == nhh) || (oldq.top < nhh)){
		animateDiv();
		clearInterval(id);
		}
		else if ((oldq.left == nww) || (oldq.left > nww)){
		animateDiv();
		clearInterval(id);
		}else{
			if (durdur==false){
            oldq.top-=hiz;
            elem.style.top = oldq.top + 'px'; 
			oldq.left+=hiz;
            elem.style.left = oldq.left + 'px';
        	}
        }}
        }
		
		else if ((oldq.top < nhh) && (oldq.left < nww)){
		var id = setInterval(frame, speed);
		function frame() {		
		if ((oldq.top == nhh) || (oldq.top > nhh)){
		animateDiv();
		clearInterval(id);
		}
		else if ((oldq.left == nww) || (oldq.left > nww)){
		animateDiv();
		clearInterval(id);
		}else{
			if (durdur==false){
            oldq.top+=hiz;
            elem.style.top = oldq.top + 'px'; 
			oldq.left+=hiz;
            elem.style.left = oldq.left + 'px';
            }
        }}
        }
		
		else if ((oldq.top < nhh) && (oldq.left > nww)){
		var id = setInterval(frame, speed);
		function frame() {
		if ((oldq.top == nhh) || (oldq.top > nhh)){
		animateDiv();
		clearInterval(id);
		}
		else if ((oldq.left == nww) || (oldq.left < nww)){
		animateDiv();
		clearInterval(id);
		}else{
			if (durdur==false){
            oldq.top+=hiz;
            elem.style.top = oldq.top + 'px'; 
			oldq.left-=hiz;
            elem.style.left = oldq.left + 'px';
            }
        }}
        }
		
		else if (oldq.top == nhh){
		randomh();
		animateDiv();
		clearInterval(id);
		}
		
		else if (oldq.left == nww){
		randomw();
		animateDiv();
		clearInterval(id);
		}
	}
};
///////////////// MOVE END


///////////////// TOUCH START

window.addEventListener('load', function(){


	

	var touch = document.getElementsByTagName("BODY")[0];

	var ppplayer = document.getElementById('player');

	var durum = false;

	var phiz = 10;
	var pphiz = 0.1;
	var psspeed = 1;


	function playerek(){
		if (durum==false){
				var idsp = setInterval(psframe, psspeed);
			        function psframe() {

					var ppboyut = $('.player').width();

			        if (durdur==false){
				        var pplayerobj = $(".obj").width(); 
						var pplayerborder = ($(".obj").width()) + ((parseInt($(".obj").css("border-left-width"))*2));

				        if (ppboyut <= pplayerobj)
							{
								console.log("player küçük");
								durdur = true;
								sfail.stop();
								sfail.play();
						}else if (ppboyut >= pplayerborder){
								console.log("player büyük");
								durdur = true;
								sfail.stop();
								sfail.play();
						}else{
							ppboyut-=pphiz;  
				        	ppplayer.style.height = ppboyut + 'px';
				        	ppplayer.style.width = ppboyut + 'px';
				        }
			    	}
				}
			}


	}
	var clicked = false;

    touch.addEventListener('touchstart', function(e){

    if(!clicked) {
  	clicked = true;
    playerek();
	animateDiv();
    animateSize();
    animateBorder();
	}
    if (durdur==false){


		var ppboyut = $('.player').width();
		stouch.stop();
		stouch.play();	

  		durum = true;
        ppboyut += phiz;  
        ppplayer.style.height = ppboyut + 'px';
        ppplayer.style.width = ppboyut + 'px';
    }

    }, false)

}, false)

///////////////// TOUCH END
