// This function takes a given array of strings and move any entries containing the letter 'a' to the front, and then moves remaining entries that have over 3 characters to the back. The order of elements are otherwise preserved

myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']
console.log(reArrange(myArr)) 
// => ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']


// Code
function reArrange(arr) {
  //   Create array with strings that have "a" or "A" from given array
  let arrayAs = arr.filter(s => s.split("").includes("a"))
      .concat(arr.filter(s => s.split("").includes("A")))
  //   Filter those elements from given array
  arrayAs.forEach(s => arr.splice(arr.indexOf(s), 1))
  //   Create array with strings longer than three characters
  let arrayThrees = arr.filter(s => s.length > 3)
  //   Filter those elements from given array
  arrayThrees.forEach(s => arr.splice(arr.indexOf(s), 1))
  //   Concatenate arrays with As, what remains of given array, and array with longer strings altogether and return
  return arrayAs.concat(arr).concat(arrayThrees)
}