/*
with the decoded string in the challenge from day 2, replace all instances of the key characters in a given string with an empty space

example key characters -> 'A','_','K','E','Y','!'

'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'
// implement key replacement function
' you could think this is hard to read before replacing the key characters'
*/

// 1. for each character in the array of special characters
// 2. replace all instances of special character in the given string with a space
// 3. return new string

const keys = ["S","p","a","c","e"]

function removeChars(str, arr = keys) {
  arr.forEach(c => str = str.replaceAll(c, " "))
  return str
}

const exStr = 'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'
const exArr = ['A','_','K','E','Y','!']

console.log(removeChars(exStr, exArr))