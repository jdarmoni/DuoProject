import Word from './word';
import Sentence from './sentence';

// constructor(word1, word2, x, y, width, height, color, toggle){
    
// languages!
    let French = new Word('Francais', 'French', 860, 565, 70, 50, 'red', true);
    let Spanish = new Word('Español', 'Spanish', 15, 150, 70, 50, 'orange', true);
    let Japanese = new Word('日本語', 'Japanese', 550, 370, 70, 50, 'green', true);
    
    // let sentence = new Sentence("Translate this sentence!", 710, 25, 50, 230, 'yellow')
     let Demo = new Sentence('Choose a language!', 760, 75, 100, 200, 'green');
    
/* spanish level 1 */
let dog = new Word('el perro', 'the dog', 860, 565, 70, 50, 'orange', true);
let hungry = new Word('necesita', 'needs', 15, 150, 70, 50, 'orange', true);
let food = new Word('comida', 'food', 550, 370, 70, 50, 'green', true);
let needsFood = new Sentence('El perro necesita comida', 720, 115, 0, 165, 'green');
// 

/* Japanese level 1*/
 let iWord = new Word('私は', 'I', 860, 565, 70, 50, 'green', true);
 let am = new Word('です', 'am!', 15, 150, 70, 50, 'green', true);
 let boy = new Word('男の子', 'boy', 550, 370, 70, 50, 'green', true);
 let IamABoy = new Sentence('私は男の子です', 760, 75, 100, 200, 'green');

// Japanese level 2
let like = new Word('好きです', 'I like', 15, 150, 70, 50, 'green', true);
let eggs = new Word('卵卵が', 'eggs', 550, 370, 70, 50, 'green', true);
let ILikeEggs = new Sentence('私は卵が好きです', 760, 75, 100, 200, 'green');


/* French Level 1*/
 let father = new Word('Ta pere', 'her father', 860, 565, 70, 50, 'red', true);
 let gone = new Word('a disparu', 'has disappeared', 15, 150, 70, 50, 'red', true);
 let FatherSentence = new Sentence('Ta pere a disparu', 760, 115, 0, 165, 'green');

/* French Level 2*/
let where = new Word(`ou est`, 'where is', 860, 565, 70, 50, 'red', true );
let herFamily = new Word('sa family', 'her family', 15, 150, 70, 50, 'red', true);
let familySentence = new Sentence(`ou est sa famille`, 760, 75, 100, 200, 'green');
// you will never see my father
// the school is gone
/* levels */
let languages = [French, Spanish, Japanese]
let spanishLevel1 = [dog,hungry, food, needsFood];
let japaneseLevel1 = [iWord,am,boy, IamABoy];
let japaneseLevel2 = [iWord, like, eggs, ILikeEggs]
let frenchLevel1 = [father, gone, FatherSentence];
let frenchLevel2 = [where, herFamily, familySentence]

export const allLevels = {
    demo: { 1: languages },
    French: { 1: frenchLevel1, 2: frenchLevel2 },
    Spanish: { 1: spanishLevel1 },
    Japanese: { 1: japaneseLevel1, 2: japaneseLevel2 }
}


//     if word.word === japanese && word.y < 0 language === japanese
    