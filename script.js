
 const basicEmotions = ['Happiness','Sadness'];
const messages = {
    happyMessages: ['Spread Happiness','Help Others','Spread Joy'],
    sadMessages : ['Stay strong','This will pass too','You are awesome','You are Unique']
};
let finalMessage=[];
let randomNum = (num) => {
return Math.floor(Math.random()* num );
};
 let selectEmotion=() => {
for (let emotion in basicEmotions ){
    switch(emotion) {
        case 'Happiness' :
            //InspiringMessage.push()
            console.log('Happy');
        
        case 'Sadness' :
            console.log('Happy');
       
        default :
        console.log('No Emotions');  
        break;   

    }
}
};
console.log(selectEmotion());
