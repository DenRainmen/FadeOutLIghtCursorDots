let canvas = document.getElementById("canvas"),
	ctx = canvas.getContext("2d"),
	painting = false,
	lastX = 0,
	lastY = 0;

canvas.width = canvas.height = 2000;

canvas.onmousedown = function (e) {
	if (!painting) {
		painting = true;
	} else {
		painting = false;
	}

	lastX = e.pageX - this.offsetLeft;
	lastY = e.pageY - this.offsetTop;
};

canvas.onmousemove = function (e) {
	if (painting) {
		mouseX = e.pageX - this.offsetLeft;
		mouseY = e.pageY - this.offsetTop;

		/* ctx.strokeStyle = "rgba(255,255,255,1)"; */
		ctx.fillStyle = "orange";
		ctx.shadowColor = "gold";
		ctx.shadowBlur = 20;
		ctx.beginPath();
		ctx.moveTo(lastX, lastY);
		/* ctx.lineTo(mouseX, mouseY); */
		ctx.arc(mouseX, mouseY, 7, 0, 2 * Math.PI);
		/* ctx.stroke(); */
		ctx.fill();

		lastX = mouseX;
		lastY = mouseY;
	}
};

function fadeOut() {
	ctx.shadowColor = "snow";
	let r = 0.3 + Math.random() * 0.1;
	ctx.fillStyle = "rgba(255,255,255," + r + ")";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	setTimeout(fadeOut, 300);
}

fadeOut();
