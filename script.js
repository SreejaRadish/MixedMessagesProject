const emotion = {
    emotionType : ['Happiness','Sadness','Anger'],
    happyMessages : ['Spread Happiness','Help Others','Spread Joy'],
    sadMessages : ['Stay strong','This will pass too','You are awesome','You are Unique'],
    angerMessages : ['Calm Down' ,'Dont hurt Yourself','Calmness is a super power'],
    randomNum(num){
        return Math.floor(Math.random()* num );
    },
   
    createMessage(){
        let emotionIndex=this.randomNum(this.emotionType.length);
        let messageIndex=undefined;
        switch(emotionIndex) {
          case 0 :
            messageIndex = this.randomNum(this.happyMessages.length);
            return `You are happy now so ${this.happyMessages[messageIndex]}`;
         case 1 :
            messageIndex = this.randomNum(this.sadMessages.length);
            return `Don't worry ${this.sadMessages[messageIndex]}`;   
         case 2 :
            messageIndex = this.randomNum(this.angerMessages.length);
            return `Don't be angry ${this.angerMessages[messageIndex]}`;     
         default :
            return 'No Emotions';   
      }


    }
};
console.log(emotion.createMessage());