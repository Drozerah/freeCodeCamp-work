// Return an array consisting of the largest number from each provided sub-array. 
// For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
    // declare result array of the function
    var result = [];
    // function to get the maximum element of an array
    function getMax(tab) {

        var max = tab.reduce(function(a, b) {
            //console.log(Math.max(a, b))
            return Math.max(a, b);
        });

        result.push(max);
    }

    for (var i = 0; i < arr.length; i++) {
        // call getMax function when iterate
        getMax(arr[i]);
    }
    //return console.log(result);
    return result;
}


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) //should return an array.
//largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) //should return [27,5,39,1001].
//largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) //should return [9, 35, 97, 1000000].