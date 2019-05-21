import { game } from './game.js'
import {handleSubmit} from './handle_submit'
import {allLevels} from './wordCollections'
import { wordCollisionDetection} from './collision'

export const keyDownHandler =(e)=> {
    if (e.key == "Right" || e.key == "ArrowRight") {
        game.rightPressed = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        game.leftPressed = true;
    }
    else if (e.key == "Up" || e.key == "ArrowUp") {
        game.upPressed = true;
    }
    // else if (e.key == "Down" || e.key == "ArrowDown") {
    //     downPressed = true;
    // }
    else if (e.keyCode == 16) {

        game.enterPressed = true;
        if (game.enterPressed) {
            game.DuoWords = allLevels[game.language][game.level]

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
export const keyUpHandler =(e) =>{
    if (e.key == "Right" || e.key == "ArrowRight") {
        game.rightPressed = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        game.leftPressed = false;
    }
    else if (e.key == "Up" || e.key == "ArrowUp") {
        game.upPressed = false;
    }
    // else if (e.key == "Down" || e.key == "ArrowDown") {
    //     downPressed = false;
    // }
    else if (e.keyCode === 16) {
        game.enterPressed = false;
    }
}

export const logKey=(e)=> {

    if (e.target.id !== "translateSubmit") {

        const log = document.getElementById('translateSubmit');
        let letter = e.code.slice(e.code.length - 1);

        if (e.code === "Space") {
            letter = " "
        } else if (e.keyCode === 13) {
            letter = "";

            handleSubmit();
        }
        log.value += letter.toLowerCase()
    }
}