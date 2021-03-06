// Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
    // remove all non-alphanumeric characters from string + change to lowerCase 
    function toClean(str) {
        return str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    }
    var cleanedString = toClean(str);

    // reverse cleanedString to  
    function reverseString(str) {
        return str.split("").reverse().join("");
    }
    var reverseCleanedString = reverseString(cleanedString);

    // check if palindrome
    if (cleanedString === reverseCleanedString) {
        console.log("true")
        return true;
    } else {
        console.log("false")
        return false;
    }
}


palindrome("eye") //should return true.git
    // palindrome("_eye") //should return true.
    // palindrome("race car") //should return true.
    // palindrome("not a palindrome") //should return false.
    // palindrome("A man, a plan, a canal. Panama") should return true.
    // palindrome("never odd or even") //should return true.
    // palindrome("nope") //should return false.
    // palindrome("almostomla") //should return false.
    // palindrome("My age is 0, 0 si ega ym.") //should return true.
    // palindrome("1 eye for of 1 eye.") //should return false.
    // palindrome("0_0 (: /-\ :) 0-0") //should return true.
    // palindrome("five|\_/|four") //should return false.