class Apple {
	constructor() {
		this.x = Math.round(Math.random() * (1150 - 0 + 1) + 0);
		this.y = Math.round(Math.random() * (850 - 0 + 1) + 0);
		this.size = 12;
	}

	draw() {
		ctx.fillStyle = "red";
		ctx.fillRect(this.x, this.y, this.size, this.size);
	}
}

let apple = new Apple();
