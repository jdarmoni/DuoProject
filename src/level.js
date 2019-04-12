// import { iWord, am, boy, dog, cat, Pret, Manger, IamABoy, PretSentence, Demo } from "./wordCollections";

export const stage = (level)=>{
    const sentence = sentence.draw(ctx)
    
    switch(level){
        case level === 1:
            dog.draw(ctx);
            cat.draw(ctx);
            Demo.draw(ctx);
            sentence
            break 
        case level === 2:
            iWord.draw(ctx);
            am.draw(ctx);
            boy.draw(ctx);
            IamABoy.draw(ctx);
            sentence;
        case level === 3: 
            Pret.draw(ctx);
            Manger.draw(ctx);
            PretSentence.draw
            sentence;
    }
}