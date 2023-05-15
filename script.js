var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];



function clickMe(element){
    var randomIndex = Math.floor(Math.random()*(lifesAnswers.length-1));
    element.innerText = lifesAnswers[randomIndex];
    console.log(element.innerText);
}




function d6(min,max) {
    var roll = Math.ceil(Math.random()*max);
    return roll;
}
    
//var playerRoll = d6(1,6);
//console.log("The player rolled: " + playerRoll);

//function clickMe(){


//}