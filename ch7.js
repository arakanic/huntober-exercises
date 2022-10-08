// This function swaps each letter of the alphabet for its opposite. A letter's opposite is one that, if the alphabet were flipped Z-A, would be the same number of letters in, and which would also have the opposite case

/*
'A'  // first letter of the alphabet, uppercase
'z'  // last letter of the alphabet, lowercase

'p'  // 16th letter of the alphabet, lowercase
'K'  // 16th letter from *end* of alphabet, uppercase
*/

// Example:
let example = 'vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH' // -> 'Example: 0 number or punctuation changes'

function oppositify(str) {
    const lowerAlpha = 'abcdefghijklmnopqrstuvwxyz'.split("")
    const upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
    return str.split("").map((c, i) => {
      if (lowerAlpha.includes(c)) {
        let newIndex = 26 - (lowerAlpha.indexOf(c) + 1)
        // console.log("lower:", c, newIndex)
        return upperAlpha[newIndex]
      }
      else if (upperAlpha.includes(c)) {
        let newIndex = 26 - (upperAlpha.indexOf(c) + 1)
        // console.log("upper:", c, newIndex)
        return lowerAlpha[newIndex]
      }
      else {
        return c
      }
    }).join("")
}

console.log(oppositify(example))