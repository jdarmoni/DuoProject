
export default class Sentence {
    constructor(sentence, translation, x, y, height, width, color){
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
        this.sentence = sentence;
        this.translation = translation;
    }
}
Sentence.prototype.draw = function draw(ctx){
    // if (this.color = nil) {this.color = white}
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height)
    ctx.font = "20px serif";
    // ctx.fillStyle=this.color
    ctx.fillText(this.sentence, this.x + this.width/8, this.y + this.height / 2)
    
    ctx.closePath();
}


// take sentence.translation
// split it on a space
//     < p >
//     iterate through each word
// if one of the words === any of the duo objects.word2
// newSentence += <span className=`${word[i]`}> word2 </span>
// </p>

// append it with jquery into a div 

// if word 1.toggle, span word 1 color = blue

// remove sentence.draw rectangle, replace with HTML 

// let newSentence = DuoWords[3].translation.split(' ').forEach((word => {
//     for (i = 0; i < DuoWords.length - 1; i++) {
//         console.log(word)
//         console.log(DuoWords[i].word2)
//         if (word === DuoWords[i].word2) {
//             word = `<span className=` + `word${i}` + '>' + word + '</span>'

//         }
//     }
// }))

// then maybe div.append(<p>newSentence.join(' ')</p>) 
// the div being styled in the top right corner where the sentence used to be 

