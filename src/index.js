console.log('webpack is working!')
import Duo from './Duo.js'
import Obstacles from './platforms'
import {keyDownHandler, keyUpHandler} from '../vendor/keymaster'

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    var sprite = new Image();
    sprite.src = "https://d7mj4aqfscim2.cloudfront.net/images/owl-sprite20.svg";
    let duo = new Duo( 15, 15, 250, 300, 0, canvas.height - 90,  75, 100)
    let platform = new Obstacles(490, canvas.height - 200, 200, 200, "black" )
    let terrace = new Obstacles(0, 200, 50, 200, "color")
    let rightPressed = false
    let leftPressed = false;
    let upPressed = false;
    let downPressed = false;
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

        ctx.drawImage(sprite, duo.sx, duo.sy, duo.sWidth, duo.sHeight, duo.dx, duo.dy, duo.dWidth, duo.dHeight);
        hit = false;
    }

    
    function spriteify() {
        // own class?
            if (duo.sx === 15) {
                duo.sx = 340;
            } else if (duo.sx === 340) {
                duo.sx = 15;
            }
        }

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    // QUESTION: need to put these in separate files
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
    }
    setInterval(draw, 15)
    setInterval(spriteify, 750) //duo class?

});