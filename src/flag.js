export default class Flag {
    constructor(word1, word2, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, color, toggle) {
        this.sx = sx;
        this.sy = sy;
        this.sWidth = sWidth;
        this.sHeight = sHeight;
        this.dx = dx;
        this.dy = dy;
        this.dWidth = dWidth;
        this.dHeight = dHeight;
        this.toggle = toggle;
        this.color = color;
        this.word1 = word1;
        this.word2= word2;
    }
}

// Duo.prototype.draw = function draw(ctx) {

// }