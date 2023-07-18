export class Sun {
  constructor() {
    this.radius = 200;
  }
  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageWidth = stageHeight;

    this.x = this.stageWidth - this.radius - 140;
    this.y = this.radius + 100;
  }

  draw(ctx, t) {
    ctx.fillStyle = '#FFFEC4';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

}