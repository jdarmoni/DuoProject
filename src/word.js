// module.exports = class Word {

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

Word.prototype.draw = function draw(ctx) {

    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height)
    ctx.font = '17px Museo Sans Rounded'
    ctx.textBaseline ="middle"
    ctx.textAlign = "center"; 
    
    if (this.toggle) {
        ctx.fillText(this.word1, this.x + this.width/2, this.y + this.height / 2 )
    } else {
        ctx.fillText(this.word2, this.x + this.width/2, this.y + this.height / 2)
    }
    
    ctx.strokeStyle =this.color;
    ctx.stroke();
    ctx.closePath();
}

Word.prototype.clear = function clear(ctx) {
    ctx.clearRect(this.x, this.y, this.width,this.height)
}