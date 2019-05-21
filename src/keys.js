import { allLevels } from './wordCollections'

let rightPressed = false
let leftPressed = false;
let upPressed = false;
let enterPressed = false;

// needs Duowords

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