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
    // ctx.clearRect(this.x, this.y, this.width, this.height);

    ctx.beginPath();
    // changed
    ctx.rect(this.x, this.y, this.width, this.height)
    ctx.font = '14px serif'
    if (this.toggle) {
        ctx.fillText(this.word1, this.x + this.width/8, this.y + this.height / 2 )
    } else {
        ctx.fillText(this.word2, this.x + this.width/8, this.y + this.height / 2)

    }
    ctx.strokeStyle =this.color;
    ctx.stroke();
    

    ctx.closePath();
}

Word.prototype.clear = function clear(ctx) {
    ctx.clearRect(this.x, this.y, this.width,this.height)
}