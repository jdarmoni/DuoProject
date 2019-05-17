
export default class Sentence {
    constructor(sentence, translation, x, y, height, width, color){
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
        this.sentence = sentence;
        this.translation = translation;
    }
}
Sentence.prototype.draw = function draw(ctx){
    // if (this.color = nil) {this.color = white}
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height)
    ctx.font = "20px serif";
    // ctx.fillStyle=this.color
    ctx.fillText(this.sentence, this.x + this.width/8, this.y + this.height / 2)
    
    ctx.closePath();
}
