(function () {
	let canvas, ctx;

	class block {
		constructor(x, y) {
			this.x = x;
			this.y = y;
			this.size = 25;
		}
	}

	const blocks = [new block(25, 25), new block(50, 25), new block(75, 25), new block(100, 25)];

	function roundRect(x, y, width, height, radius, fill, stroke) {
		if (typeof stroke === "undefined") {
			stroke = true;
		}
		if (typeof radius === "undefined") {
			radius = 5;
		}
		if (typeof radius === "number") {
			radius = { tl: radius, tr: radius, br: radius, bl: radius };
		} else {
			var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
			for (var side in defaultRadius) {
				radius[side] = radius[side] || defaultRadius[side];
			}
		}
		ctx.beginPath();
		ctx.moveTo(x + radius.tl, y);
		ctx.lineTo(x + width - radius.tr, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
		ctx.lineTo(x + width, y + height - radius.br);
		ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
		ctx.lineTo(x + radius.bl, y + height);
		ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
		ctx.lineTo(x, y + radius.tl);
		ctx.quadraticCurveTo(x, y, x + radius.tl, y);
		ctx.closePath();
		if (fill) {
			ctx.fill();
		}
		if (stroke) {
			ctx.stroke();
		}
	}

	function clear(block, ctx) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}

	function render() {
		let i = 0;
		let x = snake.x;
		let y = 25;
		while (i < blocks.length) {
			if (blocks.length != snake.length && i == blocks.length - 1) {
				x += 25;
				blocks.push(new block(x, y));
				break;
			} else {
				roundRect(blocks[i].x, blocks[i].y, blocks[i].size, blocks[i].size, 5, true);
				i++;
				x += 25;
			}
		}

		console.log(blocks);
	}

	function main() {
		canvas = document.getElementById("gameCanvas");
		ctx = canvas.getContext("2d");

		ctx.strokeStyle = "rgb(255, 255, 255)";
		ctx.lineWidth = 2;
		ctx.fillStyle = "black";

		setInterval(function () {
			clear(blocks, ctx);
			snake.length++;
			render();
			for (let i = 0; i < snake.length; i++) {
				blocks[i].x += 25;
			}
		}, 1000);
	}

	document.addEventListener("DOMContentLoaded", main);
})();
