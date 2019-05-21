import Duo from './Duo.js'
import Obstacles from './Obstacles'
import Word from './word'
import {allLevels} from './wordCollections'
import {backgrounds} from './backgrounds.js'
import {game} from './game.js'
import {handleSubmit} from './handle_submit'

const Modal = require('./modal.js');
// import {keyDownHandler, keyUpHandler} from '../vendor/keymaster'
// const Word = require('./word.js')
// const platforms = require('./platforms.js')
// const handleSubmit = require('./handle_submit.js')
// let language = require('./language.js')

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    let sprite = new Image();
    sprite.src = "./assets/images/owl-sprite20.svg";
           
    let drawDuo = ()=>{
        return ctx.drawImage(sprite, duo.sx, duo.sy, duo.sWidth, duo.sHeight, duo.dx, duo.dy, duo.dWidth, duo.dHeight);
    }

    let duoBlock = new Image();
    duoBlock.src = "./assets/images/duoBlock.jpg"
    let drawBlock = ()=>{
        return ctx.drawImage(duoBlock, 425, 150, 350, 350, 490, canvas.height - 200, 200, 200) 
    }

    let duo = new Duo( 15, 15, 250, 300, canvas.width/2, 15,  75, 100);
    
    // handleSubmit success Animation 
    let goodAnswer;
    let badAnswer;
    // handleSubmit success Animation 

    let platform = new Obstacles(490, canvas.height - 200, 200, 200 );
    let terrace = new Obstacles(0, 200, 50, 200, "color");

    // let downPressed = false;

  
    let DuoObjects = [ platform, terrace ]

    window.handleSubmit = handleSubmit;
    
    sprite.onload = function () {
        ctx.drawImage(sprite, duo.sx, duo.sy, duo.sWidth, duo.sHeight, duo.dx, duo.dy, duo.dWidth, duo.dHeight);
    }

    function wordCollisionDetection(object){
         
        if ( ((duo.dx > object.x - duo.dWidth) && (duo.dx < object.x + object.width)) && ( ( (duo.dy + duo.dHeight) >= object.y) && (duo.dy  <= object.y + object.height)) ) {
            if (game.enterPressed && object.toggle) { // if enter is pressed and the word hasn't been toggled
                    
              if (object.sentence === undefined) {
                    object.color='blue'; 
                    object.toggle = false
                    game.enterPressed = false;
                    // how do I know which object it is?
                    

                  $(`span#word${game.DuoWords.indexOf(object)}`).css({ color: "hsl(46, 100%, 50%)" });
                //   $(`span#word${game.DuoWords.indexOf(object)}`).css({ "text-shadow": "-1px 0 white, 0 1px white, 1px 0 white, 0 - 1px white" });
                  
                }
            } else {
                
                object.color = 'red';
                object.toggle=true;
                $(`span#word${game.DuoWords.indexOf(object)}`).css({ color: "white" });

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
        
        if(game.language === 'Japanese'){
            ctx.drawImage(backgrounds.japan, 400, 0, 1000, 900, 0, 0, canvas.width, canvas.height)
        } else if (game.language === 'French') {
            ctx.drawImage(backgrounds.france, 0, 0, 1600, 1800, 0, 0, canvas.width, canvas.height)
        }
        else if (game.language === "Spanish") {
            ctx.drawImage(backgrounds.spain, 0, 0, 1600, 1800, 0, 0, canvas.width, canvas.height)
        } else {
            // level = 1;
            ctx.drawImage(backgrounds.default, 0, 600, 1000, 600, 0, 0, canvas.width, canvas.height)
        }
        
        // platform.draw(ctx);
        // terrace.draw(ctx); 
        
        drawBlock();
        // ctx.drawImage(frenchFlag, 5, 5, 70, 58, 760, 565, 70, 50);
    
        // for languages
        for(var i = 0; i < allLevels[game.language][game.level].length; i++){
            let word = allLevels[game.language][game.level][i];
            
            if (game.language === 'demo') {
                if (word.toggle === false){
                    if (game.langResetSwitch === false) {
                        var originalYCord = word.y; // var so that it has scope for block in 235,6
                        game.langResetSwitch = true;

                    }
                    // console.log(originalYCord)
                    word.y -= 3;
                    
                    game.currentLanguage = word
                    if (game.currentLanguage.y < 0) {
                        
                        game.currentLanguage.y = originalYCord;
                        word.y = originalYCord;
                        game.language = word.word2;
                        $('input#translateSubmit').css({ display: 'block' })
                        makeSentence(allLevels[game.language][game.level]);
                    }
                }
            }
            if (word.sentence === undefined) {
                ctx.clearRect(word.x, word.y, word.width, word.height)
                word.draw(ctx);
            }
        } 
    
        //  THESE DO NOT NEED TO BE IN DRAW - MOVE TO KEY DOWN HANDLERS
        if (game.rightPressed && (duo.dx + duo.dWidth < canvas.width)) {
            for (var i = 0; i < DuoObjects.length; i++) {
                if (XcollisionDetection(DuoObjects[i], game.speed) === true) {
                    duo.dx += 0
                    game.hit = true;
                } 
                // for every button press, for each object duo doesn't collide with, dou.dx += game.speed
            }
            if (game.hit === false) { duo.dx += game.speed }
        }

        if (game.leftPressed && duo.dx > 0) {
            for (var i = 0; i < DuoObjects.length; i++) {
                if (XcollisionDetection(DuoObjects[i], -game.speed) === true) {
                    duo.dx += 0;
                    game.hit = true;
                }
            }
            if (game.hit === false) { duo.dx -= game.speed }
        }

        if (game.upPressed && duo.dy > 0) {

            duo.dy -= game.jump;
        }
        if ((game.upPressed === false && duo.dy < canvas.height) && (duo.dy + duo.dHeight < canvas.height)) {
            for (var i = 0; i < DuoObjects.length; i++) {
                if (YcollisionDetection(DuoObjects[i], game.jump) === true) {
                    duo.dy += 0;
                    game.hit = true;
                }
            }
            if (game.hit === false) { duo.dy += game.jump; }
        }
        // drawSpanishFlag()

        drawDuo();
        game.hit = false;

        // part of handle submit success animation
        if (game.delay <= 0) {
            clearInterval(goodAnswer)
            clearInterval(badAnswer)
            game.delay = undefined;
            $(document.body).css({ backgroundColor: 'white' })
            document.getElementById('hint').innerHTML = "";
            document.getElementById('hint').style="display: none"
            // document.getElementById('crop').style = "display: none"
            if (game.correct) {
                
                if (allLevels[game.language][game.level + 1] !== undefined) {
                    game.level += 1;
                    makeSentence(allLevels[game.language][game.level])
                } else {
                    game.language = 'demo'; 
                    game.level = 1; 
                    game.currentLanguage = null;
                    // game.DuoWords = [
                    //     allLevels[language][level] 
                    // ]
                    $('div#CS').css({ display: 'none' })
                   
                }
                game.correct = false;
            }
        }

    }
    
    // End of Draw
    
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener('keypress', logKey);

    function keyDownHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            game.rightPressed = true;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            game.leftPressed = true;
        }
        else if (e.key == "Up" || e.key == "ArrowUp") {
            game.upPressed = true;
        }
        else if (e.key == "Down" || e.key == "ArrowDown") {
            downPressed = true;
        } 
        else if (e.keyCode == 16) {
                
                game.enterPressed = true;
                    if (game.enterPressed) {
                        game.DuoWords = allLevels[game.language][game.level]

                        // hitting this loop twice - make a switch
                        for (var i = 0; i < game.DuoWords.length; i++) {
                            
                            wordCollisionDetection(game.DuoWords[i])
                        }
                        game.DuoWords = allLevels[game.language][game.level]
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
            game.rightPressed = false;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            game.leftPressed = false;
        }
        else if (e.key == "Up" || e.key == "ArrowUp") {
            game.upPressed = false;
        }
        else if (e.key == "Down" || e.key == "ArrowDown") {
            downPressed = false;
        }
        // QUESTION: why doesn't it return to false
        else if (e.keyCode === 16) {
            game.enterPressed = false;
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
        game.time -= 1;
        if (game.time <= 0 && game.level >= 3 === false) {    
            // level += 1; 
            game.time += 120;
        }
        if (game.delay !== undefined) {
            
            game.delay -= 1;
        }
        if ( game.language !== "demo" || (game.language === "demo" && (duo.dx > 350 || duo.dy < canvas.height - 100)) ){
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
        ctx.fillText(game.time.toString(), 50, 50)
        ctx.closePath();
    } 
    
    function nextLevel (){ //if all hints are toggled, next level
        for (var i = 0; i < allLevels[game.language][game.level].length; i++) {
             
            let word = allLevels[game.language][game.level][i];
            if (word.toggle === true ) {
                return false
            } else if (i < allLevels[game.language][game.level].length-1){
                 
                continue
            } else {
                //  if there are no words with y > 0 (loop through all the words)
                console.log('this is where I WOULD iterate the level')
                // level += 1
            }
        } 
    }

    function makeSentence(DuoWords) {

        let newSentence = DuoWords[DuoWords.length - 1].translation.split(' ');
        let newTranslation = DuoWords[DuoWords.length - 1].sentence.split(' ');
        if (document.getElementById('CS')) {
            $('div#CS').css({ display: 'block' })
        }
        for (let j = 0; j < newSentence.length; j++) {
            let word = newSentence[j]
            for (let i = 0; i < DuoWords.length - 1; i++) {
                if (word.toLowerCase() === DuoWords[i].word2.toLowerCase()) {
                    // Find the word block, then find it's translation (word1); then find its translation in the foreign sentence
                    // if this IS a match, then find the DuoWords[i].word1 in NewTranslation, and replace it with the span thing. 
                    for (let k = 0; k < newTranslation.length; k++) {
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

        document.getElementById('CS').innerHTML = "<p>" + newTranslation.join(' ') + "</p>"
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