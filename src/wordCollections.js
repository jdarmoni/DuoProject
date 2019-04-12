import Word from './word';
import Sentence from './sentence';

// constructor(word1, word2, x, y, width, height, color, toggle){
/* group 1 */

 let dog = new Word('le chien', 'the dog', 860, 565, 70, 50, 'red', true);
 let cat = new Word('el gato', 'the cat', 15, 150, 70, 50, 'red', true);
 let sentence = new Sentence("Translate this sentence!", 710, 25, 50, 230, 'yellow')
 let Demo = new Sentence('Examine the words', 760, 75, 200, 200, 'green');

/* group 2*/
 let iWord = new Word('私は', 'I', 860, 565, 70, 50, 'red', true);
 let am = new Word('です', 'am', 15, 150, 70, 50, 'red', true);
 let boy = new Word('男の子', 'boy', 550, 390, 70, 50, 'red', true);
 let IamABoy = new Sentence('私は男の子です', 760, 75, 100, 200, 'green');

/* group 3*/
 let Pret = new Word('Pret', 'Ready', 860, 565, 200, 150, 'red', true);
 let Manger = new Word('Manger', 'To eat', 15, 150, 200, 150, 'red', true);
 let PretSentence = new Sentence('Pret A Manger', 760, 75, 200, 200, 'green');

/* group 4*/
let metouf = new Word(`m'étouffer`, 'suffocate me', 860, 565, 200, 150, 'red', true );
let papa = new Word('papa', 'daddy', 15, 150, 200, 150, 'red', true);
let metoufSentence = new Sentence(`étouffer-moi, papa`, 760, 75, 200, 200, 'green');
 /* levels */
let level1 = [dog,cat, Demo];
let level2 = [iWord,am,boy,sentence, IamABoy];
let level3 = [Pret, Manger, sentence, PretSentence];
let level4 = [metouf, papa, metoufSentence]


export const allLevels = {1: level1, 2: level2, 3:level3, 4:level4};
export const DuoWords = [
    am, iWord, boy, Pret, Manger, dog, cat, metouf, papa
]
//     constructor(sentence, x, y, height, width, color)
