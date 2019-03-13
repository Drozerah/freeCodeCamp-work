/** 
 *
 *    Binary Agents
 * 
 *      Return an English translated sentence of the passed binary string.
 *      The binary string will be space separated.
 *   
 *  @see {@link https://www.freecodecamp.org/challenges/binary-agents}
 *  @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt}
 *  @see {@link https://stackoverflow.com/questions/2803145/is-there-0b-or-something-similar-to-represent-a-binary-number-in-javascript}
 *  @see {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce}
 * 
 *  Coded by Drozerah :
 *      @see {@link https://www.freecodecamp.org/drozerah}
 * 
 *  Coded time : 21/03/2018
 * 
 *  GitHub repository : 
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/BinaryAgents/binary-agents.js}
 *
 *  Note : the ES6 version of this resolved challenge can be found at :
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/BinaryAgents/binary-agents-ES6.js}
 *
 */

function binaryAgent(str) {
    // split string and reduce the array 
    // convert binary to hexadecimal values
    // return strings from characters code
    return str.split(' ').reduce(function (passedElm, elm) {
        return passedElm + String.fromCharCode(parseInt(elm, 2));
    }, '');

}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
//should return "Aren't bonfires fun!?"
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));
//should return "I love FreeCodeCamp!"