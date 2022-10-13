// Fisher-Yates Shuffle
let myArray = [[1,2,3],[4,5,6],[7,8,9]]
console.log(myArray)
shuffle(myArray)
console.log(myArray)
shuffle(myArray)
// console.log(myArray)
// shuffle(myArray)
// console.log(myArray)

// PSEUDOCODE
// 1. traverse in reverse through given array of arrays
//  (a) get item at next untraversed index on current array
//  (b) get item on any other index in any other array
//  (c) swap items

function shuffle(array) {
  for (let curr = array.length - 1; curr >= 0; curr--) {
    for (let i = array[curr].length - 1; i >= 0; i--) {
      let rand = Math.floor(Math.random() * (array.length));
      let j = Math.floor(Math.random() * (array[rand].length));
      // we could use "destructuring assignment" syntax to swap elements element at current index (array[curr][i]) and random element (array[rand][j])
      // console.log([array[curr][i], array[rand]][j] = [array[rand][j], array[curr][i]])
    }
  }
}