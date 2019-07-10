# JuoDuo

JuoDuo is a translation platformmer, inspired by (and boldly infringing upon) Duolingo. Move the owl around the board! Toggle words! Translate sentences! 

# Key Features 

## Choose a Language 
![Homepage Image](readmeResources/homepage.png)

Users choose one of three languages by 'flying' over to the language and clicking 'Shift'. 


## Toggle Words 

Once a level has been chosen, Duo will travel to that country. There, there will be a sentence for Duo to translate, plus several associated words.

![Country Image](readmeResources/homepage.png)

Duo 'toggles' words by colliding with them and pressing 'Shift'. They will flip between their foreign translation and their English translation. Notice that in the top right, the word in the Sentence string will turn yellow when the word has been 'toggled'.
![Toggled Image](readmeResources/toggled.png)

We achieve this by going through each letter in the sentence, and looping through each of the three word hints on the board. If there's a match, we replace the word in the sentence with a 'span' wrapped version, so that we can target it with CSS each time we interact with a word.
 
![Make Sentence Logic](readmeResources/makeSentence.png)



## Submitting a Guess 

The point of 'JuoDuo' is to translate sentences! When you correctly submit a guess, the background lights up green

![Correct Image](readmeResources/correctGuess.png)

When you guess incorrectly, the background flashes raspberry red and provides you a hint message based on how close you were and a reconstruction of the sentence with the missing words replaced with underscores:

![Incorrect Image](readmeResources/closeGuess.png)

We handle this in the HandleSubmit function. 

![HandleSubmit Image](readmeResources/handleSubmit.png)

After flashing the background red, we create an empty string variable, closeGuess. We're going to start builidng out a reconstructed sentence, with underscores in place of words we guessed incorrectly. Of course, we don't care about capitilization too much, so I convert each word to its lowerCase version before comparing.

Next, we split up the user submitted guess and check each word against the actual sentence. If it's Correct, we += it to the closeGuess variable. If it's InCorrect, we += an '_' to show that the word at that position in the sentence was incorrect. We also keep track each time we add an '_' with a counter, to know *how* close a guess it was.

## Learn! Learn! Learn!

Language support for French, Spanish and Japanese! 


![Feed Page Image](readmeResources/japan.png)

