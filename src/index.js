
import Duo from './Duo.js'
import Obstacles from './Obstacles'
import Word from './word'
import {keyDownHandler, keyUpHandler} from '../vendor/keymaster'
// import Sentence from './sentence.js';
import {allLevels} from './wordCollections'
import handleSubmit from './handle_submit'
// import {level} from './word_guess';
// import Clock from './clock.js';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    // DUOS
    var sprite = new Image();
    sprite.src = "https://d7mj4aqfscim2.cloudfront.net/images/owl-sprite20.svg";
    var correctSprite = new Image();
    correctSprite.src = sprite.src
    var incorrectSprite = new Image();
    incorrectSprite.src = sprite.src;
    // DUOS
    
    var duoBlock = new Image();
    duoBlock.src = "https://www.zco.com/blog/images/duolingo-language-learning-app-1.jpg"

    // BACKGROUNDS
    let japanBackground = new Image();
    japanBackground.src ="https://i.kinja-img.com/gawker-media/image/upload/s--Pc8LKGVT--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/yksf7nnxgxwtxyyc5dzn.png"
    let franceBackground = new Image();
    franceBackground.src ="https://s3.amazonaws.com/tinycards/image/aa761c41c8668ad735c1e3b134956771";
    let spainBackground = new Image();
    spainBackground.src ="https://s3.amazonaws.com/tinycards/image/8aaa075410df4c562bdd6c42659f02e2";
    let defaultBackground = new Image();
    defaultBackground.src ="https://www.desktopbackground.org/p/2015/07/14/979104_iphone-wallpapers-duolingo-globe-download_1080x1920_h.png";
    // BACKGROUNDS

    let duo = new Duo( 15, 15, 250, 300, 0, canvas.height - 90,  75, 100);
    let correct = new Duo (1220, 15, 250, 300, canvas.width - 100, 150, 75, 100 )
    let incorrect = new Duo(1500, 15, 250, 300, canvas.width - 100, 150, 75, 100)
    // ctx.drawImage(sprite, correct.sx, correct.sy, correct.sWidth, correct.sHeight, correct.dx, correct.dy, correct.dWidth, correct.dHeight);
    //  (sprite, duo.sx, duo.sy, duo.sWidth, duo.sHeight, duo.dx, duo.dy, duo.dWidth, duo.dHeight);
    
    // handleSubmit success Animation 
    let delay = undefined
    let goodAnswer;
    let badAnswer;
    // handleSubmit success Animation 


    let platform = new Obstacles(490, canvas.height - 200, 200, 200 );
    let terrace = new Obstacles(0, 200, 50, 200, "color");
    var currentLanguage = null;
    var language = 'demo';
    var level = 1;
    var time = 30;
    var animationTime = 0;
    let rightPressed = false
    let leftPressed = false;
    let upPressed = false;
    // let downPressed = false;
    let enterPressed = false;
    allLevels;
    let DuoWords = [
        allLevels[language][level]
    ];
    var DuoObjects = [ platform, terrace ]
    var speed = 5;
    var jump = 5;
    var hit = false;

    window.handleSubmit = handleSubmit;
    
    function handleSubmit() {
        // event.preventDefault();
        debugger
        const guess = document.getElementById('translateSubmit').value;
        
        if (language !== 'demo') {
            DuoWords = allLevels[language][level]
            if (guess.toLowerCase() === DuoWords[DuoWords.length - 1].translation.toLowerCase()) {
                delay = 3;
                goodAnswer = setInterval(goodJob, 15);              
            } else {
                delay = 3;
                badAnswer = setInterval(badJob, 15);
            }
        }
        debugger
        document.getElementById('translateSubmit').value = ""
        debugger
    }

      

    sprite.onload = function () {
        ctx.drawImage(sprite, duo.sx, duo.sy, duo.sWidth, duo.sHeight, duo.dx, duo.dy, duo.dWidth, duo.dHeight);
    }
    
    function goodJob(){
        ctx.drawImage(correctSprite, correct.sx, correct.sy, correct.sWidth, correct.sHeight, correct.dx, correct.dy, correct.dWidth, correct.dHeight);
        correct.dx -= 1;

    }
    function badJob(){
        ctx.drawImage(incorrectSprite, incorrect.sx, incorrect.sy, incorrect.sWidth, incorrect.sHeight, incorrect.dx, incorrect.dy, incorrect.dWidth, incorrect.dHeight);
        incorrect.dx -=1;

    }

    function wordCollisionDetection(object){
        console.log(object)
        
        if ( ((duo.dx > object.x - duo.dWidth) && (duo.dx < object.x + object.width)) && ( ( (duo.dy + duo.dHeight) >= object.y) && (duo.dy  <= object.y + object.height)) ) {
            if (enterPressed && object.toggle) { // if enter is pressed and the word hasn't been toggled
                if (object.sentence === undefined) {
                    object.color='blue'; 
                    object.toggle = false
                    enterPressed = false;
                }
            } else {
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
        // mainConsole
        ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the entire canvas and redraw relevant stuff!
        
        if(language ===  'Japanese'){
            ctx.drawImage(japanBackground, 400, 0, 1000, 900, 0, 0, canvas.width, canvas.height)
        } else if (language === 'French') {
            ctx.drawImage(franceBackground, 0, 0, 1600, 1800, 0, 0, canvas.width, canvas.height)
        }
        else if (language ==="Spanish") {
            ctx.drawImage(spainBackground, 0, 0, 1600, 1800, 0, 0, canvas.width, canvas.height)
        } else {
            ctx.drawImage(defaultBackground, 0, 600, 1000, 600, 0, 0, canvas.width, canvas.height)
        }

        platform.draw(ctx);
        // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

        ctx.drawImage(duoBlock, 425, 150, 350, 350, 490, canvas.height - 200, 200, 200) 
        terrace.draw(ctx); 
        timer(ctx);
    
        // for languages
        for(var i = 0; i < allLevels[language][level].length; i++){
            let word = allLevels[language][level][i];
            
            if (word.toggle === false){
                word.y -= 2;
                if (language === 'demo') {
                    
                    currentLanguage = word
                    if (currentLanguage.y < 0) {
                        language = word.word2
                    }
                }
            }
            ctx.clearRect(word.x, word.y, word.width, word.height)
            word.draw(ctx);
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

        // COLLISION
        if (enterPressed) {
            for (var i = 0; i < DuoWords.length; i++) {
                if (wordCollisionDetection(DuoWords[i]) === true) {
                    
                }
            }
            DuoWords = allLevels[language][level]            
        }
        // part of handle submit success animation
        if (delay <= 0) {
            
            clearInterval(goodAnswer)
            clearInterval(badAnswer)
            delay = undefined;
            if (correct.dx < canvas.width - 100) {
                // the correct dx animation requires his dx to move - if it's moved, you know it was a correct answer, i.e., handleSubmit === true. 
                level += 1;
            }
            correct.dx = canvas.width - 100;
            incorrect.dx = canvas.width - 100;
        }
        // part of handle submit success animation      

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
        else if (e.keyCode == 16) {
            enterPressed = true;
        }
        else if (e.keyCode == 8) {
            const log = document.getElementById('translateSubmit');
            if (log.value.length > 0) {
                log.value = log.value.slice(0, log.value.length - 1)
            }
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
        else if (e.keyCode === 16) {
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
    
    function stopWatch (){
        time -= 1;
        if (time <= 0 && level >= 3 === false) {    
            // level += 1; 
            time += 120;
        }
        if (delay !== undefined) {
            
            delay -= 1;
        }
    }

    function timer(ctx) {
        ctx.beginPath();
        ctx.rect(canvas.width - 100, 100, 50, 50);
        ctx.font = '14px serif'
        ctx.fillText(time.toString(), 50, 50)
        ctx.closePath();
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
            }
        } 
    }

    function logKey(e) {
        const log = document.getElementById('translateSubmit');
        let letter = e.code.slice(e.code.length - 1);
        debugger
        if (e.code ==="Space") {
            letter = " "
        } else if (e.keyCode === 13) {
            letter ="";
            debugger
            handleSubmit();
        }
        log.value += letter.toLowerCase()
    }
    
    setInterval(draw, 15)
    setInterval(spriteify, 750) //duo class?
    setInterval(stopWatch, 1000)
    setInterval(nextLevel, 1000)
    document.addEventListener('keypress', logKey);
});