import Obstacles from './Obstacles'
import { allLevels } from './wordCollections'
import Duo from './Duo'

// let platform = new Obstacles(490, canvas.height - 200, 200, 200);
// let terrace = new Obstacles(0, 200, 50, 200, "color");
let duo = new Duo(15, 15, 250, 300, 480, 15, 75, 100);

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
    duo: duo



}

