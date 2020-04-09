function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent("mybody");
}

function draw() {
    colorMode(HSL); 
    var mouse = (mouseX/3, mouseY/3);
    background(mouse, 50, 60);
}
