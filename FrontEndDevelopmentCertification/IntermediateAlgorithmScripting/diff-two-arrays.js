/** 
 *  Diff Two Arrays
 *   Compare two arrays and return a new array with any items only found in one of the 
 *   two given arrays, but not both. In other words, return the symmetric difference of
 *   the two arrays.
 * 
 *   @see {@link https://www.freecodecamp.org/challenges/sum-all-numbers-in-a-range}
 * 
 *   @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter}
 *   @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf}
 *   @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat}
 * 
 *   Coded by Drozerah => https://www.freecodecamp.org/drozerah
 */

function diffArray(arr1, arr2) {
    // compare the arrays between themselves and get their differences
    // set the arrays to compare as parameters of a named function 
    function filterArrays(arg1, arg2) {
        // apply the .filter() method to the first array or argument
        return arg1.filter(function (value) {
            // check if each items values from the first array are matching
            // each items values from the second array
            var item = arg2.indexOf(value);
            if (item === -1) {
                // if not, push the value into the new array created by the .filter() method
                return value;
            }
        });
    }
    // apply filterArrays function
    var a = filterArrays(arr1, arr2);
    var b = filterArrays(arr2, arr1);
    //console.log("a => ",a);
    //console.log("b => ",b);
    // merge results into new array then output them
    var output = a.concat(b);
    //console.log("output => ", output);
    return output;
    // done !
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);