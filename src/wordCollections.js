import Word from './word';
import Sentence from './sentence';

// constructor(word1, word2, x, y, width, height, color, toggle){
/* group 1 */

 let French = new Word('Francais', 'French', 860, 565, 70, 50, 'red', true);
let Spanish = new Word('Español', 'Spanish', 15, 150, 70, 50, 'red', true);
let Japanese = new Word('日本語', 'Japanese', 550, 370, 70, 50, 'red', true);
let dog = new Word('le chien', 'dog', 860, 565, 70, 50, 'red', true);
let cat = new Word('el gato', 'cat', 15, 150, 70, 50, 'red', true);

//  let sentence = new Sentence("Translate this sentence!", 710, 25, 50, 230, 'yellow')
 let Demo = new Sentence('Examine the words', 760, 75, 100, 200, 'green');

/* group 2*/
 let iWord = new Word('私は', 'I', 860, 565, 70, 50, 'red', true);
 let am = new Word('です', 'am', 15, 150, 70, 50, 'red', true);
 let boy = new Word('男の子', 'boy', 550, 370, 70, 50, 'red', true);
 let IamABoy = new Sentence('私は男の子です', 760, 75, 100, 200, 'green');

/* group 3*/
 let Pret = new Word('Pret', 'Ready', 860, 565, 70, 50, 'red', true);
 let Manger = new Word('Manger', 'To eat', 15, 150, 70, 50, 'red', true);
 let PretSentence = new Sentence('Pret A Manger', 760, 75, 100, 200, 'green');

/* group 4*/
let metouf = new Word(`m'étouffer`, 'suffocate me', 860, 565, 70, 50, 'red', true );
let papa = new Word('papa', 'daddy', 15, 150, 70, 50, 'red', true);
let metoufSentence = new Sentence(`étouffer-moi, papa`, 760, 75, 100, 200, 'green');
 /* levels */
 let languages = [French, Spanish, Japanese]
let spanishLevel1 = [dog,cat];
let japaneseLevel1 = [iWord,am,boy, IamABoy];
let frenchLevel1 = [Pret, Manger, PretSentence];
let frenchLevel2 = [metouf, papa, metoufSentence]

export const allLevels = {
    demo: { 1: languages },
    French: { 1: frenchLevel1, 2: frenchLevel2 },
    Spanish: { 1: spanishLevel1 },
    Japanese: { 1: japaneseLevel1 }
}

export const DuoWords = [
    French, Japanese, Spanish, am, iWord, boy, Pret, Manger, dog, cat, metouf, papa
]
//     if word.word === japanese && word.y < 0 language === japanese
    