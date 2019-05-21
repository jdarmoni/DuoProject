export const wordCollisionDetection = (object) =>{

    if (((game.dx > object.x - game.dWidth) && (game.dx < object.x + object.width)) && (((game.dy + game.dHeight) >= object.y) && (game.dy <= object.y + object.height))) {
        if (game.enterPressed && object.toggle) { // if enter is pressed and the word hasn't been toggled

            if (object.sentence === undefined) {
                object.color = 'blue';
                object.toggle = false
                game.enterPressed = false;
                // how do I know which object it is?


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