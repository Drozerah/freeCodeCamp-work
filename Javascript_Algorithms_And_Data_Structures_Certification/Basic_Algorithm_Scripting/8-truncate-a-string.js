//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
//Return the truncated string with a ... ending.

function truncateString(str, num) {

    var dots = "...";
    var strLenght = str.length;
    var result = "";
    var endIndex = 0;

    if (num <= 3) {

        endIndex = num;

        result = str.slice(0, endIndex) + dots;

        return result;

    } else if (strLenght > num) {

        endIndex = num - 3;

        result = str.slice(0, endIndex) + dots;

        return result;

    }

    return str;

}

truncateString("A-tisket a-tasket A green and yellow basket", 11) //should return "A-tisket...".
    // truncateString("Peter Piper picked a peck of pickled peppers", 14) //should return "Peter Piper...".
    // truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) //should return "A-tisket a-tasket A green and yellow basket".
    // truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) //should return "A-tisket a-tasket A green and yellow basket".
    // truncateString("A-", 1) //should return "A...".
    // truncateString("Absolutely Longer", 2) //should return "Ab...".