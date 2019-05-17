import Word from './word';
import Sentence from './sentence';
    const canvas = { width: 960, height: 640 };
// languages!
    let French = new Word('Francais', 'French', canvas.width / 4, canvas.height - 450, 70, 50, 'red', true);
    let Spanish = new Word('Español', 'Spanish', canvas.width - 550, canvas.height - 250, 70, 50, 'orange', true);
    let Japanese = new Word('日本語', 'Japanese', 650, 220, 70, 50, 'green', true);
    
    // let sentence = new Sentence("Translate this sentence!", 710, 25, 50, 230, 'yellow')
     let Demo = new Sentence('Choose a language!', 760, 75, 100, 200, 'green');

     // FLAGS
// let spanishFlag = new Image();
// let frenchFlag = new Image();
// let japaneseFlag = new Image();
// spanishFlag.src = "./assets/images/juicy-flag-sprite-4.svg"
// japaneseFlag.src = spanishFlag.src;
// frenchFlag.src = spanishFlag.src;

    // FLAGS





/* spanish level 4 */
let dog = new Word('perro', 'the dog', 860, 565, 70, 50, 'orange', true);
let hungry = new Word('necesita', 'needs', 15, 150, 70, 50, 'orange', true);
let food = new Word('comida', 'food', 550, 370, 70, 50, 'green', true);
let needsFood = new Sentence('El perro necesita comida', "The dog needs food", 760, 75, 100, 170, 'green');
                                                    // x, y, height, width, color
// spanish level 2
let bebi = new Word('bebí', 'drank', 860, 565, 70, 50, 'orange', true);
let tu = new Word('tu', 'your', 15, 150, 70, 50, 'orange', true);
let leche = new Word('leche', 'milk', 550, 370, 70, 50, 'orange', true);
let dieSentence = new Sentence('Yo bebí tu leche', "I drank your milk", 760, 75, 100, 170, 'green');

// spanish level 3
let afraid = new Word('miedo', 'afraid', 860, 565, 70, 50, 'orange', true)
let iHave = new Word('tengo', 'I have', 550, 370, 70, 50, 'orange', true)
let carlosSentence = new Sentence('Tengo miedo de Carlos', "I am afraid of Carlos", 760, 75, 100, 170, 'green');

// spanish level 1
let chico = new Word('chico', 'boy', 15, 150, 70, 50, 'orange', true)
let perdido = new Word('perdido', 'lost', 860, 565, 70, 50, 'orange', true);
let yo = new Word('yo', 'I', 550, 370, 70, 50, 'orange', true);
let brotherSentence = new Sentence('Yo soy un chico perdido', "I am a lost boy", 760, 75, 100, 170, 'green');

/* Japanese level 1*/
let iWord = new Word('ぼく', 'I', 860, 565, 70, 50, 'green', true);
 let am = new Word('です', 'am', 15, 150, 70, 50, 'green', true);
let boy = new Word('おとこのこ', 'boy', 550, 370, 95, 50, 'green', true);
let IamABoy = new Sentence('ぼく は おとこのこ です', "I am a boy", 760, 75, 100, 170, 'green');

// Japanese level 2
let like = new Word('好き', 'like', 15, 150, 80, 50, 'green', true);
let eggs = new Word('たまご', 'eggs', 550, 370, 70, 50, 'green', true);
let ILikeEggs = new Sentence('私は たまご 好き です', "I like eggs", 760, 75, 100, 170, 'green');

/* French Level 1*/
let go = new Word('Papa', 'father', 860, 565, 70, 50, 'green', true);
let room = new Word('arrête', 'stop', 15, 150, 70, 50, 'green', true);
let anymore = new Word('crier', 'yelling', 550, 370, 70, 50, 'green', true);
let RoomSentence = new Sentence('Papa arrête de crier', "Father stop yelling", 760, 75, 100, 170, 'green');

/* French Level 2*/
let where = new Word(`ou`, 'where', 860, 565, 70, 50, '#b946b9', true );
let herFamily = new Word('famille', 'family', 15, 150, 70, 50, '#b946b9', true);
let familySentence = new Sentence(`ou est sa famille`, "Where is her family", 760, 75, 100, 170, 'green');

/* French Level 3*/
let school = new Word(`maison`, 'house', 860, 565, 70, 50, '#b946b9', true);
let ruined = new Word('ruinee', 'ruined', 15, 150, 70, 50, '#b946b9', true);
let forever = new Word('toujours', 'forever', 550, 370, 70, 50, '#b946b9', true);
let schoolSentence = new Sentence( "le maison est ruinee pour toujours", `the house is ruined forever`, 760, 75, 100, 170, 'green');

// French Level 4
let pere = new Word('father', 'pere', 860, 565, 70, 50, '#b946b9', true);
let disparu = new Word('disappeared', 'disparu', 15, 150, "disappeared".length*8, 50, '#b946b9', true);
let PereSentence = new Sentence("Her father has disappeared", 'Sa pere a disparu', 760, 75, 100, 170, 'green');

// cleared!
// let completed = new Sentence("Congratulations!", 'Felicitations!', 760, 75, 100, 170, 'green');

/* LEVELS */

let languages = [French, Spanish, Japanese]
let spanishLevel1 = [yo, chico, perdido, brotherSentence]
let spanishLevel2 = [bebi, tu, leche, dieSentence]
let spanishLevel3 = [afraid, iHave, carlosSentence]
let spanishLevel4 = [dog,hungry, food, needsFood];
let japaneseLevel1 = [iWord, am, boy, IamABoy];
let japaneseLevel2 = [like, eggs, ILikeEggs];
let frenchLevel1 = [go, room, anymore, RoomSentence];
let frenchLevel2 = [where, herFamily, familySentence];
let frenchLevel3 = [school, ruined, forever, schoolSentence]
let frenchLevel4 = [pere, disparu, PereSentence]


export const allLevels = {
    demo: { 1: languages },
    French: { 1: frenchLevel1, 2: frenchLevel2, 3: frenchLevel3, 4: frenchLevel4 },
    Spanish: { 1: spanishLevel1, 2: spanishLevel2, 3: spanishLevel3, 4: spanishLevel4 },
    Japanese: { 1: japaneseLevel1, 2: japaneseLevel2 },
    // eggs: [completed]
}