/** 
 *  Steamroller ES6
 * 
 *     Flatten a nested array. You must account for varying levels of nesting.
 *    
 *  @see {@link https://www.freecodecamp.org/challenges/steamroller}
 * 
 *  @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray}
 *  @see {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce}
 * 
 *  Coded by Drozerah :
 *      @see {@link https://www.freecodecamp.org/drozerah}
 * 
 *  Coded time : 20/03/2018
 * 
 *  GitHub repository : 
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/Steamroller/steamroller.js}
 * 
 */

const steamrollArray = arr => (toFlatten = arr => Array.isArray(arr) ? arr.reduce((passedElm, currentElm) => passedElm.concat(toFlatten(currentElm)), []) : arr)(arr);

console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
