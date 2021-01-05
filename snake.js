class Snake {
	constructor() {
		this.length = 4;
		this.x = canvas.width / 2;
		this.y = canvas.height / 2;
		this.blocks = [];
		this.size = 25;

		for(let i = 0; i < this.length; i++) {
			this.blocks.push(new Block(this.x - i * this.size, this.y, 0 - i));
			this.x += this.size;
		}
	}

	addBlock() {
		const bl = new Block(this.blocks[this.blocks.length - 1].x, this.blocks[this.blocks.length - 1].y, this.blocks[this.length - 1].currentCommand - 1);
		this.length++;
		this.blocks.push(bl);
	}

	draw() {
		ctx.fillStyle = "rgb(66, 173, 73)";
		ctx.strokeStyle = "white";
		for(let i = 0; i < this.blocks.length; i++) {
			ctx.fillRect(this.blocks[i].x, this.blocks[i].y, this.blocks[i].size, this.blocks[i].size);
			ctx.stroke();
		}
	}

	doCommand() {
		
		// Update position of blocks
		for (let i = 0; i < this.blocks.length; i++) {
			if (this.blocks[i].currentCommand < 0) {
				this.blocks[i].currentCommand++;
			} else {
				switch (keys[this.blocks[i].currentCommand]) {
					case values.LEFT:
						this.goLeft(i);
						this.blocks[i].currentCommand++;
						break;
					case values.RIGHT:
						this.goRight(i);
						this.blocks[i].currentCommand++;
						break;
					case values.UP:
						this.goUp(i);
						this.blocks[i].currentCommand++;
						break;
					case values.DOWN:
						this.goDown(i);
						this.blocks[i].currentCommand++;
						break;
					default:
						break;
				}

				if(this.blocks[i].currentCommand === keys.length) {
					this.blocks[i].currentCommand;
				}
			}

			// Boundaries
			if (this.blocks[i].x <= -this.size) {
				this.blocks[i].x = canvas.width - 1;
			} else if (this.blocks[i].x > canvas.width) {
				this.blocks[i].x = 1;
			} else if (this.blocks[i].y <= -this.size) {
				this.blocks[i].y = canvas.height - 1;
			} else if (this.blocks[i].y > canvas.height) {
				this.blocks[i].y = 1;
			}
		}
		
		// Update Snake coordinates
		this.x = this.blocks[0].x;
		this.y = this.blocks[0].y;

		// Remove completed commands
		if (this.blocks[this.blocks.length - 1].currentCommand > 0) {
			keys.shift();
			for (let i = 0; i < this.blocks.length; i++) {
				this.blocks[i].currentCommand--;
			}
		}
	}

	goLeft(i) {
		this.blocks[i].x -= this.size;
	}

	goRight(i) {
		this.blocks[i].x += this.size;
	}

	goUp(i) {
		this.blocks[i].y -= this.size;
	}

	goDown(i) {
		this.blocks[i].y += this.size;
	}
}

const snake = new Snake();