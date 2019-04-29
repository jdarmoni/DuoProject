// const movingObjects = require("./msc");

// const collision = module.exports = {};

// collision.wordCollisionDetection = function (object) {
//     if (((movingObjects.duo.dx > object.x - movingObjects.duo.dWidth) && (movingObjects.duo.dx < object.x + object.width)) && (((movingObjects.duo.dy + movingObjects.duo.dHeight) >= object.y) && (movingObjects.duo.dy <= object.y + object.height))) {
//         if (enterPressed && object.toggle) { // if enter is pressed and the word hasn't been toggled

//             if (object.sentence === undefined) {
//                 object.color = 'blue';
//                 object.toggle = false
//                 enterPressed = false;
//                 // how do I know which object it is?
//                 debugger

//                 $(`span#word${DuoWords.indexOf(object)}`).css({ color: "hsl(46, 100%, 50%)" });
//                 //   $(`span#word${movingObjects.duoWords.indexOf(object)}`).css({ "text-shadow": "-1px 0 white, 0 1px white, 1px 0 white, 0 - 1px white" });

//             }
//         } else {

//             object.color = 'red';
//             object.toggle = true;
//             $(`span#word${DuoWords.indexOf(object)}`).css({ color: "white" });

//         }
//     }
// }

// collision.YcollisionDetection = function(object, pos) {
//     if (((movingObjects.duo.dx > object.x - movingObjects.duo.dWidth) && (movingObjects.duo.dx < object.x + object.width)) && (((movingObjects.duo.dy + movingObjects.duo.dHeight) + pos >= object.y) && (movingObjects.duo.dy + pos <= object.y + object.height))) {
//         return true
//     }
// }

// collision.XcollisionDetection = function(object, pos) {
//     // if a movement would enter him into between x (start) AND the x+width (MAX LENGTH) of object
//     if ((movingObjects.duo.dx + pos > object.x - movingObjects.duo.dWidth && (movingObjects.duo.dx + pos < object.x + object.width)) && (((movingObjects.duo.dy + movingObjects.duo.dHeight) >= object.y) && (movingObjects.duo.dy <= object.y + object.height))) {
//         // if it would enter him into between y (start) AND y + height (end) range of the object
//         return true
//     }
// }
