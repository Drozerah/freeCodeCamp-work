/** 
 *  Sum All Odd Fibonacci Numbers
 * 
 *  Given a positive integer num, return the sum of all odd Fibonacci numbers that 
 *  are less than or equal to num.
 * 
 *  The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number
 *  in the sequence is the sum of the two previous numbers. The first six numbers of the 
 *  Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
 * 
 *  For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
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