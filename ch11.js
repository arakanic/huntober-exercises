// The functions below take in a given value that will only appear once within a given array of a similar structure to the one described above: one will move the given value up one row while the other will move the given value down one row, swapping places with whatever was there

// (1) moveUp
// --> unique value + array with arrays of values
// <-- n/a: unique value is swapped with value at same index one array up or to the left up until first array
let myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

moveUp('h', myGrid)
console.log(myGrid) // = [['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]
moveUp('h', myGrid)
console.log(myGrid) // = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]
moveUp('h', myGrid)
console.log(myGrid) // = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// if parameter value is in index 1 or greater
// splice parameter value at index
// splice the value in previous array at same index
// splice parameter value into previous array without deleting items
// splice value from previous array into array where parameter value was found without deleting items

function moveUp(val, arr) {
  arr.forEach((a, i) => {
      const notFirstArray = i > 0
      const found = a.indexOf(val) >= 0
      if (notFirstArray && found) {
        const index = a.indexOf(val)
        const valParam = arr[i].splice(index, 1).pop()
        const valPrev = arr[i - 1].splice(index, 1).pop()
        arr[i - 1].splice(index, 0, valParam)
        arr[i].splice(index, 0, valPrev)
      }
  })
}

// (2) moveDown
// --> unique value + array with arrays of values
// <-- n/a: unique value is swapped with value at same index one array down or to the right until last array

moveDown('f', myGrid)
console.log(myGrid) // = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]
moveDown('f', myGrid)
console.log(myGrid) // = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

// if parameter value is in index less than one less than array length (i < array.length - 1)
// splice parameter value at index
// splice the value in following array at same index
// splice parameter value into following array without deleting items
// splice value from previous array into array where parameter value was found without deleting items

function moveDown(val, arr) {
  arr.forEach((a, i) => {
      const notLastArray = i < arr.length - 1
      const found = a.indexOf(val) >= 0
      if (notLastArray && found) {
        const index = a.indexOf(val)
        const valParam = arr[i].splice(index, 1).pop()
        const valNext = arr[i + 1].splice(index, 1).pop()
        arr[i + 1].splice(index, 0, valParam)
        arr[i].splice(index, 0, valNext)
      }
  })
}