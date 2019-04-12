export default class Word {
    constructor(word1, word2, x, y, width, height, color, toggle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.word1 = word1;
        this.word2 = word2;
        this.height = height;
        this.color = color;
        this.toggle = toggle;
    }
}
// Word('Weebu', canvas.width - 100, canvas.height-75, 150, 75)

Word.prototype.draw = function draw(ctx) {
    ctx.beginPath();
    ctx.font = '14px serif'

    if (this.toggle) {
        ctx.fillText(this.word1, this.x, this.y, this.width )
    } else {
        ctx.fillText(this.word2, this.x, this.y, this.width)

    }
    ctx.fill();
    
    ctx.moveTo(this.x-10, this.y-30);
    ctx.lineTo(this.x-10, this.y+20);
    ctx.lineTo(this.x+60, this.y+20);
    ctx.lineTo(this.x+60, this.y-30);
    ctx.lineTo(this.x-10, this.y-30);

    ctx.strokeStyle = this.color;
    ctx.stroke();

    ctx.closePath();

}
