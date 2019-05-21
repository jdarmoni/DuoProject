
import Duo from './Duo.js'
import Obstacles from './Obstacles'
import Word from './word'
import {keyDownHandler, keyUpHandler} from '../vendor/keymaster'
import {allLevels} from './wordCollections'

const Modal = require('./modal.js');
const backgrounds = require('./backgrounds.js')

// const handleSubmit = require('./handle_submit.js')
// let language = require('./language.js')

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    // DUOS
    let sprite = new Image();
    sprite.src = "./assets/images/owl-sprite20.svg";
    let correctSprite = new Image();
    correctSprite.src = sprite.src
    let incorrectSprite = new Image();
    incorrectSprite.src = sprite.src;
       
    
    let drawDuo = ()=>{
        return ctx.drawImage(sprite, duo.sx, duo.sy, duo.sWidth, duo.sHeight, duo.dx, duo.dy, duo.dWidth, duo.dHeight);
    }

    let duoBlock = new Image();
    duoBlock.src = "./assets/images/duoBlock.jpg"
    let drawBlock = ()=>{
        return ctx.drawImage(duoBlock, 425, 150, 350, 350, 490, canvas.height - 200, 200, 200) 
    }



    let duo = new Duo( 15, 15, 250, 300, canvas.width/2, 15,  75, 100);
    let correct = false;
    let incorrect = new Duo(1500, 15, 250, 300, canvas.width - 100, 250, 75, 100)
    // ctx.drawImage(sprite, correct.sx, correct.sy, correct.sWidth, correct.sHeight, correct.dx, correct.dy, correct.dWidth, correct.dHeight);
    //  (sprite, duo.sx, duo.sy, duo.sWidth, duo.sHeight, duo.dx, duo.dy, duo.dWidth, duo.dHeight);
    
    // handleSubmit success Animation 
    let delay = undefined
    let goodAnswer;
    let badAnswer;
    // handleSubmit success Animation 

    let platform = new Obstacles(490, canvas.height - 200, 200, 200 );
    let terrace = new Obstacles(0, 200, 50, 200, "color");
    let langResetSwitch = false;
    let currentLanguage = null;
    let language = 'demo';
    let level = 1;
    let time = 30;
    let animationTime = 0;
    let rightPressed = false
    let leftPressed = false;
    let upPressed = false;
    // let downPressed = false;
    let enterPressed = false;
    allLevels;
    let DuoWords = [
        allLevels[language][level]
    ];
    let DuoObjects = [ platform, terrace ]
    let speed = 5;
    let jump = 5;
    let hit = false;

    window.handleSubmit = handleSubmit;
    

    function handleSubmit() {
        
        event.preventDefault();
        const guess = document.getElementById('translateSubmit').value;
        let hints =0;
        if (language !== 'demo') {
            DuoWords = allLevels[language][level];
            let translation = DuoWords[DuoWords.length - 1].translation;
            
            if (guess.toLowerCase() === translation.toLowerCase()) {
                delay = 3;
                $(document.body).css({ backgroundColor: '#BFF199' })  
                correct = true           
                // document.getElementById('crop').style = "display: block";
            } else {
                delay = 3;
                $(document.body).css({ backgroundColor: '#FF9797' })
                // logic for giving a hint
                let correctGuess = translation.split(' ');
                let badGuess = guess.split(' ');
                let closeGuess = "";
                for (let i = 0; i < correctGuess.length; i++) {
                    if (badGuess.includes(correctGuess[i].toLowerCase())) {
                        closeGuess += correctGuess[i] + ' ';
                    } else {
                        closeGuess += "_ ";
                        hints += 1;
                    }
                }
                document.getElementById('hint').style="display: block";
                if (hints <= 1) { document.getElementById('hint').innerHTML = "<p class='close-hint'>Close!!</p>" + '<span class="closeGuess">' + closeGuess + '</span>' + '<br></br>';} else {
                    document.getElementById('hint').innerHTML = "<p class='close-hint'>Hint:</p>" + closeGuess + '<br></br>';
                }
                debugger
            }
        }
        document.getElementById('translateSubmit').value = ""
    } 

    sprite.onload = function () {
        ctx.drawImage(sprite, duo.sx, duo.sy, duo.sWidth, duo.sHeight, duo.dx, duo.dy, duo.dWidth, duo.dHeight);
    }

    function wordCollisionDetection(object){
         
        if ( ((duo.dx > object.x - duo.dWidth) && (duo.dx < object.x + object.width)) && ( ( (duo.dy + duo.dHeight) >= object.y) && (duo.dy  <= object.y + object.height)) ) {
            if (enterPressed && object.toggle) { // if enter is pressed and the word hasn't been toggled
                    
              if (object.sentence === undefined) {
                    object.color='blue'; 
                    object.toggle = false
                    enterPressed = false;
                    // how do I know which object it is?
                    

                  $(`span#word${DuoWords.indexOf(object)}`).css({ color: "hsl(46, 100%, 50%)" });
                //   $(`span#word${DuoWords.indexOf(object)}`).css({ "text-shadow": "-1px 0 white, 0 1px white, 1px 0 white, 0 - 1px white" });
                  
                }
            } else {
                
                object.color = 'red';
                object.toggle=true;
                $(`span#word${DuoWords.indexOf(object)}`).css({ color: "white" });

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

        ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the entire canvas and redraw relevant stuff!
        
        if(language === 'Japanese'){
            ctx.drawImage(backgrounds.japan, 400, 0, 1000, 900, 0, 0, canvas.width, canvas.height)
        } else if (language === 'French') {
            ctx.drawImage(backgrounds.france, 0, 0, 1600, 1800, 0, 0, canvas.width, canvas.height)
        }
        else if (language === "Spanish") {
            ctx.drawImage(backgrounds.spain, 0, 0, 1600, 1800, 0, 0, canvas.width, canvas.height)
        } else {
            // level = 1;
            ctx.drawImage(backgrounds.default, 0, 600, 1000, 600, 0, 0, canvas.width, canvas.height)
        }
        
        // platform.draw(ctx);
        // terrace.draw(ctx); 
        // timer(ctx);
        
        drawBlock();
        // ctx.drawImage(frenchFlag, 5, 5, 70, 58, 760, 565, 70, 50);
    
        // for languages
        for(var i = 0; i < allLevels[language][level].length; i++){
            let word = allLevels[language][level][i];
            
            if (language === 'demo') {
                if (word.toggle === false){
                    if (langResetSwitch === false) {
                        var originalYCord = word.y; // var so that it has scope for block in 235,6
                        langResetSwitch = true;

                    }
                    // console.log(originalYCord)
                    word.y -= 3;
                    
                    currentLanguage = word
                    if (currentLanguage.y < 0) {
                        debugger
                        currentLanguage.y = originalYCord;
                        word.y = originalYCord;
                        language = word.word2;
                        $('input#translateSubmit').css({ display: 'block' })
                        makeSentence(allLevels[language][level]);
                    }
                }
            }
            if (word.sentence === undefined) {
                ctx.clearRect(word.x, word.y, word.width, word.height)
                word.draw(ctx);
            }
        } 
    
        //  THESE DO NOT NEED TO BE IN DRAW - MOVE TO KEY DOWN HANDLERS
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
        // drawSpanishFlag()

        drawDuo();
        hit = false;

        // part of handle submit success animation
        if (delay <= 0) {
            clearInterval(goodAnswer)
            clearInterval(badAnswer)
            delay = undefined;
            $(document.body).css({ backgroundColor: 'white' })
            document.getElementById('hint').innerHTML = "";
            document.getElementById('hint').style="display: none"
            // document.getElementById('crop').style = "display: none"
            if (correct) {
                
                if (allLevels[language][level + 1] !== undefined) {
                    level += 1;
                    makeSentence(allLevels[language][level])
                } else {
                    language = 'demo'; 
                    level = 1; 
                    currentLanguage = null;
                    // DuoWords = [
                    //     allLevels[language][level] 
                    // ]
                    $('div#CS').css({ display: 'none' })
                   
                }
                correct = false;
            }
        }

    }
    
    // End of Draw
    
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener('keypress', logKey);

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
                    if (enterPressed) {
                        DuoWords = allLevels[language][level]

                        // hitting this loop twice - make a switch
                        for (var i = 0; i < DuoWords.length; i++) {
                            
                            wordCollisionDetection(DuoWords[i])
                        }
                        DuoWords = allLevels[language][level]
                        return
                    }

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
    // COLLISION


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
        if ( language !== "demo" || (language === "demo" && (duo.dx > 350 || duo.dy < canvas.height - 100)) ){
            $('img#arrow').css({display: "none"});
            $('p#trans').css({ display: "none" });
        } else {
            $('img#arrow').css({ display: "block" });
            $('p#trans').css({ display: "block" });
        }
        
        //     $('p#instructions').css({display: "block"})
        //     $('p#instructions').css({ display: "none" })

        // }
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
                console.log('this is where I WOULD iterate the level')
                // level += 1
            }
        } 
    }
    function makeSentence(DuoWords){
        
        let newSentence = DuoWords[DuoWords.length-1].translation.split(' ');
        let newTranslation = DuoWords[DuoWords.length - 1].sentence.split(' ');
        if (document.getElementById('CS')) {
            $('div#CS').css({ display: 'block' })}
        for (let j = 0; j < newSentence.length; j++) {
            let word = newSentence[j]
            for (let i = 0; i < DuoWords.length - 1; i++) {
                if (word.toLowerCase() === DuoWords[i].word2.toLowerCase()) {
                    // Find the word block, then find it's translation (word1); then find its translation in the foreign sentence
                    // if this IS a match, then find the DuoWords[i].word1 in NewTranslation, and replace it with the span thing. 
                    for (let k=0; k < newTranslation.length; k++) {
                        let foreignWord = newTranslation[k]
                        
                        if (foreignWord.toLowerCase() === DuoWords[i].word1.toLowerCase()) {
                            // loop through all the words in newTranslation; if you find the one matching the word we JUST paused on in the above loop, swap it for a spanned foreign word
                            
                            newTranslation[k] = `<span id=` + `word${i}` + '>' + foreignWord + '</span>'
                            // i starts at 0, so 0 would be the firstword
                        }

                    }
                }
            }

        }
        
        document.getElementById('CS').innerHTML ="<p>" + newTranslation.join(' ') + "</p>"
        document.getElementById('CS').classList.add('canvasSentence')

    }

    function logKey(e) {
        
        if (e.target.id !== "translateSubmit") {

            const log = document.getElementById('translateSubmit');
            let letter = e.code.slice(e.code.length - 1);
            
            if (e.code ==="Space") {
                letter = " "
            } else if (e.keyCode === 13) {
                letter ="";
                
                handleSubmit();
            }
            log.value += letter.toLowerCase()
        }
    }
    
    setInterval(draw, 15)
    setInterval(spriteify, 750) //duo class?
    setInterval(stopWatch, 1000)
    // setInterval(nextLevel, 1000)

});