import Obstacles from './Obstacles'
import { allLevels } from './wordCollections'


// let platform = new Obstacles(490, canvas.height - 200, 200, 200);
// let terrace = new Obstacles(0, 200, 50, 200, "color");

export let game = {
    language: 'demo',
    level: 1,
    delay: undefined,
    currentLanguage: null,
    time: 30,
    correct: false,
    speed: 5,
    jump: 5,
    hit: false,
    langResetSwitch: false,
    rightPressed: false,
    leftPressed: false,
    upPressed: false,
    enterPressed: false,
    DuoWords: [
        allLevels['demo'][1]
    ],



}

