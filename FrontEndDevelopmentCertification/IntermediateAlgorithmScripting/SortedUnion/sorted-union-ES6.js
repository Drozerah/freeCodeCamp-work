/** 
 *  Sorted Union
 * 
 *      Write a function that takes two or more arrays and returns a new array of unique 
 *      values in the order of the original provided arrays.
 * 
 *      In other words, all values present from all arrays should be included in their 
 *      original order, but with no duplicates in the final array.
 * 
 *      The unique numbers should be sorted by their original order, but the final 
 *      array should not be sorted in numerical order.
 *    
 *  @see {@link https://www.freecodecamp.org/challenges/sorted-union}
 * 
 *  @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments}
 *  @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters}
 *  @see {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/slice}
 * 
 *  Coded by Drozerah :
 *      @see {@link https://www.freecodecamp.org/drozerah}
 * 
 *  Coded time : 13/03/2018
 * 
 *  GitHub repository : 
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/SortedUnion/sorted-union.js}
 * 
 */

const uniteUnique = (...arr) => {

    // get the sub-arrays by their indexes and flatten them 
    // into a new array with a for loop and a .filter() method
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const filter = arr[i].filter(value => newArray.push(value));

    }

    // Remove Duplicates From JavaScript Array Using Filter Method
    const uniqueArray = newArray.filter((element, index, selfArray) => {
        // comparing each element's indexes from the filtered array to the indexes
        // of the same element in the self array object being traversed (selfArray). 
        // In the case of a duplicate element, the index of the second same element 
        // is ignored because it is higher (not equal) than the first met index of 
        // that same element found in the filtered array
        return index == selfArray.indexOf(element);
    });

    console.log("uniqueArray =>", uniqueArray);
    return uniqueArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) //should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) //should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) //should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) //should return [1, 2, 3, 5, 4, 6, 7, 8]