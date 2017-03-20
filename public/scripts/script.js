


var createTrophy = function (src, title) {
	var omg = new Image();
	img.src = src;
	img.alt = title;
	img.title = title;
	return omg;
};

var images = [];

images.push(createImage(“../img/trophyImages/oneSmallStepTrophy.png”, “one small step”));
images.push(createImage(“../img/trophyImages/tripleThreatTrophy.png”, “triple threat!”));

console.log(images);
