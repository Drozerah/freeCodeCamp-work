// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {

    // get last word of str 
    var arr = str.split(" ").reverse();
    var lastWord = arr[0];
    // get last word.length
    var WordLength = lastWord.length;

    // get substring depending on target length using method .substring(indexA,indexB)
    // get taget.length as indexB construction part
    var targetLength = target.length;
    // construct indexB      
    var indexB = WordLength - targetLength;
    // calculate substring as part of str end 
    var substring = lastWord.substring(WordLength, indexB);

    // check if target matches substring 
    if (target === substring) {

        //console.log("true")
        return true;
    }

    //console.log("false")
    return false;
    // return str;
}


confirmEnding("Bastian", "n") //should return true.
    //confirmEnding("Connor", "n") //should return false.
    //confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") //should return false.
    //confirmEnding("He has to give me a new name", "name") //should return true.
    //confirmEnding("Open sesame", "same") //should return true.
    //confirmEnding("Open sesame", "pen") //should return false.
    //confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") //should return false.
    // Do not use the built-in method .endsWith() to solve the challenge.