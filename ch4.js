// Given a string, this function returns a reversed sequence of the string

let exStr = "   The white space at the beginning of this string doesn't match the whitespace at the end. "

function rev(str) {
  return str.split("")
    .reverse().join("")
}

console.log(rev(exStr))