const canvas = document.querySelector("canvas");
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const eraser = document.getElementById("eraser");
const brush = document.getElementById("brush");
const save = document.getElementById("save");

const colorOption = Array.from(document.getElementsByClassName("color-option"));
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = lineWidth.value;

let mode = "brush";
let isPainting = false;

function onMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  if (mode === "brush") {
    if (isPainting) {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
    ctx.moveTo(x, y);
    return;
  }
  if (mode === "erase") {
    if (isPainting) {
      ctx.clearRect(x - ctx.lineWidth / 2, y - ctx.lineWidth / 2, ctx.lineWidth, ctx.lineWidth);
    }
  }
}

function startPainting() {
  isPainting = true;
}

function stopPainting() {
  isPainting = false;
  ctx.beginPath();
}

function changeLineWidth(event) {
  ctx.lineWidth = event.target.value;
}

function changeColor(event) {
  ctx.strokeStyle = event.target.value;
}

function clickChangeColor(event) {
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  color.value = colorValue;
  mode = "brush";
}

function onEraser() {
  mode = "erase";
};

function onBrush() {
  mode = "brush";
};

function onSave() {
  canvas.toBlob((blob) => {

    const a = document.createElement('a');
    document.body.append(a);
    a.download = 'export{timestamp}.png';
    a.href = URL.createObjectURL(blob);
    a.click();
    a.remove();
  });
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting)

lineWidth.addEventListener("change", changeLineWidth);
color.addEventListener("change", changeColor);
colorOption.forEach(color => color.addEventListener("click", clickChangeColor));

eraser.addEventListener("click", onEraser);
brush.addEventListener("click", onBrush);
save.addEventListener("click", onSave);


