/** 
 *
 *    Drop it
 *      
 *    Drop the elements of an array (first argument), starting from the front, until the 
 *    predicate (second argument) returns true.
 * 
 *    The second argument, func, is a function you'll use to test the first elements of the 
 *    array to decide if you should drop it or not.
 * 
 *    Return the rest of the array, otherwise return an empty array.
 *   
 *  @see {@link https://www.freecodecamp.org/challenges/drop-it}
 *  @see {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/splice}
 *  @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/argumentshttps://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/splice}
 * 
 *  Coded by Drozerah :
 *      @see {@link https://www.freecodecamp.org/drozerah}
 * 
 *  Coded time : 19/03/2018
 * 
 *  GitHub repository : 
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/DropIt/drop-it.js}
 *
 *  Note : the ES6 version of this resolved challenge can be found at :
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/DropIt/drop-it-ES6.js}
 *
 */
function dropElements(arr, func) {
    // Drop them elements.

    var proceed = true;
    var len = arr.length;
    var i = 0;
    var toRemove = 0;

    while (proceed) {

        if (func(arr[i])) {
            arr.splice(0, toRemove);
            proceed = false
        } else if (i > len) {
            arr = [];
            proceed = false  
        }
        toRemove++;        
        i++;
    }
    console.log('return =>', arr);
    return arr;

}


dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
})
//should return [3, 4].
dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
})
//should return [1, 0, 1].
dropElements([1, 2, 3], function (n) {
    return n > 0;
})
//should return [1, 2, 3].
dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
})
//should return [].
dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
})
//should return [7, 4].
dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
})
//should return [3, 9, 2].