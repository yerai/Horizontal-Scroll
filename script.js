

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (!isMobile) {
  $('section').mousewheel(function(e, delta) {
	this.scrollLeft -= (delta);
	e.preventDefault();
	});
}




var isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
// init controller
var controller = new ScrollMagic.Controller({vertical: false});

// build scene
var animateElem = document.getElementById("project-title");
var animateElem1 = document.getElementById("title");
var animateElem2 = document.getElementById("project-number");
var animateElem3 = document.getElementById("project-type");

if (isMobile) {
	var tween = TweenMax.to("#item0", 0.5, {alpha:0});
	var scene = new ScrollMagic.Scene({triggerElement: "#item0", duration: "50%", triggerHook:0})
					.setTween(tween)
					.addTo(controller);

	var timeline = new TimelineMax();
	var tween = TweenMax.to("#title", 0.5, {alpha:1});
	var tween = TweenMax.to("#project-title", 0.5, {alpha:1, innerHTML:"Apple Music<br>Redesign"});
	var tween = TweenMax.to("#project-type", 0.5, {alpha:1, innerHTML:"UX/UI"});
	var scene = new ScrollMagic.Scene({triggerElement: "#item1", duration: "50%", triggerHook:0.5})
					.setTween(timeline)
					.addTo(controller);

}else{
	var timeline = new TimelineMax();
	var tween = TweenMax.to("#me", 0.5, {alpha:0});
	var tween2 = TweenMax.to("#item0", 0.5, {alpha:0});
	timeline.add(tween,0).add(tween2,0);
	var scene = new ScrollMagic.Scene({triggerElement: "#item0", duration: "50%", triggerHook:0.5})
					.setTween(timeline)
					.addTo(controller);


	var numero = "01";
	var timeline = new TimelineMax();
	var tween = TweenMax.to("#title", 0.5, {alpha:1});
	var tween2 = TweenMax.to("#project-title", 0.5, {alpha:1, innerHTML:"Apple Music<br>Redesign"});
	var tween3 = TweenMax.to("#project-type", 0.5, {alpha:1, innerHTML:"UX/UI"});
	var tween4 = TweenMax.to("#project-number", 0.5, {alpha:1, innerHTML:"&nbsp01",immediateRender:true});
	timeline.add(tween,0).add(tween2,0).add(tween3,0).add(tween4,0);
	var scene = new ScrollMagic.Scene({triggerElement: "#item0", duration: "50%", triggerHook:0})
					.setTween(timeline)
					//.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
					.addTo(controller);
}

var timeline = new TimelineMax();
var tween = TweenMax.to("#project-title", 0.5, {alpha:1, innerHTML:"SafeLand"});
var tween2 = TweenMax.to("#project-type", 0.5, {alpha:1, innerHTML:"UX/UI"});
var tween3 = TweenMax.to("#project-number", 0.5, {innerHTML:"&nbsp02",immediateRender:true});
timeline.add(tween,0).add(tween2,0).add(tween3,0);
var scene = new ScrollMagic.Scene({triggerElement: "#item2", duration: "50%", triggerHook:0.5})
					.setTween(timeline)
					.addTo(controller);


var timeline = new TimelineMax();
var tween = TweenMax.to("#project-title", 0.5, {alpha:1, innerHTML:"Treasure<br>Island"});
var tween2 = TweenMax.to("#project-type", 0.5, {alpha:1, innerHTML:"3D Modelling"});
var tween3 = TweenMax.to("#project-number", 0.5, {innerHTML:"&nbsp03",immediateRender:true});
timeline.add(tween,0).add(tween2,0).add(tween3,0);
var scene = new ScrollMagic.Scene({triggerElement: "#item3", duration: "50%", triggerHook:0.5})
					.setTween(timeline)
					.addTo(controller);


