//Reverse the provided string.
//You may need to turn the string into an array before you can reverse it.
//Your result must be a string.

function reverseString(str) {
    function reverseWord(word) {

        var result = [];

        for (var i = 0; i < word.length; i++) {
            result.push(word.charAt(i));
        }

        newStr = "";

        result = result.reverse();

        for (var j = 0; j < result.length; j++) {
            newStr = newStr + result[j];
        }

        str = newStr;
        return str;
    }

    return reverseWord(str);
}

reverseString("hello") //should become "olleh".
//reverseString("Howdy") //should become "ydwoH".
//reverseString("Greetings from Earth") //should return "htraE morf sgniteerG"