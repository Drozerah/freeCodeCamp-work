/** 
 *  Search and Replace
 *      Perform a search and replace on the sentence using the arguments provided and return the new sentence.
 *
 *      First argument is the sentence to perform the search and replace on.
 * 
 *      Second argument is the word that you will be replacing (before).
 *
 *      Third argument is what you will be replacing the second argument with (after).
 * 
 *      NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
 *     
 *  @see {@link https://www.freecodecamp.org/challenges/search-and-replace}
 * 
 *  @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace}
 * 
 *  Coded by Drozerah :
 *      @see {@link https://www.freecodecamp.org/drozerah}
 * 
 *  Coded time : 08/03/2018
 * 
 *  GitHub repository : 
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/SearchAndReplace/search-and-replace.js}
 *  Note : the ES6 version of this resolved challenge can be found at :
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/SearchAndReplace/search-and-replace-ES6.js}
 */

function myReplace(str, before, after) {

    var newStr;
    // is before first letter uppercase ?
    // get before first letter
    var beforeFirstLetter = before.charAt(0);
    // test if beforeFirstLetter is upper case
    if (beforeFirstLetter == beforeFirstLetter.toUpperCase()) {
        // if true convert after first letter to upper case
        var afterToUpperCase = after.charAt(0).toUpperCase() + after.slice(1);
        newStr = str.replace(before, afterToUpperCase);

    } else {

        newStr = str.replace(before, after);
    }

    console.log("newStr => ", newStr);

    return newStr;
}

myReplace("Let us go to the store", "store", "mall") //should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") //should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling") //should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john") //should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms") //should return "Let us get back to more Algorithms".