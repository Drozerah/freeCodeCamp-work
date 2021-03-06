/** 
 *  Missing letters
 * 
 *      Find the missing letter in the passed letter range and return it.
 *      If all letters are present in the range, return undefined.
 *    
 *  @see {@link https://www.freecodecamp.org/challenges/missing-letters}
 * 
 *  @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split}
 *  @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt}
 *  @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode}
 *  @see {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map}
 * 
 *  Coded by Drozerah :
 *      @see {@link https://www.freecodecamp.org/drozerah}
 * 
 *  Coded time : 10/03/2018
 * 
 *  GitHub repository : 
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/MissingLetters/missing-letters.js}
 * 
 */

const fearNotLetter = str => {
    // string to array
    const splits = str.split('');
    // convert items to UTF-16 code unit  
    const arrCharCode = splits.map(item => item.charCodeAt(0));

    const expectedCharCode = [];
    let result;

    for (let e = 0; e < str.length; e++) {
        // populate array with linear expected code units  
        expectedCharCode.push(arrCharCode[0] + e);
        const expected = expectedCharCode[e];
        const charCode = arrCharCode[e];
        // compare str characters to expected values
        if (expected != charCode) {
            // return result if linearity is broken
            result = String.fromCharCode(expected);
            break;
        }

    }

    console.log(`result => ${result}`);
    return result;
}

fearNotLetter("abce") //should return "d".
fearNotLetter("abcdefghjklmno") //should return "i".
fearNotLetter("bcd") //should return undefined.
fearNotLetter("yz") //should return undefined.