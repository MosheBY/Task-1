function drawRec() {
    const inputWidth = document.querySelector(`#in1`);
    const inputHeight = document.querySelector(`#in2`);
    const inputX = document.querySelector(`#in3`);
    const inputY = document.querySelector(`#in4`);
    const myCanvas = document.querySelector("#myCanvas");
    const painter = myCanvas.getContext("2d");
    const h = inputHeight.value;
    const w = inputWidth.value;
    const x = inputX.value;
    const y = inputY.value;
    painter.strokeStyle = "green";
    painter.strokeRect(x, y, w, h);
    painter.fillStyle = "blue";
    painter.fillRect(x, y, w, h)
    if (
		inputWidth.value === '' ||
		inputHeight.value === '' ||
		inputX.value === '' ||
		inputY.value === ''
	) {
		alert('Input All The Values!!');
		return;
	}
  }

function RecArea () {
    const inputWidth = document.querySelector(`#in1`);
    const inputHeight = document.querySelector(`#in2`);
    const mul = inputHeight.value * inputWidth.value;
}




function clearCanvas() {
    const myCanvas = document.querySelector("#myCanvas");
    const painter = myCanvas.getContext("2d");
    painter.clearRect(0, 0, 300, 300);
}

function onWindowLoad() {
    const btn1 = document.querySelector("#btn1");
    btn1.onclick = drawRec;
  
    const btn2 = document.querySelector("#btn2");
    btn2.onclick = clearCanvas;
  }
  
  window.onload = onWindowLoad;