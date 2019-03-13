/** 
 *  DNA Pairing
 *      The DNA strand is missing the pairing element. Take each character, 
 *      get its pair, and return the results as a 2d array.
 * 
 *      Base pairs are a pair of AT and CG. Match the missing element to the
 *      provided character.
 * 
 *      Return the provided character as the first element in each array.
 *      For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
 * 
 *      The character and its pair are paired up in an array, and all the arrays 
 *      are grouped into one encapsulating array.
 *    
 *  @see {@link https://www.freecodecamp.org/challenges/dna-pairing}
 * 
 *  @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split}
 *  @see {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/indexOf}
 *  @see {@link https://stackoverflow.com/questions/15722433/javascript-copy-array-to-new-array}
 * 
 *  Coded by Drozerah :
 *      @see {@link https://www.freecodecamp.org/drozerah}
 * 
 *  Coded time : 09/03/2018
 * 
 *  GitHub repository : 
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/DNAPairing/dna-pairing.js}
 * 
 *  Note : the ES6 version of this resolved challenge can be found at :
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/DNAPairing/dna-pairing-ES6.js}
 */

function pairElement(str) {

    // split str in new array
    var splits = str.split('');
    // set nucleo bases array
    var nucleoBases = ['A', 'C', 'G', 'T'];
    // return a reversed shallow copy of nucleoBases array
    var reversedNucleoBases = nucleoBases.slice(0).reverse();
    // set final result array
    var result = [];
    // filter splits
    var filter = splits.filter(function (base) {
        // get str base index position from nucleo bases array
        var index = nucleoBases.indexOf(base);
        // set intermediate result array
        var arr = [];
        // push to the intermediate result array the values bound to the same
        //  index in the arrays of nucleoBases and reversed NucleoBases
        arr.push(nucleoBases[index]);
        arr.push(reversedNucleoBases[index]);
        // push the intermediate results to the final result array
        result.push(arr)
    });
    console.log('result', result);
    return result;
}

pairElement("ATCGA") //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].