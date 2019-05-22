import {game} from './game.js'

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

export const draw=()=> {

    ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the entire canvas and redraw relevant stuff!

    if (game.language === 'Japanese') {
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
    drawBlock();

    // for languages
    for (var i = 0; i < allLevels[game.language][game.level].length; i++) {
        let word = allLevels[game.language][game.level][i];

        if (game.language === 'demo') {
            if (word.toggle === false) {
                if (game.langResetSwitch === false) {
                    var originalYCord = word.y; // var so that it has scope for block in 235,6
                    game.langResetSwitch = true;

                }
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
    if (game.rightPressed && (game.duo.dx + game.duo.dWidth < canvas.width)) {
        for (var i = 0; i < game.DuoObjects.length; i++) {
            if (XcollisionDetection(game.DuoObjects[i], game.speed) === true) {
                game.duo.dx += 0
                game.hit = true;
            }
            // for every button press, for each object duo doesn't collide with, dou.dx += game.speed
        }
        if (game.hit === false) { game.duo.dx += game.speed }
    }

    if (game.leftPressed && game.duo.dx > 0) {
        for (var i = 0; i < game.DuoObjects.length; i++) {
            if (XcollisionDetection(game.DuoObjects[i], -game.speed) === true) {
                game.duo.dx += 0;
                game.hit = true;
            }
        }
        if (game.hit === false) { game.duo.dx -= game.speed }
    }

    if (game.upPressed && game.duo.dy > 0) {

        game.duo.dy -= game.jump;
    }
    if ((game.upPressed === false && game.duo.dy < canvas.height) && (game.duo.dy + game.duo.dHeight < canvas.height)) {
        for (var i = 0; i < game.DuoObjects.length; i++) {
            if (YcollisionDetection(game.DuoObjects[i], game.jump) === true) {
                game.duo.dy += 0;
                game.hit = true;
            }
        }
        if (game.hit === false) { game.duo.dy += game.jump; }
    }

    drawDuo();
    game.hit = false;

    // part of handle submit success animation
    if (game.delay <= 0) {
        clearInterval(game.goodAnswer)
        clearInterval(game.badAnswer)
        game.delay = undefined;
        $(document.body).css({ backgroundColor: 'white' })
        document.getElementById('hint').innerHTML = "";
        document.getElementById('hint').style = "display: none"
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