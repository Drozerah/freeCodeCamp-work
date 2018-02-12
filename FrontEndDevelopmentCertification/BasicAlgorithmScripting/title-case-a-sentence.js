// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {

    // split words in array
    var array = str.split(" ");
    // create result array
    var resultArr = [];

    // capitalize first letter for each words in array and push result in resultArr
    array.forEach(function(word) {
        var result = word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        resultArr.push(result);
    });

    // turn array into string 
    var result = resultArr.join(" ");

    // console.log("result", result)
    return result;
}

titleCase("I'm a little tea pot") //should return "I'm A Little Tea Pot".
    //titleCase("sHoRt AnD sToUt") //should return "Short And Stout".
    //titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") //should return "Here Is My Handle Here Is My Spout".