import { allLevels } from './wordCollections'
import { game } from './game.js'

export const handleSubmit =()=> {

    event.preventDefault();
    const guess = document.getElementById('translateSubmit').value;
    let hints = 0;
    if (game.language !== 'demo') {
        DuoWords = allLevels[game.language][game.level];
        let translation = DuoWords[DuoWords.length - 1].translation;

        if (guess.toLowerCase() === translation.toLowerCase()) {
            delay = 3;
            $(document.body).css({ backgroundColor: '#BFF199' })
            correct = true
            // document.getElementById('crop').style = "display: block";
        } else {
            delay = 3;
            $(document.body).css({ backgroundColor: '#FF9797' })
            // logic for giving a hint
            let correctGuess = translation.split(' ');
            let badGuess = guess.split(' ');
            let closeGuess = "";
            for (let i = 0; i < correctGuess.length; i++) {
                if (badGuess.includes(correctGuess[i].toLowerCase())) {
                    closeGuess += correctGuess[i] + ' ';
                } else {
                    closeGuess += "_ ";
                    hints += 1;
                }
            }
            document.getElementById('hint').style = "display: block";
            if (hints <= 1) { document.getElementById('hint').innerHTML = "<p class='close-hint'>Close!!</p>" + '<span class="closeGuess">' + closeGuess + '</span>' + '<br></br>'; } else {
                document.getElementById('hint').innerHTML = "<p class='close-hint'>Hint:</p>" + closeGuess + '<br></br>';
            }

        }
    }
    document.getElementById('translateSubmit').value = ""
} 