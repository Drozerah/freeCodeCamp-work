/** 
 *
 *  Arguments Optional
 *
 *  Create a function that sums two arguments together. If only one argument is provided, 
 *  then return a function that expects one argument and returns the sum.
 * 
 *  For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
 * 
 *  Calling this returned function with a single argument will then return the sum:
 *  var sumTwoAnd = addTogether(2);
 *  sumTwoAnd(3) returns 5.
 * 
 *  If either argument isn't a valid number, return undefined.  
 * 
 *  @see {@link https://www.freecodecamp.org/challenges/arguments-optional}
 *  @see {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/every}
 *  @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures}
 *  @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments}
 * 
 *  Coded by Drozerah :
 *      @see {@link https://www.freecodecamp.org/drozerah}
 * 
 *  Coded time : 22/03/2018
 * 
 *  GitHub repository : 
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/ArgumentsOptional/arguments-optional.js}
 *
 */
function addTogether() {

    // create a new Array instance from the arguments Object
    const args = Array.from(arguments);

    // check if the typeof all arguments are numbers
    const isNumbersAll = args.every(elm => typeof elm === "number");

    if (isNumbersAll) { // arguments types === numbers  
        return args.length > 1 ? // arguments contains more than one argument
            args.reduce((a, b) => a + b) : // sum arguments else call closure
            sumTwoAnd = opt => typeof opt === "number" ? // check the type of the argument and return the sum else undefined
            opt + args[0] : undefined
    }

    // else : arguments types != numbers
    return 
}


console.log(addTogether(2, 3)); //should return 5.
console.log(addTogether(2)(3)); //should return 5.
console.log(addTogether("http://bit.ly/IqT6zt")); //should return undefined.
console.log(addTogether(2, "3")); //should return undefined.
console.log(addTogether(2)([3])); //should return undefined.