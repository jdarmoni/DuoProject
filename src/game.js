import Obstacles from './Obstacles'
import { allLevels } from './wordCollections'
import Duo from './Duo'

let canvas = { width: 960, height: 640 }
let duo = new Duo(15, 15, 250, 300, 480, 15, 75, 100);
let sprite = new Image();
sprite.src = "./assets/images/owl-sprite20.svg";
let duoBlock = new Image();
duoBlock.src = "./assets/images/duoBlock.jpg"
let platform = new Obstacles(490, canvas.height - 200, 200, 200);
let terrace = new Obstacles(0, 200, 50, 200, "color");



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
    badAnswer: undefined,
    goodAnswer: undefined,
    DuoWords: [
        allLevels['demo'][1]
    ],
    duo: duo,
    sprite: sprite,
    duoBlock: duoBlock,
    DuoObjects: [platform, terrace]



}

