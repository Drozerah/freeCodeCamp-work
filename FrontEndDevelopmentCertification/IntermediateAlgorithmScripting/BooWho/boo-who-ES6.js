/** 
 *  Boo who
 * 
 *  Check if a value is classified as a boolean primitive. Return true or false.
 *  Boolean primitives are true and false.
 *    
 *  @see {@link https://www.freecodecamp.org/challenges/boo-who}
 * 
 *  @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean}
 *  @see {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/valueOf}
 *  @see {@link http://adripofjavascript.com/blog/drips/the-difference-between-boolean-objects-and-boolean-primitives-in-javascript.html}
 * 
 *  Coded by Drozerah :
 *      @see {@link https://www.freecodecamp.org/drozerah}
 * 
 *  Coded time : 13/03/2018
 * 
 *  GitHub repository : 
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/BooWho/boo-who.js}
 * 
 *  Note : the ES6 version of this resolved challenge can be found at :
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/BooWho/boo-who-ES6.js}
 */

function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    if (typeof (bool) === "boolean") {

        return true;
    }

    return false;
}

booWho(null);

booWho(true) //should return true.
booWho(false) //should return true.
booWho([1, 2, 3]) //should return false.
booWho([].slice) //should return false.
booWho({"a": 1}) //should return false.
booWho(1) //should return false.
booWho(NaN) //should return false.
booWho("a") //should return false.
booWho("true") //should return false.
booWho("false") //should return false.