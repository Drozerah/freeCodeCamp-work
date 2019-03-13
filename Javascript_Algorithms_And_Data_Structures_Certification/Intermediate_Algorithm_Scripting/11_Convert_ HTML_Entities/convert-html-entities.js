/** 
 *  Convert HTML Entities
 * 
 *  Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to 
 *      their corresponding HTML entities.
 *    
 *  @see {@link https://www.freecodecamp.org/challenges/convert-html-entities}
 * 
 *  @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp}
 *  @see {@link http://dev.w3.org/html5/html-author/charref}
 *  @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace}
 * 
 *  Coded by Drozerah :
 *      @see {@link https://www.freecodecamp.org/drozerah}
 * 
 *  Coded time : 14/03/2018
 * 
 *  GitHub repository : 
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/convert-html-entities.js}
 * 
 */
function convertHTML(str) {

    // create literal object 
    var data = [
        {find:'&',replace:'&​amp;'},
        {find:'<',replace:'&​lt;'},
        {find:'>',replace:'&​gt;'},
        {find:'"',replace:'&​quot;'},
        {find:"'",replace:'&​apos;'}
    ];
    // find and replace using RegExp, for loop and data array
    for (var i = 0; i < data.length; i++) {
       str = str.replace(new RegExp(data[i].find, 'g'), data[i].replace);     
    }
    
    // or simply
    // str = str.replace(/&/g,'&​amp;')
    //     .replace(/</g,'&​lt;')
    //     .replace(/>/g,'&​gt;')
    //     .replace(/"/g,'&​quot;')
    //     .replace(/'/g,'&​apos;');

    console.log(str);
    return str;
  }

convertHTML("Dolce & Gabbana") //should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") //should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") //should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') //should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List") //should return Shindler&​apos;s List.
convertHTML("<>") //should return &​lt;&​gt;.
convertHTML("abc") //should return abc.