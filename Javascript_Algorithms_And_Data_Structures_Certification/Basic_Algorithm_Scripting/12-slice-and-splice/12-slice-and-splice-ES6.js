// 12-slice-and-splice-ES6.js

/**
 * SLICE & SPLICE ES6 REFACTOR
*/ 

// You are given two arrays and an index.
// 
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// 
// Begin inserting elements at index n of the second array.
// 
// Return the resulting array. The input arrays should remain the same after the function runs.

const frankenSplice = (arr1, arr2, n) => {

    // create a new array and fill it with the spread out values of arr2
    const result = [...arr2]
    //............| from index n
    //............|..| remove 0 element
    //............|..|..| spread out arr1 values and gather them into arr1 where index = n
    result.splice(n, 0, ...arr1)

    return result
}
console.log(frankenSplice([1, 2, 3], [4, 5], 1)) // should return [4, 1, 2, 3, 5].
console.log(frankenSplice([1, 2], ["a", "b"], 1))  // should return ["a", 1, 2, "b"].
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)) // should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
// All elements from the first array should be added to the second array in their original order.
// The first array should remain the same after the function runs.
// The second array should remain the same after the function runs.