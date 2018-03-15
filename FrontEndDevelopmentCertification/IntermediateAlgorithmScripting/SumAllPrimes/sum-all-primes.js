/** 
 *
 *      Sum All Primes     
 * 
 *      Sum all the prime numbers up to and including the provided number.
 * 
 *      A prime number is defined as a number greater than one and having only 
 *      two divisors, one and itself. For example, 2 is a prime number because it's
 *      only divisible by one and two.
 * 
 *      The provided number may not be a prime. 
 * 
 *     
 *  @see {@link https://www.freecodecamp.org/challenges/sum-all-primes}
 * 
 *  Coded by Drozerah :
 *      @see {@link https://www.freecodecamp.org/drozerah}
 * 
 *  Coded time : 15/03/2018
 * 
 *  GitHub repository : 
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/SumAllPrimes/sum-all-primes.js}
 * 
 *  Note : the ES6 version of this resolved challenge can be found at :
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/SumAllPrimes/sum-all-primes-ES6.js}
 *
 */

function sumPrimes(num) {

    // generate and populate an array with numbers in a range
    var primes = [];    
    for (var i = 2; i <= num; i++) {
        primes.push(i);
    }
    // filtering primes and reduce all of them 
    primes = primes.filter(function(e){
        return (function(n){

            if (n < 2) return 0;
            
            for (var i = 2; i < n; i++) {

              if (n % i == 0) return 0;

            }

            return n; // return primes only using IIFE
        })(e);
    }).reduce(function(a,c){
        return a + c; // sum primes with reduce method
    },0);

    console.log(primes);
    
    return primes; 
}
  
sumPrimes(10) //should return 17.
sumPrimes(977) //should return 73156.