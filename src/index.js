import Duo from './Duo.js'
import Obstacles from './Obstacles'
import Word from './word'
import {allLevels} from './wordCollections'
import {backgrounds} from './backgrounds.js'
import {game} from './game.js'
import {handleSubmit} from './handle_submit'
const Modal = require('./modal.js');
import { keyDownHandler, keyUpHandler, logKey} from './keys'
import { wordCollisionDetection, YcollisionDetection, XcollisionDetection} from './collision'
import {makeSentence} from './makeSentence'
import {spriteify, stopWatch} from './msc'
import {draw} from './draw'

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
           
    game.sprite.onload = function () {
        ctx.drawImage(game.sprite, game.duo.sx, game.duo.sy, game.duo.sWidth, game.duo.sHeight, game.duo.dx, game.duo.dy, game.duo.dWidth, game.duo.dHeight);
    }
    
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener('keypress', logKey);

    setInterval( ()=>{
        draw(canvas, ctx)
    }, 15)
    setInterval(spriteify, 750) 
    setInterval(stopWatch, 1000)

});