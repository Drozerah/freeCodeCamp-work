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