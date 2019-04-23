export default class Obstacles {
    constructor(x, y, height, width, color){
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
    }
}
Obstacles.prototype.draw = function draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    // ctx.fillStyle = this.color; // comment this out if you want remove barriers
    // ctx.fill();
    ctx.closePath();

}
// 