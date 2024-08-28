function turnRight() {
	repeat(3) {
		turnLeft();
	}
}

function fillPotHole() {
	move();
	turnRight();
	move();
	putBeeper();
	turnLeft();
	turnLeft();
	move();
	turnRight();
	move();
}

function main() {
	fillPotHole();
	move();
}