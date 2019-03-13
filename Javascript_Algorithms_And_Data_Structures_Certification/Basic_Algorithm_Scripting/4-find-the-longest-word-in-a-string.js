// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWord(str) {

    // split str in new array 
    var split = str.split(" ");

    // create new array 
    var array = [];

    // populate array with str.length
    split.forEach(function(word) {
        array.push(word.length);
    });

    // Get the maximum element of the array
    var max = array.reduce(function(a, b) {
        return Math.max(a, b);
    });

    //return console.log("max",max)
    return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog") //should return 6.
//findLongestWord("May the force be with you") //should return 5.
//findLongestWord("Google do a barrel roll") //should return 6.
//findLongestWord("What is the average airspeed velocity of an unladen swallow") //should return 8.
//findLongestWord("What if we try a super-long word such as otorhinolaryngology") //should return 19.