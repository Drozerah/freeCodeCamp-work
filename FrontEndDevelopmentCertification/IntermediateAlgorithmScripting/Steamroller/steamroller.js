/** 
 *  Steamroller 
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
 *  Note : the ES6 version of this resolved challenge can be found at :
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/Steamroller/steamroller-ES6.js}
 */

function steamrollArray(arr) {

    /* Hacky way
      // 1 stringify the array
      // 2 use regEx to remove array like symbols
      var str = "[" + JSON.stringify(arr).replace(/\[],/g,'').replace(/\[|]/g,'') + "]";
      // 3 reverse the process

      console.log('return =>', JSON.parse(str) );
      return JSON.parse(str);
    */

    // Functional programming way using higher order function .reduce + recursion
    return (function toFlatten(arr) {
        if (Array.isArray(arr)) {
        return arr.reduce(function(passedElm,currentElm){
          return passedElm.concat(toFlatten(currentElm));
          }, []);
        } else {
          return arr;
        }
    })(arr);
}

console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));

