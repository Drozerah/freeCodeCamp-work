/** 
 * Where do I belong
 *   Return the lowest index at which a value (second argument) should be inserted into an array (first argument) 
 *   once it has been sorted. The returned value should be a number.
 *   @see {@link https://www.freecodecamp.org/challenges/where-do-i-belong}
 * 
 *   @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort}
 *   @see {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/indexOf}
 *
 *   Coded by Drozerah => https://www.freecodecamp.org/drozerah
 */

/** @function getIndexToIns
 * @param {array} arr
 * @param {number} num
 * @returns number
 */

function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
  
    // push num to arr 
    arr.push(num);
    // sort arr
    var sorted = arr.sort(function (a, b) {
      return a - b;
    });
    // get index of num in arr
    var index = sorted.indexOf(num);
  
    //console.log("arr.sort() + indexOf(num)  =>", sorted, index, typeof index);
  
    return index;
  }
  
  getIndexToIns([10, 20, 30, 40, 50], 35) //should return 3.
  getIndexToIns([10, 20, 30, 40, 50], 30) //should return 2.
  getIndexToIns([40, 60], 50) //should return 1.
  getIndexToIns([3, 10, 5], 3) //should return 0.
  getIndexToIns([5, 3, 20, 3], 5) //should return 2.
  getIndexToIns([2, 20, 10], 19) //should return 2.
  getIndexToIns([2, 5, 10], 15) //should return 3