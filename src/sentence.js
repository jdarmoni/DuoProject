export default class Sentence {
    constructor(sentence, x, y, height, width, color){
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
        this.sentence = sentence;
    }
}
Sentence.prototype.draw = function draw(ctx){
    ctx.beginPath();
    ctx.font = "20px serif";
    ctx.fillText(this.sentence, this.x, this.y, this.width)
    ctx.fill();
    ctx.closePath();
}