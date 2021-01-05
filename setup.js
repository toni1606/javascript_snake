const canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

// Variables
const grid = 108;
let keys = [];
let score = 0;
let frame = 0;
let speed = 1;

const values  = {
	LEFT: "KeyA",
	UP: "KeyW",
	RIGHT: "KeyD",
	DOWN: "KeyS"
}
