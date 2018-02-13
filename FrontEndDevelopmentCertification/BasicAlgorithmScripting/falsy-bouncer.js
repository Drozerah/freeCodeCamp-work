/** 
 * Remove all falsy values from an array.
 *   Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 * @see {@link https://www.freecodecamp.org/challenges/falsy-bouncer}
 */


/** @function bouncer
 * @returns new array
 * @param {array} arr
 */
function bouncer(arr) {
    // Don't show a false ID to this bouncer.

    /**
     * This callback is called with the .filter() method.
     * @callback requestCallback
     * @function isTrue 
     * @returns truthy value
     * @param {array} arr
     */
    function isTrue(value) {

        if (value) {
            return value
        }
    }

    /**
     * @method .filter()
     * @param {callback} isTrue
     * @returns new array
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter}
     */
    var filtered = arr.filter(isTrue);
    //console.log("filtered", filtered);
    return filtered;
}


bouncer([7, "ate", "", false, 9]) //should return [7, "ate", 9].
bouncer(["a", "b", "c"]) //should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) //should return [].
bouncer([1, null, NaN, 2, undefined]) //should return [1, 2].