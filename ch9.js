// Two functions:
// one function swaps a given primitive value in a given 1-dimensional array to an index to the left
// another function swaps it to the right

// Note:
// If the given value is on the edge of the array and can't move in that direction, don't move it.
// The array passed in should be mutated by this function 

myArray = ['abc', 'xyz', 1, 2, 'Hey!']
console.log(myArray)
moveToLeft(1, myArray) // call move left function with 1 and myArray as arguments
console.log(myArray)   // ['abc', 1, 'xyz', 2, 'Hey!']

moveToLeft(1, myArray) // call move left function again, same arguments
console.log(myArray) // [ 1, 'abc', 'xyz', 2, 'Hey!'] no change

moveToLeft(1, myArray) // call move left function again, same arguments
// 1 is already as far left as it can go
console.log(myArray) // [ 1, 'abc', 'xyz', 2, 'Hey!'] no change

moveToRight('xyz', myArray) // call move right function this time, with 'xyz' and myArray as arguments
console.log(myArray) // [ 1, 'abc', 'Hey!', 'xyz', 2]

moveToRight('xyz', myArray) // call move right function again, same arguments
console.log(myArray) // [ 1, 'abc', 'Hey!', 2,  'xyz'] no change

moveToRight('xyz', myArray) // call move right function again, same arguments
// 'xyz' is already as far right as it can go
console.log(myArray) // [ 1, 'abc', 'Hey!', 2,  'xyz'] no change

// PSEUDOCODE
// moveToLeft(item, arr)
// 1. get item index
// 2. if item index is greater than 0
// 3. splice item from array and pop into var
// 4. splice popped item into previous index (1 before item index)

// PSEUDOCODE
// moveToRight(item, arr)
// 1. get item index
// 2. if item index is lower than index of last item
// 3. splice item from array and pop into var
// 4. splice popped item into next index (1 after item index)

function moveToLeft(item, arr) {
  const indexTarget = arr.indexOf(item)
  if (indexTarget > 0) {
    const target = arr.splice(indexTarget, 1).pop()
    const prev = arr.splice(indexTarget - 1, 0, target)
  }
}

function moveToRight(item, arr) {
  const indexTarget = arr.indexOf(item)
  if (indexTarget < arr.length - 1) {
    const target = arr.splice(indexTarget, 1).pop()
    const prev = arr.splice(indexTarget + 1, 0, target)
  }
}