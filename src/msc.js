import { game } from './game.js'

function timer(ctx) {
    ctx.beginPath();
    ctx.rect(canvas.width - 100, 100, 50, 50);
    ctx.font = '14px serif'
    ctx.fillText(game.time.toString(), 50, 50)
    ctx.closePath();
}

function nextLevel() { //if all hints are toggled, next level
    for (var i = 0; i < allLevels[game.language][game.level].length; i++) {

        let word = allLevels[game.language][game.level][i];
        if (word.toggle === true) {
            return false
        } else if (i < allLevels[game.language][game.level].length - 1) {

            continue
        } else {
            //  if there are no words with y > 0 (loop through all the words)
            console.log('this is where I WOULD iterate the level')
            // level += 1
        }
    }
}


export const spriteify=()=> {
    if (game.duo.sx === 15) {
        game.duo.sx = 340;
    } else if (game.duo.sx === 340) {
        game.duo.sx = 15;
    }
}

export const stopWatch=()=> {
    game.time -= 1;
    if (game.time <= 0 && game.level >= 3 === false) {
        // level += 1; 
        game.time += 120;
    }
    if (game.delay !== undefined) {

        game.delay -= 1;
    }
    if (game.language !== "demo" || (game.language === "demo" && (game.duo.dx > 350 || game.duo.dy < canvas.height - 100))) {
        $('img#arrow').css({ display: "none" });
        $('p#trans').css({ display: "none" });
    } else {
        $('img#arrow').css({ display: "block" });
        $('p#trans').css({ display: "block" });
    }

}