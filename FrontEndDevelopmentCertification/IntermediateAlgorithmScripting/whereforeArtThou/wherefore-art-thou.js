/** 
 *  Wherefore art thou
 *      Make a function that looks through an array of objects (first argument) and returns
 *      an array of all objects that have matching property and value pairs (second argument). 
 *      Each property and value pair of the source object has to be present in the object from
 *      the collection if it is to be included in the returned array.
 *      
 *      For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
 *      { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second
 *      argument is { last: "Capulet" }, then you must return the third object from the array 
 *      (the first argument), because it contains the property and its value, that was passed on
 *      as the second argument.
 * 
 *   @see {@link https://www.freecodecamp.org/challenges/wherefore-art-thou}
 * 
 *   @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object}
 *   @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty}
 *   @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys}
 * 
 *   Coded by Drozerah :
 *      @see {@link https://www.freecodecamp.org/drozerah}
 * 
 *   Coded time : 08/03/2018
 * 
 *   GitHub repository => 
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/whereforeArtThou/wherefore-art-thou.js}
 *   Note : the ES6 version of this resolved challenge can be found at :
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/whereforeArtThou/wherefore-art-thou-ES6.js}
 */


function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line

    // get size of object source
    var srcSize = Object.keys(source).length;

    // get source keys and values pairs
    var srcKeys = Object.keys(source);
    var srcValues = Object.keys(source).map(function (k) {
        return source[k];
    });

    // loop thru source object
    for (var i = 0; i < srcSize; i++) {

        arr = collection.filter(function (collElm) {

            // boolean check if current collElm as same key as srcKeys 
            var collElmHasKey = collElm.hasOwnProperty(srcKeys[i]);
            // get current collElm where key matches the srcKey at the current index                 
            var collElmValue = collElm['' + srcKeys[i] + ''];
            // return filtered collElm if collElm as same key as srcKeys and if its values corresponds to the srcValues
            if (collElmHasKey && srcValues[i] == collElmValue) {
                return collElm;
            }
        });
    }
    // Only change code above this line
    console.log('result =>', arr);
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
//should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) 
//should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) 
//should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) 
//should return [{ "a": 1, "b": 2, "c": 2 }].