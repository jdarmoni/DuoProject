// console.log('webpack is working!')

import Duo from './Duo.js'
import Obstacles from './Obstacles'
import Word from './word'
import {keyDownHandler, keyUpHandler} from '../vendor/keymaster'
import Sentence from './sentence.js';
import {allLevels, DuoWords} from './wordCollections'

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    var sprite = new Image();
    sprite.src = "https://d7mj4aqfscim2.cloudfront.net/images/owl-sprite20.svg";
    let backgroundSprite = new Image();
    backgroundSprite.src ="https://thumbs.dreamstime.com/z/vector-pixel-art-illustration-sprite-stone-dirt-grass-texture-night-time-stars-black-background-77243911.jpg"
                                /* objects!*/ 

    let duo = new Duo( 15, 15, 250, 300, 0, canvas.height - 90,  75, 100);
    let platform = new Obstacles(490, canvas.height - 200, 200, 200, "black" );
    let terrace = new Obstacles(0, 200, 50, 200, "color");

    // **       WORDS
    // let am = new Word('です', 'am', 0, 150, 200, 150, 'red', true);
    // let iWord = new Word('私は', 'I', canvas.width - 100, canvas.height - 75, 200, 150, 'red', true);
    // let boy = new Word('男の子', 'boy', 550, 400, 200, 150, 'red', true );
    // let sentence = new Sentence("Translate this sentence!", canvas.width-250, 25, 100, 200, 'yellow')
    // let IamABoy = new Sentence('私は 男の子 です', canvas.width-200, 75, 200, 200, 'green'  );

    
    var level = 2;
    var time = 30;
    let rightPressed = false
    let leftPressed = false;
    let upPressed = false;
    // let downPressed = false;
    let enterPressed = false;
    DuoWords;
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


        for(var i = 0; i < allLevels[level].length; i++){
            // debugger
            let word= allLevels[level][i];
            ctx.clearRect(word.x, word.y, word.width, word.height)
            word.draw(ctx);
            debugger
            // allLevels[level][i].clear(ctx); //<-- if I debug, 'allLevels' is not defined; but if I remove this line, everything works wonderfully
        } 
    
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
            
        }
    }

    function spriteify() {
        if (duo.sx === 15) {
            duo.sx = 340;
        } else if (duo.sx === 340) {
            duo.sx = 15;
        }
    }
    // QUESTION: Why doesn't this add to level and reset time
    // function timer (){
    //     time -= 1;
    //     // debugger
    //     console.log(time)
    //     // debugger
    //     if (time <= 0) {
    //         debugger
    //         level += 1; 
    //         time += 60;
    //     }
    // }

    setInterval(draw, 15)
    setInterval(spriteify, 750) //duo class?
    // setInterval(timer, 500)
});