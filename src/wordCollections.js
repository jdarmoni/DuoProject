import Word from './word';
import Sentence from './sentence';

// constructor(word1, word2, x, y, width, height, color, toggle){
    
// languages!
    let French = new Word('Francais', 'French', 860, 565, 70, 50, 'red', true);
    let Spanish = new Word('Español', 'Spanish', 15, 150, 70, 50, 'orange', true);
    let Japanese = new Word('日本語', 'Japanese', 550, 370, 70, 50, 'green', true);
    
    // let sentence = new Sentence("Translate this sentence!", 710, 25, 50, 230, 'yellow')
     let Demo = new Sentence('Choose a language!', 760, 75, 100, 200, 'green');
    
/* spanish level 4 */
let dog = new Word('el perro', 'the dog', 860, 565, 70, 50, 'orange', true);
let hungry = new Word('necesita', 'needs', 15, 150, 70, 50, 'orange', true);
let food = new Word('comida', 'food', 550, 370, 70, 50, 'green', true);
let needsFood = new Sentence('El perro necesita comida', "The dog needs food", 760, 75, 100, 170, 'green');
                                                    // x, y, height, width, color
// spanish level 2
let die = new Word('moriré', 'die', 860, 565, 70, 50, 'orange', true);
let today = new Word('hoy', 'today', 550, 370, 70, 50, 'orange', true);
let dieSentence = new Sentence('No moriré hoy', "I will not die today", 760, 75, 100, 170, 'green');

// spanish level 3
let afraid = new Word('miedo', 'afraid', 860, 565, 70, 50, 'orange', true)
let iHave = new Word('tengo', 'I have', 550, 370, 70, 50, 'orange', true)
let carlosSentence = new Sentence('Tengo miedo de Carlos', "I am afraid of Carlos", 760, 75, 100, 170, 'green');

// spanish level 1
let hermano = new Word('hermano', 'brother', 860, 565, 70, 50, 'orange', true)
let tener = new Word('tener', ('to'+' '+'have'), 15, 150, 70, 50, 'orange', true);
let solia = new Word('solia', 'used', 550, 370, 70, 50, 'green', true);
let brotherSentence = new Sentence('Solía tener un hermano', "I used to have a brother", 760, 75, 100, 170, 'green');

/* Japanese level 1*/
 let iWord = new Word('私は', 'I', 860, 565, 70, 50, 'green', true);
 let am = new Word('です', 'am', 15, 150, 70, 50, 'green', true);
 let boy = new Word('男の子', 'boy', 550, 370, 70, 50, 'green', true);
 let IamABoy = new Sentence('私は男の子です', "I am a boy", 760, 75, 100, 170, 'green');

// Japanese level 2
let like = new Word('好きです', 'I like', 15, 150, 70, 50, 'green', true);
let eggs = new Word('卵卵が', 'eggs', 550, 370, 70, 50, 'green', true);
let ILikeEggs = new Sentence('私は卵が好きです', "I like eggs", 760, 75, 100, 170, 'green');

/* French Level 1*/
 let father = new Word('Ta pere', 'her father', 860, 565, 70, 50, '#b946b9', true);
 let gone = new Word('a disparu', 'has disappeared', 15, 150, 70, 50, '#b946b9', true);
let FatherSentence = new Sentence('Sa pere a disparu', "Her father has disappeared", 760, 75, 100, 170, 'green');

/* French Level 2*/
let where = new Word(`ou est`, 'where is', 860, 565, 70, 50, '#b946b9', true );
let herFamily = new Word('sa family', 'her family', 15, 150, 70, 50, '#b946b9', true);
let familySentence = new Sentence(`ou est sa famille`, "Where is her family", 760, 75, 100, 170, 'green');

/* French Level 3*/
let pas = new Word(`pas`, 'do not', 860, 565, 70, 50, '#b946b9', true);
let abandon = new Word('abandonner', 'abandon', 15, 150, 70, 50, '#b946b9', true);
let abandonSentence = new Sentence(`ne m'abandonne pas`, "Don't abandon me", 760, 75, 100, 170, 'green');

/* French Level 4*/
let school = new Word(`l'ecole`, 'the school', 860, 565, 70, 50, '#b946b9', true);
let ruined = new Word('est ruinee', 'is ruined', 15, 150, 70, 50, '#b946b9', true);
let forever = new Word('pour toujours', 'forever', 550, 370, 70, 50, '#b946b9', true);
let schoolSentence = new Sentence( "l'ecole est ruinee pour toujours", `the school is ruined forever`, 760, 75, 100, 170, 'green');

// French Level 5
let pere = new Word('her father', 'Ta pere', 860, 565, 70, 50, '#b946b9', true);
let disparu = new Word('has disappeared', 'a disparu', 15, 150, 70, 50, '#b946b9', true);
let PereSentence = new Sentence("Her father has disappeared", 'Sa pere a disparu', 760, 75, 100, 170, 'green');


/* LEVELS */

let languages = [French, Spanish, Japanese]
let spanishLevel1 = [hermano, solia, tener, brotherSentence]
let spanishLevel2 = [die, today, dieSentence]
let spanishLevel3 = [afraid, iHave, carlosSentence]
let spanishLevel4 = [dog,hungry, food, needsFood];
let japaneseLevel1 = [iWord, am, boy, IamABoy];
let japaneseLevel2 = [iWord, like, eggs, ILikeEggs];
let frenchLevel1 = [father, gone, FatherSentence];
let frenchLevel2 = [where, herFamily, familySentence];
let frenchLevel3 = [pas, abandon, abandonSentence];
let frenchLevel4 = [school, ruined, forever, schoolSentence]
let frenchLevel5 = [pere, disparu, PereSentence]


export const allLevels = {
    demo: { 1: languages },
    French: { 1: frenchLevel1, 2: frenchLevel2, 3: frenchLevel3, 4: frenchLevel4, 5: frenchLevel5 },
    Spanish: { 1: spanishLevel1, 2: spanishLevel2, 3: spanishLevel3, 4: spanishLevel4 },
    Japanese: { 1: japaneseLevel1, 2: japaneseLevel2 }
}