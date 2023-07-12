const canvas = document.querySelector("canvas");
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const colorOption = Array.from(document.getElementsByClassName("color-option"));
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = lineWidth.value;
let isPainting = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = true;
}

function cancelPainting() {
  isPainting = false;
  ctx.beginPath();
}

function changeLineWidth(event) {
  ctx.lineWidth = event.target.value;
}

function changeColor(event) {
  ctx.strokeStyle = event.target.value;
  colorOptions.unshift(event.target.value);
}

function clickChangeColor(event) {
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  color.value = colorValue;
  colorOptions.unshift(colorValue);
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting)

lineWidth.addEventListener("change", changeLineWidth);
color.addEventListener("change", changeColor);
colorOption.forEach(color => color.addEventListener("click", clickChangeColor));