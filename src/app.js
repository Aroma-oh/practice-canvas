const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // context === painting brush

canvas.width = 800;
canvas.height = 800;

ctx.rect(50, 50, 100, 200); // 사각형 그리기 
ctx.fill();
ctx.fillRect(200, 50, 100, 200);
ctx.strokeRect(350, 50, 100, 200);

ctx.beginPath(); // 경로 끊기: 이전 경로와 단절
ctx.rect(50, 300, 100, 200);
setTimeout(() => {
  ctx.fillStyle = "green";
  ctx.fill();
}, 1000);

ctx.moveTo(50, 550); // 1. 좌표 이동
ctx.lineTo(150, 550); // 2. 해당 좌표에서 선긋기
ctx.lineTo(150, 750);
ctx.lineTo(50, 750);
ctx.lineTo(50, 550);
ctx.stroke();