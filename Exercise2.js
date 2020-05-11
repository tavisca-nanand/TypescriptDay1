var StringCalculations = /** @class */ (function () {
    function StringCalculations(str) {
        this.str = str;
    }
    StringCalculations.prototype.findIndexes = function (subString) {
        var indexes = [];
        for (var i = 0; i < this.str.length; i++) {
            if (this.str[i] == subString)
                indexes.push(i);
        }
        return indexes;
    };
    StringCalculations.prototype.getSentences = function () {
        return this.str.split('.');
    };
    StringCalculations.prototype.toUpperCase = function (sentences) {
        var convertedSentences = [];
        for (var _i = 0, sentences_1 = sentences; _i < sentences_1.length; _i++) {
            var sentence = sentences_1[_i];
            var updatedSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
            convertedSentences.push(updatedSentence);
        }
        return convertedSentences.join(".");
    };
    return StringCalculations;
}());
var subString = "a";
var stringCalculations = new StringCalculations('typeScript is an open-source programming language.it is developed by Microsoft.typeScript is a superset of JavaScript');
var result = stringCalculations.findIndexes(subString);
console.log("occurences of " + subString + " = ", result.length);
console.log("indexes of " + subString + " = ", result);
var sentences = stringCalculations.getSentences();
console.log("No. of sentences = " + sentences.length);
console.log("statements with 1st character in upper case :- " + stringCalculations.toUpperCase(sentences));
