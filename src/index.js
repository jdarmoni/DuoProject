// console.log('webpack is working!')

import Duo from './Duo.js'
import Obstacles from './Obstacles'
import Word from './word'
import {keyDownHandler, keyUpHandler} from '../vendor/keymaster'
// import Sentence from './sentence.js';
import {allLevels, DuoWords} from './wordCollections'
import handleSubmit from './handle_submit'
// import {level} from './word_guess';
// import Clock from './clock.js';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    var sprite = new Image();
    sprite.src = "https://d7mj4aqfscim2.cloudfront.net/images/owl-sprite20.svg";
    
    // BACKGROUNDS
    let japanBackground = new Image();
    japanBackground.src ="https://i.kinja-img.com/gawker-media/image/upload/s--Pc8LKGVT--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/yksf7nnxgxwtxyyc5dzn.png"
    let franceBackground = new Image();
    franceBackground.src ="https://s3.amazonaws.com/tinycards/image/aa761c41c8668ad735c1e3b134956771";
    let spainBackground = new Image();
    spainBackground.src ="https://s3.amazonaws.com/tinycards/image/8aaa075410df4c562bdd6c42659f02e2";
    let defaultBackground = new Image();
    defaultBackground.src ="https://resize.indiatvnews.com/en/centered/newbucket/715_431/2018/07/unnamed-1-1532053666.jpg";
    // BACKGROUNDS

    let duo = new Duo( 15, 15, 250, 300, 0, canvas.height - 90,  75, 100);
    let platform = new Obstacles(490, canvas.height - 200, 200, 200, "black" );
    let terrace = new Obstacles(0, 200, 50, 200, "color");
    var currentLanguage = null;
    var language = 'demo';
    var level = 1;
    var time = 30;
    let rightPressed = false
    let leftPressed = false;
    let upPressed = false;
    // let downPressed = false;
    let enterPressed = false;
    DuoWords;
    allLevels;
    var DuoObjects = [ platform, terrace ]
    var speed = 5;
    var jump = 5;
    var hit = false;

    window.handleSubmit = handleSubmit;
    function handleSubmit() {
        event.preventDefault();
        const guess = document.myform.wordGuess.value;
        debugger
        
        switch (language) {
            case language === "French":
                case level === 1:
                    if (guess === "Ready to eat" || guess === "ready to eat") {
                        return true
                    }
            case language === "Japanese":
                debugger
                case level === 1:
                    if (guess === "I am a boy" || guess=== "i am a boy") {
                        return true
                    }
            case language === "Spanish":
                case level === 1:
                    if (guess === "the dog, the cat" || guess === "the cat, the dog") {
                        return true
                    }
            default:
                return false;
        }
    }

    if (handleSubmit === true) {
        level += 1;
    }

    function timer(ctx) {
        ctx.beginPath();
        ctx.rect(canvas.width - 100, 100, 50, 50);
        ctx.font = '14px serif'
        ctx.fillText(time.toString(), 50, 50)
        ctx.closePath();


    }        

    sprite.onload = function () {
        ctx.drawImage(sprite, duo.sx, duo.sy, duo.sWidth, duo.sHeight, duo.dx, duo.dy, duo.dWidth, duo.dHeight);
    }
    

    function wordCollisionDetection(object){
        
        if ( ((duo.dx > object.x - duo.dWidth) && (duo.dx < object.x + object.width)) && ( ( (duo.dy + duo.dHeight) >= object.y) && (duo.dy  <= object.y + object.height)) ) {
            if (enterPressed && object.toggle) { // if enter is pressed and the word hasn't been toggled
                object.color='blue';
                object.toggle = false
                enterPressed = false;
                
            } else {
                debugger
                object.color = 'red';
                object.toggle=true;
            }
        }
    }

    function YcollisionDetection(object, pos) {
        if (((duo.dx > object.x - duo.dWidth) && (duo.dx < object.x + object.width)) && (((duo.dy + duo.dHeight) + pos >= object.y) && (duo.dy + pos <= object.y + object.height))) {
            return true
        }
    }
    

    function XcollisionDetection(object, pos) {
        // if a movement would enter him into between x (start) AND the x+width (MAX LENGTH) of object
        if ((duo.dx + pos > object.x - duo.dWidth && (duo.dx + pos < object.x + object.width)) && (((duo.dy + duo.dHeight) >= object.y) && (duo.dy <= object.y + object.height))) {
            // if it would enter him into between y (start) AND y + height (end) range of the object
            return true
        }
    }

    function draw() {
        // 
        ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the entire canvas and redraw relevant stuff!
        
        if(language ===  'Japanese'){
            ctx.drawImage(japanBackground, 400, 0, 1000, 900, 0, 0, canvas.width, canvas.height)
        } else if (language === 'French') {
            ctx.drawImage(franceBackground, 0, 0, 1600, 1800, 0, 0, canvas.width, canvas.height)
        }
        else if (language ==="Spanish") {
            ctx.drawImage(spainBackground, 0, 0, 1600, 1800, 0, 0, canvas.width, canvas.height)
        } else {
            ctx.drawImage(defaultBackground, 0, 0, 700, 400, 0, 0, canvas.width, canvas.height)
        }

        platform.draw(ctx);
        terrace.draw(ctx); 
        timer(ctx);
    
        
        for(var i = 0; i < allLevels[language][level].length; i++){
            
            let word = allLevels[language][level][i];
            
            if (word.toggle === false){
                
                word.y -= 2;
                // ctx.clearRect(word.x, word.y +10, word.width + 10, word.height)
                if (language === 'demo') {
                    
                    currentLanguage = word
                    if (currentLanguage.y < 0) {
                        
                        language = word.word2
                    }
                }
            }
            ctx.clearRect(word.x, word.y, word.width, word.height)
            word.draw(ctx);

            // maybe do this in the word draw?
            // ctx.beginPath();
            // ctx.rect(760, 75, 50, 50)
            // if (word.toggle) {
            //     ctx.fillText(word.word1, word.x + word.width / 8, word.y + word.height / 2)
            // } else {
            //     ctx.fillText(word.word2, word.x + word.width / 8, word.y + word.height / 2)

            // }
            // ctx.closePath();
            // I think this is where I render the word's word1/word2 as part of the sentence 
            // let PretSentence = new Sentence('Pret A Manger', 760, 75, 100, 200, 'green');

        } 
    
        if (rightPressed && (duo.dx + duo.dWidth < canvas.width)) {
            for (var i = 0; i < DuoObjects.length; i++) {
                if (XcollisionDetection(DuoObjects[i], speed) === true) {
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

        if (enterPressed) {
            
            for (var i = 0; i < DuoWords.length; i++) {
                
                if (wordCollisionDetection(DuoWords[i]) === true) {
                    console.log('word alert!')
                }
            }
        }

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
    
    // function clockSprite(){

    // }
    // QUESTION: Why doesn't this add to level and reset time
    function stopWatch (){
        time -= 1;
        console.log(time)
        if (time <= 0 && level >= 3 === false) {
            
            // level += 1; 
            time += 60;
        }
    }

    


    
    function nextLevel (){ //if all hints are toggled, next level
        for (var i = 0; i < allLevels[language][level].length; i++) {
             
            let word = allLevels[language][level][i];
            if (word.toggle === true ) {
                return false
            } else if (i < allLevels[language][level].length-1){
                 
                continue
            } else {
                //  if there are no words with y > 0 (loop through all the words)
                level += 1
                console.log('congrats!')
            }
        } 
    }
    function wordCheck() {
        if (handleSubmit === true) {
            console.log('gj!')
        } 
    }
    setInterval(wordCheck, 1000)
    setInterval(draw, 15)
    setInterval(spriteify, 750) //duo class?
    setInterval(stopWatch, 1000)
    setInterval(nextLevel, 1000)
});