/** 
 *
 *    Smallest Common Multiple     
 *    
 *    Find the smallest common multiple of the provided parameters that can be evenly divided by
 *    both, as well as by all sequential numbers in the range between these parameters.
 * 
 *    The range will be an array of two numbers that will not necessarily be in numerical order.
 *    e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
 * 
 *     
 *  @see {@link https://www.freecodecamp.org/challenges/smallest-common-multiple}
 *  @see {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/min}
 *  @see {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/every}
 *  @see {@link https://coderwall.com/p/_ggh2w/the-array-native-every-filter-map-some-foreach-methods}
 *  @see {@link https://onechapteraday.fr/javascript-recursive-functions/}
 * 
 *  Coded by Drozerah :
 *      @see {@link https://www.freecodecamp.org/drozerah}
 * 
 *  Coded time : 18/03/2018
 * 
 *  GitHub repository : 
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/SmallestCommonMultiple/smallest-common-multiple.js}
 *  
 *  Note : the ES6 version of this resolved challenge can be found at :
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/SmallestCommonMultiple/smallest-common-multiple-ES6.js}
 */

function smallestCommons(arr) {

    // data setting 
    var data = [];
    var min = Math.min(...arr);
    var max = Math.max(...arr);

    for (var i = min; i <= max; i++) {
        data.push(i);
    }
    // variables setting
    var proceed = true;
    var multiple = max;
    var result;

    // return multiple if divisible by all numbers between min and max only.
    while (proceed) {

        isDivisible = data.every(function (elm) {

            console.log('result =>', multiple);
            return multiple % elm === 0;
        });
        if (isDivisible) {
            proceed = false;
            return multiple;
        } else {
            multiple += max;
        }
    }

}

//smallestCommons([1, 5]) //should return 60.
//smallestCommons([5, 1]) //should return 60.
//smallestCommons([1, 13]) //should return 360360.
smallestCommons([23, 18]) //should return 6056820.