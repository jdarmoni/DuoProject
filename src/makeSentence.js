export const makeSentence = (DuoWords) => {

    let newSentence = DuoWords[DuoWords.length - 1].translation.split(' ');
    let newTranslation = DuoWords[DuoWords.length - 1].sentence.split(' ');
    if (document.getElementById('CS')) {
        $('div#CS').css({ display: 'block' })
    }
    for (let j = 0; j < newSentence.length; j++) {
        let word = newSentence[j]
        for (let i = 0; i < DuoWords.length - 1; i++) {
            if (word.toLowerCase() === DuoWords[i].word2.toLowerCase()) {
                // Find the word block, then find it's translation (word1); then find its translation in the foreign sentence
                // if this IS a match, then find the DuoWords[i].word1 in NewTranslation, and replace it with the span thing. 
                for (let k = 0; k < newTranslation.length; k++) {
                    let foreignWord = newTranslation[k]

                    if (foreignWord.toLowerCase() === DuoWords[i].word1.toLowerCase()) {
                        // loop through all the words in newTranslation; if you find the one matching the word we JUST paused on in the above loop, swap it for a spanned foreign word

                        newTranslation[k] = `<span id=` + `word${i}` + '>' + foreignWord + '</span>'
                        // i starts at 0, so 0 would be the firstword
                    }
                }
            }
        }
    }
    document.getElementById('CS').innerHTML = "<p>" + newTranslation.join(' ') + "</p>"
    document.getElementById('CS').classList.add('canvasSentence')
}