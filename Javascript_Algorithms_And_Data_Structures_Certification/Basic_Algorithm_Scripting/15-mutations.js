/* Return true if the string in the first element 
    of the array contains all of the letters of 
    the string in the second element of the array.*/

function mutation(arr) {
  arr = arr.map(function(string) {
    return string.toLowerCase();
  });
  for (var i = 0; i < arr[1].length; ++i) {
    if (arr[0].indexOf(arr[1][i]) < 0) {
        //console.log("false")
      return false;
    }
  }
  //console.log("true")
  return true;
}

    mutation(["hello", "hey"]) //should return false.
    //mutation(["hello", "Hello"]) //should return true.
    //mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) //should return true.
    //mutation(["Mary", "Army"]) //should return true.
    //mutation(["Mary", "Aarmy"]) //should return true.
    //mutation(["Alien", "line"]) //should return true.
    //mutation(["floor", "for"]) //should return true.
    //mutation(["hello", "neo"]) //should return false.
    //mutation(["voodoo", "no"]) //should return false