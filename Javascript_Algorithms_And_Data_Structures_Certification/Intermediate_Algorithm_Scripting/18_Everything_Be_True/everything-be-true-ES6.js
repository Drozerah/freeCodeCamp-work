/** 
 *
 *  Everything Be True
 *
 *  Check if the predicate (second argument) is truthy on all elements of a collection 
 *  (first argument).
 *  Remember, you can access object properties through either dot notation or [] notation.
 *   
 *  @see {@link https://www.freecodecamp.org/challenges/everything-be-true}
 *  @see {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/every}
 * 
 *  Coded by Drozerah :
 *      @see {@link https://www.freecodecamp.org/drozerah}
 * 
 *  Coded time : 21/03/2018
 * 
 *  GitHub repository : 
 *      @see {@link https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/EverythingBeTrue/everything-be-true.js}
 *
 */

function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every(elm => elm[pre])

}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
//should return true.
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
//should return false.
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));
//should return false.
console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat"));
//should return false
console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"));
//should return true
console.log(truthCheck([{"single": "yes"}], "single") );
//should return true
console.log(truthCheck([{"single": ""}, {"single": "double"}], "single"));
//should return false
console.log(truthCheck([{"single": "double"}, {"single": undefined}], "single"));
//should return false
console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"));
//should return false