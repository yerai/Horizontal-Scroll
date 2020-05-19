// Horizontal Scroll
$('#project-list').mousewheel(function(e, delta) {
	this.scrollLeft -= (delta);
});

// Set Featured 
window.onload = function() {
  showFeatured();
};

// Categories
var categories = ["category1","category2","category3","category4"];

// Projects
var all = ["apple-music","safe-land","low-poly"];
var featured = ["apple-music","safe-land","low-poly"];
var ux = ["apple-music","safe-land"];
var interaction = ["climbing-lights"];
var d = ["low-poly"];

// Functions 
function showUX() {
	hideAll();
	for(var i=0; i < ux.length; i++){
		document.getElementById(ux[i]).style.display = "inline-block";
	};
	document.getElementById(categories[1]).classList.add("selected");
};	

function showFeatured() {
	hideAll();
	for(var i=0; i < featured.length; i++){
		document.getElementById(featured[i]).style.display = "inline-block";
	};
	document.getElementById(categories[0]).classList.add("selected");
};

function showInteraction() {
	hideAll();
	for(var i=0; i < interaction.length; i++){
		document.getElementById(interaction[i]).style.display = "inline-block";
	};
	document.getElementById(categories[2]).classList.add("selected");
};	

function showD() {
	hideAll();
	for(var i=0; i < d.length; i++){
		document.getElementById(d[i]).style.display = "inline-block";
	};
	document.getElementById(categories[3]).classList.add("selected");
};	

function hideAll(){
	for(var i=0; i < all.length; i++){
		document.getElementById(all[i]).style.display = "none";
	};

	for(var j=0; j < categories.length; j++){
		document.getElementById(categories[j]).classList.remove("selected");
	};

}