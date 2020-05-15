$(document).ready(function() {

	var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	if (!isMobile) {
	  $('section').mousewheel(function(e, delta) {
		this.scrollLeft -= (delta);
		e.preventDefault();
		});
	}

});

$(document).ready(function() {

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

    	var tween = TweenMax.to("#title", 0.5, {alpha:1});
		var scene = new ScrollMagic.Scene({triggerElement: "#item1", duration: "50%", triggerHook:0.5})
						.setTween(tween)
						.addTo(controller);

		var tween = TweenMax.to("#project-title", 0.5, {alpha:1, innerHTML:"Apple Music<br>Redesign"});
		var scene = new ScrollMagic.Scene({triggerElement: "#item1", duration: "50%", triggerHook:0.5})
						.setTween(tween)
						.addTo(controller);
		var tween = TweenMax.to("#project-type", 0.5, {alpha:1, innerHTML:"UX/UI"});
		var scene = new ScrollMagic.Scene({triggerElement: "#item1", duration: "50%", triggerHook:0.5})
						.setTween(tween)
						.addTo(controller);

	}else{
		var tween = TweenMax.to("#me", 0.5, {alpha:0});
		var scene = new ScrollMagic.Scene({triggerElement: "#item0", duration: "50%"})
						.setTween(tween)
						.addTo(controller);
		
		var tween = TweenMax.to("#item0", 0.5, {alpha:0});
		var scene = new ScrollMagic.Scene({triggerElement: "#item0", duration: "50%"})
						.setTween(tween)
						.addTo(controller);

		var tween = TweenMax.to("#title", 0.5, {alpha:1});
		var scene = new ScrollMagic.Scene({triggerElement: "#item0", duration: "50%", triggerHook:0})
						.setTween(tween)
						.addTo(controller);

		var tween = TweenMax.to("#project-title", 0.5, {alpha:1, innerHTML:"Apple Music<br>Redesign"});
		var scene = new ScrollMagic.Scene({triggerElement: "#item0", duration: "50%", triggerHook:0})
						.setTween(tween)
						.addTo(controller);

		var tween = TweenMax.to("#project-type", 0.5, {alpha:1, innerHTML:"UX/UI"});
		var scene = new ScrollMagic.Scene({triggerElement: "#item0", duration: "50%", triggerHook:0})
						.setTween(tween)
						.addTo(controller);
	}

	
	var tween = TweenMax.to("#project-title", 0.5, {alpha:1, innerHTML:"SafeLand"});
	var scene = new ScrollMagic.Scene({triggerElement: "#item2", duration: "50%", triggerHook:0.5})
						.setTween(tween)
						.addTo(controller);
	var tween = TweenMax.to("#project-type", 0.5, {alpha:1, innerHTML:"UX/UI"});
	var scene = new ScrollMagic.Scene({triggerElement: "#item2", duration: "50%", triggerHook:0.5})
						.setTween(tween)
						.addTo(controller);
	
	var tween = TweenMax.to("#project-title", 0.5, {alpha:1, innerHTML:"Treasure<br>Island"});
	var scene = new ScrollMagic.Scene({triggerElement: "#item3", duration: "50%", triggerHook:0.5})
						.setTween(tween)
						.addTo(controller);
	var tween = TweenMax.to("#project-type", 0.5, {alpha:1, innerHTML:"3D Modelling"});
	var scene = new ScrollMagic.Scene({triggerElement: "#item3", duration: "50%", triggerHook:0.5})
						.setTween(tween)
						.addTo(controller);

	
	var scene = new ScrollMagic.Scene({triggerElement: "#item0", duration: "50%", triggerHook:0.5})
					.on("enter", function () {
						animateElem2.innerHTML = "";
					})
					.addTo(controller);

	var scene = new ScrollMagic.Scene({triggerElement: "#item1", duration: "50%", triggerHook:0.5})
					.on("enter", function () {
						//animateElem2.classList.add('animate__animated', 'animate__fadeIn');
						animateElem2.innerHTML = "01";
					})
					.addTo(controller);

	var scene = new ScrollMagic.Scene({triggerElement: "#item2", duration: "50%", triggerHook:0.5})
					.on("enter", function () {
						//animateElem.innerHTML = "SafeLand";
						animateElem2.innerHTML = "02";
						//animateElem3.innerHTML = "UX/UI";
					})
					.addTo(controller);

	var scene = new ScrollMagic.Scene({triggerElement: "#item3", duration: "50%", triggerHook:0.5})
					.on("enter", function () {
						animateElem2.innerHTML = "03";
						//animateElem.innerHTML = "Low-Poly<br>Treasure Island";
						//animateElem3.innerHTML = "3D Modelling"
					})
					.addTo(controller);


});