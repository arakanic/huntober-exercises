// This function checks equality between 2 arrays with a particular structure.

// The arrays will:

// Be of equal size
// Will each contain some number (X) arrays
// Each inner array will contain that same number (X) primitive elements
// All the nested primitives within each array must strictly match to return a true result. Any mismatches will return false.

// each of these arrays have 3 nested arrays of 3 strings each 
const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]

// if we were to use our function to compare all the possible pairs
// ONLY arr1 vs arr2 would return true

console.log(checkEquality(arr1, arr2)) // => true
console.log(checkEquality(arr1, arr3)) // => false
console.log(checkEquality(arr1, arr4)) // => false

// PSEUDOCODE
// local function to compare shallow arrays using JSON stringify method
// return false if array sizes are not equal
// iterate over each nested array and compare elements of internal arrays
// return false if elements are not the same
// return true if we make it through the iterate-compare step without return false

// CODE
function checkEquality(a1, a2) {
    const compare = (a, b) => {
        return JSON.stringify(a) === JSON.stringify(b) 
            ? true : false
    }
    if (a1.length !== a2.length) {return false}
    for (let arr = 0; arr < a1.length; arr++) {
        if (!compare(a1[arr], a2[arr])) {return false}
    }
    return true
}