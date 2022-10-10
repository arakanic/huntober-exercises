// Two functions:
// one function swaps a given primitive value in a given 1-dimensional array to an index to the left
// another function swaps it to the right

// Note:
// If the given value is on the edge of the array and can't move in that direction, don't move it.
// The array passed in should be mutated by this function 

myArray = ['abc', 'xyz', 1, 2, 'Hey!']

moveToLeft('xyz', myArray) // call move left function with 'xyz' and myArray as arguments
console.log(myArray)   // ['xyz', 'abc', 1, 2, 'Hey!']

moveToLeft('xyz', myArray) // call move left function again, same arguments
// Note that 'xyz' is already as far left as it can go
console.log(myArray) // ['xyz', 'abc', 1, 2, 'Hey!'] no change

moveToRight(2, myArray) // call move right function this time, with 2 and myArray as arguments
console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2]

moveToRight(2, myArray) // call move right function again, same arguments
// Note that 2 is already as far right as it can go
console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2] no change

function moveToLeft(item, arr) {
    // ...
}

function moveToRight(item, arr) {
    // ...
}