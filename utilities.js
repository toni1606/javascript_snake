function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	snake.draw();
	apple.draw();
	requestAnimationFrame(draw);
}

draw();
window.setInterval(function() {
	snake.doCommand();
	console.log(keys);
}, 1000);
window.addEventListener("keypress", function(e) {

	switch (e.code) {
		case values.LEFT:
			keys.push(values.LEFT);
			
			break;
		case values.UP:
			keys.push(values.UP);
			break;
		case values.RIGHT:
			keys.push(values.RIGHT);
			break;
		case values.DOWN:
			keys.push(values.DOWN);
			break;
		default:
			break;
	}
	snake.doCommand();


	if((apple.x >= snake.x - 5 && apple.x <= snake.x + snake.size - 5) && (apple.y >= snake.y - 5 && apple.y <= snake.y - 5 + snake.size)) {
		apple = null;
		apple = new Apple();
		snake.addBlock();
		score++;
		document.getElementById("score").innerHTML = score;
	}
});
