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
    // function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    //     if (typeof stroke == "undefined") {
    //         stroke = true;
    //     }
    //     if (typeof radius === "undefined") {
    //         radius = 5;
    //     }
    //     ctx.beginPath();
    //     ctx.moveTo(x + radius, y);
    //     ctx.lineTo(x + width - radius, y);
    //     ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    //     ctx.lineTo(x + width, y + height - radius);
    //     ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    //     ctx.lineTo(x + radius, y + height);
    //     ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    //     ctx.lineTo(x, y + radius);
    //     ctx.quadraticCurveTo(x, y, x + radius, y);
    //     ctx.closePath();
    //     if (stroke) {
    //         ctx.stroke();
    //     }
    //     if (fill) {
    //         ctx.fill();
    //     }
    // }

    // ctx.lineWidth = 4;
    // ctx.strokeStyle = "#000000";
    // ctx.fillStyle = "#abc";
    // roundRect(ctx, 10, 10, 100, 50, 10, true);
    // ctx.font = "20px Georgia";
    // ctx.textAlign = "center";
    // ctx.textBaseline = "middle";
    // ctx.fillStyle = "#000000";
    // var rectHeight = 50;
    // var rectWidth = 100;
    // var rectX = 10;
    // var rectY = 10;
    // ctx.fillText("Attack!", rectX + (rectWidth / 2), rectY + (rectHeight / 2))

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