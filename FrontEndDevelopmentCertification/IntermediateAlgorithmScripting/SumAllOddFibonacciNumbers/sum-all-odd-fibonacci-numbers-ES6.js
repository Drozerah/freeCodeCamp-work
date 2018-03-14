/** 
 *  Sum All Odd Fibonacci Numbers
 * 
 *  Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 *    
 *  @see {@link https://www.freecodecamp.org/challenges/sum-all-odd-fibonacci-numbers}
 * 
 *  @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder}
 * 
 *  Coded by Drozerah :
 *      @see {@link https://www.freecodecamp.org/drozerah}
 * 
 *  Coded time : 14/03/2018
 * 
 *  GitHub repository : 
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/SumAllOddFibonacciNumbers/sum-all-odd-fibonacci-numbers.js}
 * 
 */

const sumFibs = num => {

    // generate all the Fibonacci's numbers
    let fibs = [0, 1]
    for (let i = 0; i <= num; i++) {
        fibs.push(fibs[i] + fibs[i + 1])
    }
    // filtering & reducing Fibonacci's odd numbers in a range
    return fibs.filter(e => e % 2 !== 0 && e <= num).reduce((a, c) => a + c, 0);

}

console.log(sumFibs(1)); //should return a number.
console.log(sumFibs(1000)); //should return 1785.
console.log(sumFibs(4000000)); //should return 4613732.
console.log(sumFibs(4)); //should return 5.
console.log(sumFibs(75024)); //should return 60696.
console.log(sumFibs(75025)); //should return 135721.