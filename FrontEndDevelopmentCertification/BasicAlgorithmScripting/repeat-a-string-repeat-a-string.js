//Repeat a given string (first argument) num times (second argument). 
//Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {

    string = "";

    if (num > 0) {

        for (var i = 0; i < num; i++) {
            string = string += str;
        }

        //console.log("string : ", string)
        return string;
    }

    //console.log("string : ", string)
    return string;
}

repeatStringNumTimes("abc", 3);

// repeatStringNumTimes("*", 3) //should return "***".
// repeatStringNumTimes("abc", 3) //should return "abcabcabc".
// repeatStringNumTimes("abc", 4) //should return "abcabcabcabc".
// repeatStringNumTimes("abc", 1) //should return "abc".
// repeatStringNumTimes("*", 8) //should return "********".
// repeatStringNumTimes("abc", -2) //should return "".