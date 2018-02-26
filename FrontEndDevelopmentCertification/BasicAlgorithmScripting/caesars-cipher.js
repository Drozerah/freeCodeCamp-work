
/** 
 * Caesars Cipher
 *   One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
 *   In a shift cipher the meanings of the letters are shifted by some set amount.
 * 
 *   @see {@link https://www.freecodecamp.org/challenges/caesars-cipher}
 * 
 *   @see {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split}
 *   @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt}
 *   @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode}
 *   @see {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map}
 * 
 *   Coded by Drozerah => https://www.freecodecamp.org/drozerah
 */

/** @function rot13
 * @param {string} str
 * @returns string
 */
function rot13(str) {
    // split str returns an array
    var arr = str.split('');
    //console.log(arr);
  
    /** @function rotateIndex
     * @param {numbers} params
     * @returns numbers
     */
    function rotateIndex(params) {
        // alphabet starting position
        var start = 65;
        // alphabet end position + 1 (because array index start at 0)
        var end = 90+1;
        // rotate index from starting point 
        var x = start - params;
        // rotate index from end point
        var result = end - x;
        return result;   
    }
    /** @function treatCharCode
     * @param {numbers} params
     * @returns numbers
     */  
    function treatCharCode(item) {
        // get item charCode
        item = item.charCodeAt(0);
        // do nothing if item is a !?. or white space
        if (item == 32 || item == 33 || item == 46 || item == 63) {
            item = item;
        } else {
            // Replacing by the 13th prior index places along in the alphabet
            item = item-13; 
            // if item goes under of the alphabet range A = 65 to Z = 90
            // call rotateIndex function to stay in the alphabet range 
            if (item < 65) {
              item = rotateIndex(item);  
            }
    
        }
  
        // revert charCode to string item
        item = String.fromCharCode(item);
        return item;
    }
    
    // treat initital string pased to rot13 function with .map() array method then built a new string
    outPut = arr.map(treatCharCode).join('');
    
    console.log(outPut);
    // output new string
    return outPut;
  }
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC") //should decode to "FREE CODE CAMP"
  rot13("SERR CVMMN!") //should decode to "FREE PIZZA!"
  rot13("SERR YBIR?") //should decode to "FREE LOVE?"
  rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") //should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."