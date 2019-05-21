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
