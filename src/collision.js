import {game} from './game.js';

export const wordCollisionDetection = (object) => {
    console.log(object)
    if (((game.duo.dx > object.x - game.duo.dWidth) && (game.duo.dx < object.x + object.width)) && (((game.duo.dy + game.duo.dHeight) >= object.y) && (game.duo.dy <= object.y + object.height))) {
        if (game.enterPressed && object.toggle) { // if enter is pressed and the word hasn't been toggled

            if (object.sentence === undefined) {
                object.color = 'blue';
                object.toggle = false
                game.enterPressed = false;

                $(`span#word${game.DuoWords.indexOf(object)}`).css({ color: "hsl(46, 100%, 50%)" });
                //   $(`span#word${game.DuoWords.indexOf(object)}`).css({ "text-shadow": "-1px 0 white, 0 1px white, 1px 0 white, 0 - 1px white" });

            }
        } else {

            object.color = 'red';
            object.toggle = true;
            $(`span#word${game.DuoWords.indexOf(object)}`).css({ color: "white" });

        }
    }
}

export const YcollisionDetection = (object, pos) => {
    if (((game.duo.dx > object.x - game.duo.dWidth) && (game.duo.dx < object.x + object.width)) && (((game.duo.dy + game.duo.dHeight) + pos >= object.y) && (game.duo.dy + pos <= object.y + object.height))) {
        return true
    }
}

export const XcollisionDetection=(object, pos) => {
    // if a movement would enter him into between x (start) AND the x+width (MAX LENGTH) of object
    if ((game.duo.dx + pos > object.x - game.duo.dWidth && (game.duo.dx + pos < object.x + object.width)) && (((game.duo.dy + game.duo.dHeight) >= object.y) && (game.duo.dy <= object.y + object.height))) {
        // if it would enter him into between y (start) AND y + height (end) range of the object
        return true
    }
}