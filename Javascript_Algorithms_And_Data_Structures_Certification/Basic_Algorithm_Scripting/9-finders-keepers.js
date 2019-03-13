/** 
 *
 *      Finders Keepers     
 *    
 *      Create a function that looks through an array (first argument) and returns the first element
 *      in the array that passes a truth test (second argument).
 * 
 *     
 *  @see {@link https://www.freecodecamp.org/challenges/finders-keepers}
 *  @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter}
 * 
 *  Coded by Drozerah :
 *      @see {@link https://www.freecodecamp.org/drozerah}
 *      @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter}
 *      @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift}
 * 
 *  Coded time : 19/03/2018
 * 
 *  GitHub repository : 
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/finders-keepers.js}
 */

/* function findElement(arr, func) {
    var num = 0;
    num = arr.filter(func);
    console.log('num', num[0]);
    return num[0];
} */

// or simply

function findElement(arr, func) {
    return arr.filter(func).shift();
}

findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
}) //should return 8.
findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
}) //should return undefined.