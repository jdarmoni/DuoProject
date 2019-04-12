// console.log('webpack is working!')

import Duo from './Duo.js'
import Obstacles from './Obstacles'
import Word from './word'
import {keyDownHandler, keyUpHandler} from '../vendor/keymaster'
import Sentence from './sentence.js';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    var sprite = new Image();
    sprite.src = "https://d7mj4aqfscim2.cloudfront.net/images/owl-sprite20.svg";
    
                                /* objects!*/ 
    //     constructor(x, y, height, width, color){

    let duo = new Duo( 15, 15, 250, 300, 0, canvas.height - 90,  75, 100);
    let platform = new Obstacles(490, canvas.height - 200, 200, 200, "black" );
    let terrace = new Obstacles(0, 200, 50, 200, "color");

    // constructor(word1, word2, x, y, width, height, color, toggle){
    // let dog = new Word('le chien', 'the dog', canvas.width - 100, canvas.height-75, 200, 150, 'red', true);
    // let cat = new Word('el gato', 'the cat' ,0, 150, 200, 150, 'red', true);
    
    let am = new Word('です', 'am', 0, 150, 200, 150, 'red', true);
    let iWord = new Word('私は', 'I', canvas.width - 100, canvas.height - 75, 200, 150, 'red', true);
    let boy = new Word('男の子', 'boy', 550, 400, 200, 150, 'red', true );
    //     constructor(sentence, x, y, height, width, color)
    let sentence = new Sentence("Translate this sentence!", canvas.width-250, 25, 100, 200, 'yellow')
    let IamABoy = new Sentence('私は男の子です', canvas.width-200, 75, 200, 200, 'green'  );
                                /*objects*/ 
    
    //function game(){ this.rightPressed = false} etc.

    let rightPressed = false
    let leftPressed = false;
    let upPressed = false;
    // let downPressed = false;
    let enterPressed = false;

    var DuoWords =[
        am,
        iWord,
        boy
    ]
    var DuoObjects = [
        platform,
        terrace
    ]
    var speed = 5;
    var jump = 5;
    var hit = false;


    sprite.onload = function () {
        ctx.drawImage(sprite, duo.sx, duo.sy, duo.sWidth, duo.sHeight, duo.dx, duo.dy, duo.dWidth, duo.dHeight);
    }

    function wordCollisionDetection(object){
        
        if ( ((duo.dx > object.x - duo.dWidth) && (duo.dx < object.x + object.width)) && ( ( (duo.dy + duo.dHeight) >= object.y) && (duo.dy  <= object.y + object.height)) ) {
            if (enterPressed && object.toggle) {
                object.color='blue';
                object.toggle = false
            } else {
                console.log(`revealing!`)
                object.color = 'red';
                object.toggle=true;
            }
        }
    }
    

    function YcollisionDetection(object, pos) {
        if (((duo.dx > object.x - duo.dWidth) && (duo.dx < object.x + object.width)) && (((duo.dy + duo.dHeight) + pos >= object.y) && (duo.dy + pos <= object.y + object.height))) {
            console.log("Duo's Y:")
            console.log(duo.dy)
            console.log(object.y)
            return true
        }
    }

    function XcollisionDetection(object, pos) {
        // if a movement would enter him into between x (start) AND the x+width (MAX LENGTH) of object
        if ((duo.dx + pos > object.x - duo.dWidth && (duo.dx + pos < object.x + object.width)) && (((duo.dy + duo.dHeight) >= object.y) && (duo.dy <= object.y + object.height))) {
            // if it would enter him into between y (start) AND y + height (end) range of the object

            console.log("Duo's X:")
            return true
        }
    }


    function draw() {
        ctx.clearRect(duo.dx, duo.dy, duo.dWidth, duo.dHeight);
        platform.draw(ctx);
        terrace.draw(ctx);
        iWord.draw(ctx);
        am.draw(ctx);
        boy.draw(ctx);
        IamABoy.draw(ctx)
        sentence.draw(ctx)

        if (rightPressed && (duo.dx + duo.dWidth < canvas.width)) {
            for (var i = 0; i < DuoObjects.length; i++) {
                if (XcollisionDetection(DuoObjects[i], speed) === true) {
                    console.log('right button problem')
                    duo.dx += 0
                    hit = true;
                }
                // for every button press, for each object duo doesn't collide with, dou.dx += speed
            }
            if (hit === false) { duo.dx += speed }
        }
        if (leftPressed && duo.dx > 0) {
            for (var i = 0; i < DuoObjects.length; i++) {
                if (XcollisionDetection(DuoObjects[i], -speed) === true) {
                    console.log('left button problem')
                    duo.dx += 0;
                    hit = true;
                }
            }
            if (hit === false) { duo.dx -= speed }
        }

        if (upPressed && duo.dy > 0) {

            duo.dy -= jump;
        }
        if ((upPressed === false && duo.dy < canvas.height) && (duo.dy + duo.dHeight < canvas.height)) {
            for (var i = 0; i < DuoObjects.length; i++) {
                if (YcollisionDetection(DuoObjects[i], jump) === true) {
                    duo.dy += 0;
                    hit = true;
                }
            }
            if (hit === false) { duo.dy += jump; }
        }
        
        if (enterPressed){
            for (var i = 0; i < DuoWords.length; i++) {
                if (wordCollisionDetection(DuoWords[i])===true) {
                    console.log('word alert!')
                }
            }
        }

        ctx.drawImage(sprite, duo.sx, duo.sy, duo.sWidth, duo.sHeight, duo.dx, duo.dy, duo.dWidth, duo.dHeight);
        hit = false;
    }

    
    // QUESTION: need to put these in separate files
    // keyDownHandler(e);
    // keyUpHandler(e);
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    
    function keyDownHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = true;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = true;
        }
        else if (e.key == "Up" || e.key == "ArrowUp") {
            upPressed = true;
        }
        else if (e.key == "Down" || e.key == "ArrowDown") {
            downPressed = true;
        } 
        else if (e.key == "Enter") {
            enterPressed = true;
        }

    }
    function keyUpHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = false;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = false;
        }
        else if (e.key == "Up" || e.key == "ArrowUp") {
            upPressed = false;
        }
        else if (e.key == "Down" || e.key == "ArrowDown") {
            downPressed = false;
        }
        // QUESTION: why doesn't it return to false
        else if (e.key == "Enter") {
            enterPressed = false;
            debugger
        }
    }

    function spriteify() {
        if (duo.sx === 15) {
            duo.sx = 340;
        } else if (duo.sx === 340) {
            duo.sx = 15;
        }
    }

    setInterval(draw, 15)
    setInterval(spriteify, 750) //duo class?

});