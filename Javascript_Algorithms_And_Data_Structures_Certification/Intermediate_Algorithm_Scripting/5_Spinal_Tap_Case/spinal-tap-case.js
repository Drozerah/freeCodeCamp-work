/** 
 *  Spinal Tap Case
 * 
 *  Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 *    
 *  @see {@link https://www.freecodecamp.org/challenges/convert-html-entities}
 * 
 *  @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp}
 *  @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace}
 * 
 *  Coded by Drozerah :
 *      @see {@link https://www.freecodecamp.org/drozerah}
 * 
 *  Coded time : 14/03/2018
 * 
 *  GitHub repository : 
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/spinal-tap-case.js}
 * 
 */
function spinalCase(str) {
    // Replace low-upper case with low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

    // Split on whitespace and underscores and join with dash
    str = str.toLowerCase().split(/(?:_| )+/).join('-');

    console.log('=> ',str);
    return str;
  }
  
  spinalCase("This Is Spinal Tap") //should return "this-is-spinal-tap".
  spinalCase("thisIsSpinalTap") //should return "this-is-spinal-tap".
  spinalCase("The_Andy_Griffith_Show") //should return "the-andy-griffith-show".
  spinalCase("Teletubbies say Eh-oh") //should return "teletubbies-say-eh-oh".
  spinalCase("AllThe-small Things") //should return "all-the-small-things".