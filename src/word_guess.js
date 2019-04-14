function handleSubmit(){
    debugger
    const guess = document.myform.wordGuess.value;
    event.preventDefault();
    switch(level){
        case level === 2:
            if (guess === "I am a boy"){
                return true
            }
        case level === 3:
            if (guess === "Ready to eat"){
                return true
            }
        default:
        return false;
    }
}

// export default handleSubmit