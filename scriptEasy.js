
 const basicEmotions = ['Happiness','Sadness','Anger'];

    happyMessages = ['Spread Happiness','Help Others','Spread Joy'];
    sadMessages = ['Stay strong','This will pass too','You are awesome','You are Unique'];
    angerMessages = ['Calm Down' ,'Dont hurt Yourself','Calmness is a super power'];
let finalMessage=[];
let randomNum = (num) => {
return Math.floor(Math.random()* num );
};
 let selectEmotion=() => {
     const randomChoice=randomNum(basicEmotions.length);
     return randomChoice;

};
const selectMessage =() => {
    let messageIndex=undefined;
    //Helper function to choose emotion
let choiceNum=selectEmotion();
if(choiceNum === 0) {
    messageIndex=randomNum(happyMessages.length);
    finalMessage.push(`You are happy now so ${happyMessages[messageIndex]}`);
    return finalMessage;
}
else if(choiceNum === 1){
    messageIndex=randomNum(sadMessages.length);
    finalMessage.push(`Don't worry ${sadMessages[messageIndex]}`);
    return finalMessage;
}
else if(choiceNum === 2){
    messageIndex=randomNum(angerMessages.length);
    finalMessage.push(`Don't be angry ${angerMessages[messageIndex]}`);
    return finalMessage;
}
};
console.log(selectMessage());
