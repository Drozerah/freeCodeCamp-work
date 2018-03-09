/** 
 *  Pig Latin
 *      Translate the provided string to pig latin.
 *      Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
 *      If a word begins with a vowel you just add "way" to the end.
 *      Input strings are guaranteed to be English words in all lowercase. 
 *    
 *  @see {@link https://www.freecodecamp.org/challenges/pig-latin}
 * 
 *  @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split}
 *  @see {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/splice}
 *  @see {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter}
 *  @see {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/do...while}
 * 
 *  Coded by Drozerah :
 *      @see {@link https://www.freecodecamp.org/drozerah}
 * 
 *  Coded time : 09/03/2018
 * 
 *  GitHub repository : 
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/PigLatin/pig-latin.js}
 * 
 *  Note : the ES6 version of this resolved challenge can be found at :
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/PigLatin/pig-latin-ES6.js}
 */

function translatePigLatin(str) {

    // split string characters into an array
    var splits = str.split('');

    var diagram = [];
    var ay = "ay";
    var way = "way";

    // sort characters like consonants or vowels and construct a 1/0 representation of the filtered string
    var filtered = splits.filter(function (letter) {

        if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
            diagram.push(1);
        } else {
            diagram.push(0);
        }

    });

    // if the firsts character strings are consonants
    if (diagram[0] == 0) {
        var i = 0;
        do {
            // push first consonant or consonant cluster caracters to the end of the split word
            splits.push(splits[i]);
            // remove it/them from their firsts positions
            splits.splice(i, 1, '');
            i += 1;
        } while (diagram[i] < 1);
        // add ay to the end
        console.log("splits =>", splits.join('') + ay);
        return splits.join('') + ay;
    }
    // else, if the word begins with a vowel, add way to the end
    console.log("else =>", splits.join('') + way);
    return splits.join('') + way;

    //return str;
}

translatePigLatin("california") //should return "aliforniacay".
translatePigLatin("paragraphs") //should return "aragraphspay".
translatePigLatin("glove") //should return "oveglay".
translatePigLatin("algorithm") //should return "algorithmway".
translatePigLatin("eight") //should return "eightway".