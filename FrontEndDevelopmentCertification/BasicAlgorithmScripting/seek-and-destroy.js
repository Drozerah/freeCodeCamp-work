/** 
 * Seek and Destroy
 *   You will be provided with an initial array (the first argument in the destroyer function),
 *   followed by one or more arguments. Remove all elements from the initial array that are of
 *   the same value as these arguments.
 * @see {@link https://www.freecodecamp.org/challenges/seek-and-destroy}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter}
 * @see {@link https://stackoverflow.com/questions/7056925/how-does-array-prototype-slice-call-work}
 * @see {@link http://es5.github.io/x15.4.html#x15.4.4.10}
 * Coded by Drozerah => https://www.freecodecamp.org/drozerah
 */

/** @function destroyer
 * @returns filtered array
 * @param {array} arr
 */
function destroyer(arr) {
    // Remove all the values
    var toDestroy = Array.prototype.slice.call(arguments, 1);
  
    for (var i = 0; i < arr.length; i++) {
      //console.log(` arr ${i} =>`, arr[i]);
      for (var a = 0; a < toDestroy.length; a++) {
        // console.log(` toDestroy ${a} =>`, toDestroy[a]);
        if (arr[i] === toDestroy[a]) {
          //console.log(` ${arr[i]} === ${toDestroy[a]}`);
          delete arr[i];
        }
      }
    }
    var result = arr.filter(Boolean);
    console.log("arr.filter(Boolean) =>", result);
    return result;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3) //should return [1, 1].
  destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) //should return [1, 5, 1].
  destroyer([3, 5, 1, 2, 2], 2, 3, 5) //should return [1].
  destroyer([2, 3, 2, 3], 2, 3) //should return [].
  destroyer(["tree", "hamburger", 53], "tree", 53) //should return ["hamburger"].