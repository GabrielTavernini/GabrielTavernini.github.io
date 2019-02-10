let water = 150;
let min = false;
let max = false;

let alarmCount = 0;
let alarm = false;
function setup() {
	let canvas = createCanvas(600, 400);
	canvas.parent('canvascontainer');	
}

function draw() {
	background(61);

	stroke(0);

	if(keyIsDown(83) && water > 1) {
		fill(208, 225, 243);
		rect(width/2 + 50 + 170, height/2 + 140, 15, 60);
		water--;
	} else {
		fill(255);
		rect(width/2 + 50 + 170, height/2 + 140, 15, 60);
	}

	fill(255);
	rect(width/2 + 50, height/2, 200, 150, 10);

	fill(208, 225, 243);
	rect(width/2 + 50, height/2 + 150 - water, 200, water, 10);

	if(water > 125) {
		max = true;
		fill(0, 255, 0);
	} else {
		max = false;
		fill(255, 0, 0);
	}

	if(alarm)
		fill(0, 255, 0);

	rect(width/2 + 40, height/2 + 20, 20, 10);

	if(water > 25) {
		min = true;
		fill(0, 255, 0);
	} else {
		min = false;
		fill(255, 0, 0);
	}

	if(alarm)
		fill(255, 0, 0);

	rect(width/2 + 40, height/2 + 120, 20, 10);


	fill(20, 20, 20);
	rect(100, 220, 100, 100);

	if((!min && max) || keyIsDown(65)) {
		alarm = true;
		alarmCount++;
		if(alarmCount > 15) {
			fill(255, 0, 0, 50);
			if(alarmCount > 30)
				alarmCount = 0;
		} else
			fill(255, 0, 0);
	} else {
		fill(255, 0, 0, 50);
		alarm = false;
	}
	
	rect(80, 65, 30, 50, 10);

	if(!max) {
		water+= 0.5;
		fill(208, 225, 243);
	} else {
		fill(255);
	}
	

	rect(200, 50, 140, 70);
	rect(340, 85, 60, 10);
	rect(240, 0, 10, 50);
	rect(400, 85, 10, height/2-85);
	
	noStroke();
	rect(402.5, height/2 + 1, 5, 150 - water - 1);

	stroke(255);
	line(width/2 + 40, height/2 + 25, 200, 250);
	line(width/2 + 40, height/2 + 125, 200, 280);
	line(250, 115, 170, 220);
	line(100, 115, 130, 220);

	fill(0);
	textSize(18);
	let s = !max ? "Accesa" : "Spenta";
	text("Pompa " + s, 210, 90);

	fill(220);
	let a = alarm ? "Accesa" : "Spenta";
	text("Allarme " + a, 50, 50);

	let d = keyIsDown(83) ? "Aperto" : "Chiuso";;
	text("Scarico " + d, width/2 + 90, height/2 + 180);

	fill(255);
	text("Circuito", 120, height/2 + 75);
}

