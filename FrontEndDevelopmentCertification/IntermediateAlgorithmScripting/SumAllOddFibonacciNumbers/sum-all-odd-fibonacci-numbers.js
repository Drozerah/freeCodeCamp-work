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
 *  Note : the ES6 version of this resolved challenge can be found at :
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/SumAllOddFibonacciNumbers/sum-all-odd-fibonacci-numbers-ES6.js}
 */

function sumFibs(num) {

    // generate all the Fibonacci's numbers
    var fibs = [0, 1]

    for (var i = 0; i <= num; i++) {
        fibs.push(fibs[i] + fibs[i + 1])
    }
    // filtering & reducing Fibonacci's odd numbers in a range
    fibs = fibs.filter(function (e) {

        return e % 2 !== 0 && e <= num;

    }).reduce(function (accumulator, currentValue) {

        return accumulator + currentValue;

    }, 0);
    console.log("filtered =>", fibs);
    return fibs;
}

sumFibs(1) //should return a number.
sumFibs(1000) //should return 1785.
sumFibs(4000000) //should return 4613732.
sumFibs(4) //should return 5.
sumFibs(75024) //should return 60696.
sumFibs(75025) //should return 135721.