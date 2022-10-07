// This function will fix a string which has been encoded in a way where numbers are swapped out with letters that have similar shapes, and vice versa

// It takes a string and returns the string decoded (or encoded?) such as here:
console.log(decodeNumbersLettersIn("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770.")) // -> "PRO-TIP #498: IT'S NICE TO SAY HELLO."

/*
Create dictionary mapping numbers to letters
Create function to swap key (number) for value (letter)
Create function to swap value (letter) for key (number)
return the string by mapping each character to equivalent letter value if it exists as a number key, an equivalent number key if it exists as a letter value, or just the character itself if neither exists in dictionary
(There must be a more efficient way of doing this...)
*/
function decodeNumbersLettersIn(str) {
    const swap = {
        "0": "O",
        "1": "I",
        "2": "Z",
        "3": "E",
        "4": "h",
        "5": "S",
        "6": "G",
        "7": "L",
        "8": "B",
        "9": "q",
    }
    const getVal = (key) => swap[key]
    const getKey = (value) => {
      return Object.keys(swap)
        .find(key => swap[key] === value)
    }
    return str.split("").map(c => {
            if (getKey(c) !== undefined) { 
                return getKey(c)
            }
            else if (getVal(c) !== undefined) {
                return getVal(c) 
            }
            else {
                return c
            }
        }).join("")
}