class StringCalculations{

    constructor(private str: string) { }

    findIndexes(subString: string): Array<number>
    {
    let indexes : number[] = [];
    for(var i=0 ; i<this.str.length; i++)
    {
        if(this.str[i]==subString)
        indexes.push(i)
    }
    return indexes;
    }

    getSentences(){        
        return this.str.split('.');
    }

    toUpperCase(sentences : string[]) : string {  
        let convertedSentences : string[] = [] 
        for (let sentence of sentences) {
            let updatedSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
            convertedSentences.push(updatedSentence);
        }
        return convertedSentences.join(".");
    }


 }
   var subString: string = "a";
   var stringCalculations = new StringCalculations( 'typeScript is an open-source programming language.it is developed by Microsoft.typeScript is a superset of JavaScript');
   var result :  Array<number> =  stringCalculations.findIndexes(subString)
   console.log("Occurences of " + subString + " = ", result.length)
   console.log("Indexes of " + subString + " = ", result)

   var sentences = stringCalculations.getSentences();
   console.log("No. of sentences = " + sentences.length);

   console.log("Statements with 1st character in upper case :- " + stringCalculations.toUpperCase(sentences));
   



   