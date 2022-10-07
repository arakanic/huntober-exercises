// Write a function that, when given a non-empty string, and positive integer X, removes every Xth character from the string. Counting should begin from the first element in the string and should continue in that pattern until the end of the string. For example:

let strFourth = "Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!"
let strFifth = "The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow."

console.log(removeNth(strFourth, 4)) // "This is Halloween! This is Halloween!"
console.log(removeNth(strFifth, 5)) // "The Bachelor is a terrible television show."

function removeNth(str, n) {
    return str.split("")
      .filter((c, i) => (i + 1) % n !== 0)
      .join("")
  }  