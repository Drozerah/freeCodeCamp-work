
/** 
 * Sum All Numbers in a Range
 *   We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
 *   The lowest number will not always come first.
 * 
 *   @see {@link https://www.freecodecamp.org/challenges/sum-all-numbers-in-a-range}
 * 
 *   @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort}
 *   @see {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/slice}
 *   @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max}
 *   @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min}
 *   @see {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce}
 * 
 *   Coded by Drozerah => https://www.freecodecamp.org/drozerah
 */

function sumAll(arr) {
    // sort numbers in array
    arr.sort(function(a, b) {
        return a - b;
    });
    // get min et max from arr
    var min = arr[0];
    var max = arr.slice(-1)[0];
    // set new arr
    var array=[];
    // populate new array between min & max
    for (let i = (min-1) ; i < max; i++) {
        array.push(i+1);       
    }
    console.log("new array => ",array)
    // get the sum of all number in array
    // using .reduce() method which is a higher order function

    // first approach 
    // apply an anonymous sum function to the .reduce() method
    var sum = array.reduce(function(a,b){
        return a + b;
    });
    // second approach
    // apply ES6 sum arrow function to the .reduce() method as arr new value
    arr = array.reduce((a,b) => a + b);

    //console.log("first approach returns => ",sum)
    //console.log("second approach returns => ",arr)
    //return sum
    return arr;
}

sumAll([1, 4]) //should return 10.
sumAll([4, 1]) //should return 10.
sumAll([5, 10]) //should return 45.
sumAll([10, 5]) //should return 45.