/* DAY ONE */
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

/* DAY TWO */
let tamperedString = `af)|Cz>:CGAHY1_2+(OHYYTM!2vka,&yAlWJ3.r&ZVs4F5&bEa<1r1_nlsR!eA-dOUmgwd2=CE7?ynnl+KQf8lW8u4/Nh1|D7SK2uYz-Y $YD)q.VmLD-&P(lL=:HDMA1!?_R#P,V3bKLqUp_t.X:_dM<Mr9zQ~fKJOBDF&Qjen=d ZAR8ze5g-gj@aZ/I:M:!.IBXLq@vN&8L7oH, /0RFtH+.7%eXtM/mxV7*%0Hj.?FSm.Kh8=@jlUJ_S.ApQzye-xB7ZVA2AwEaxTa_snPX?>D5th&Ag/9)7%#uMN=J<h!#prB=:CI;U_.T5*#rb)9q<ht~W<BOmQlmy.<8EqIlR(Gh~~$zmW;Y$7dn-$bW1jf%PL),krpzE LQwsG;EQ;l:Z;+6#.3)KDA+s#k#YMmUhm% 2KB)GqR U@4B>+A9Vh62@:&SNKVas5%&N6Oz!s/%7(Pd1xWy#Kv>uqyX=VEyHbe-64|ex^& 2W(gD=>FT*?tMZO$(+B8uTj,DU2~QST(B|xls=9kzN|:4hXt~:R4|nir,6RN8fg~3!3!^!yWZ)bE@SI.zV5Z%V9Qf_^ 4az$?wqtWrRu+1aS9<%I=!xW.:ps f).($Qz9s;8:uxVqJN9K$42NG(0=j)wZ&U1oB?v^7WVP6QE6-?L;^aglPd5dHO(L2TT5+$NeK-P;js-UAiWCI7>Yr&8|md-X)U=%IpuY)9iymv~ _S^ ,&0|(22&(mIcux_4a196w^FN78kz2kX1k&Psc53d ctbl?Eek!kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AevEek!ux_4a196w^FN7Eek!8kz2kX1k&Psc53d ctbl?kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AEek!Eek!cvEek!MABf|bEek!dPLpPhh=>%UH<%/^H;8gSAkhmUCu:K?*jzEek!LYC/:E*RU=|s7jWDf8z7-zFqS<Ntoav?m8<Q(1ur3Dpd)(XjY1pE)but>eG@QfEek!$Wx8NRZgmQ5t2 kJd,?_R@%muEJBTdQ0-%mHHW20i8wqMK~Co^w?34ag9idsTeXgfqy4IEek!z7Q?Q)nG~5@~ieY_B=6! sVk~=Ts3T>j/ZAS)AKX3zOocGL icK#-x0Eek!yE+2*fz.4&%<>:RHx/B+IFRG*AK1Hn*PQZpEek!v;ZUzWcJC%lym^:+;GcC!qt@nS5SQEek!ikESbYI#-A.Sv .ksat s'worrEek!Eek!omot Eek!rof rebmeEek!merEek! Eek!ot deeEek!n uoy tahw si enEek!o tsrif siht sedisEek!eb gnirtsbus hcae ni retEek!carahc tsrifEek! eEek!Eek!hT .'V' *esaEek!crewEek!ol* nEek!Eek!o pu Eek!gnirts Eek!siEek!ht tilpEek!S`

// The function below decodes the string above (tamperedString) to undo keyboard tampering from a cat and other small animals.
  // 1. slice everything away from the first index of "c" on
  // 2. remove all the instances of the word 'Eek!' from slice
  // 3. reverse slice
  // 4. return slice

function decodeTampering(str) {
    return str.slice(str.indexOf("c") + 1)
          .replaceAll("Eek!", "")
          .split("").reverse().join("")
}

let decode = decodeTampering(tamperedString)

/*
"Split this string up on *lowercase* 'V'. The first character in each substring besides this first one is what you need to remember for tomorrow's task. vS.A-#IYbSEkiQS5Sn@tq!CcG;+:^myl%CJcWzU
*/

const keys = decode.slice(decode.indexOf("v") + 1).split("v").map(sub => sub[0])

console.log("day 2 key:", keys)

/* DAY THREE */

/*
with the decoded string in the challenge from day 2, replace all instances of the key characters in a given string with an empty space
*/

function removeChars(str, arr = keys) {
  arr.forEach(c => str = str.replaceAll(c, " "))
  return str
}

/* DAY FOUR */

function rev(str) {
  return str.split("")
    .reverse().join("")
}

// SECRET MESSAGE: Decode with the functions above (Calculator fix -> Use the Day 2 key to add spaces -> Reverse the string)
// let secret = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"
// console.log("secret:", secret)
// let decodeDayOne = decodeNumbersLettersIn(secret)
// console.log("day 1 decoding:", decodeDayOne)
// let decodeDayTwo = removeChars(decodeDayOne, keys)
// console.log("day 2 decoding:", decodeDayTwo)
// let decodeDayThree = rev(decodeDayTwo)
// console.log("day 3 decoding:", decodeDayThree)

/* DAY FIVE */
let subs = "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"

// The above list of titles must be consolidated according to the following conditions:

// 1. No empty spaces at the start or end of the submission (my friend can't stand when people don't follow directions)
// 2. Cannot contain 'dog', 'bark', or 'bone' in any combination of upper or lower case (canine trolling can't be stopped)
// 3. Total length of pun cannot be a multiple of 5 (this includes spaces and punctuation)
// 4. The sum of the charCodes of the 1st and last characters must be odd (my friend's a bit of a character, but she's great once you get to know her)
// 5. Character directly after the middle of the string may not be 'e' (For example the character to check in even-length string center is t, for odd an example would be weird -> 'r')
// 6. Must have an even number of lowercase letters (do not count punctuation or spaces as letters)
// 7. Must have at least 2 capital letters (honestly, I'm a little worried these requirements are too strict)
// 8. Must not contain a capital 'S' (definitely too strict. What does S even have to do with cat puns?)

let arrSubs = subs.split(",")
    .map(title => title.trim())
    .filter(title => {
      const hasDog = title.toLowerCase().includes("dog")
      const hasBark = title.toLowerCase().includes("bark")
      const hasBone = title.toLowerCase().includes("bone")
      if (!(hasDog || hasBark || hasBone)) {
        return title
      }
  }).filter(title => {
      if (title.length % 5 !== 0) {
        return title
      }
  }).filter(title => {
      const firstChar = title.charCodeAt(0)
      const lastChar = title.charCodeAt(title.length - 1)
      if ((firstChar + lastChar) % 2 === 1) {
        return title
      }
  }).filter(title => {
      const mid = Math.ceil(title.length / 2) + 1
      if (title.toLowerCase().charAt(mid) !== 'e') {
        return title
      }
  }).filter(title => {
      let countUpper = 0, countLower = 0
      title.split("").forEach(c => {
        if (c === c.toUpperCase()) {
          countUpper += 1
        }
        if (c === c.toLowerCase()) {
          countLower += 1
        }
      })
      if (countUpper >= 2 && countLower % 2 === 0) {
        return title
      }
  }).filter(title => {
      if (!title.includes("S")) {
        return title
      }
  })

const keyNum = arrSubs.length

console.log("day 5 key:", keyNum)

/* DAY SIX */

// Write a function that, when given a non-empty string, and positive integer X, removes every Xth character from the string. Counting should begin from the first element in the string and should continue in that pattern until the end of the string. For example:

// let strFourth = "Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!"
// let strFifth = "The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow."

// console.log(removeNth(strFourth, 4)) // "This is Halloween! This is Halloween!"
// console.log(removeNth(strFifth, 5)) // "The Bachelor is a terrible television show."

function removeNth(str, n) {
    return str.split("")
      .filter((c, i) => (i + 1) % n !== 0)
      .join("")
  }  

/* DAY SEVEN */
// This function swaps each letter of the alphabet for its opposite. A letter's opposite is one that, if the alphabet were flipped Z-A, would be the same number of letters in, and which would also have the opposite case

/*
'A'  // first letter of the alphabet, uppercase
'z'  // last letter of the alphabet, lowercase

'p'  // 16th letter of the alphabet, lowercase
'K'  // 16th letter from *end* of alphabet, uppercase
*/

// Example:
// let example = 'vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH' // -> 'Example: 0 number or punctuation changes'

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

const encryptedMsg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

const stepDayOne = decodeNumbersLettersIn(encryptedMsg)
const stepDayThree = removeChars(stepDayOne, keys)
const stepDayFour = rev(stepDayThree)
const stepDaySix = removeNth(stepDayFour, keyNum - 1)
const stepDaySeven = oppositify(stepDaySix)

console.log("encryptedMsg", encryptedMsg)
console.log("day 1:", stepDayOne)
console.log("day 2:", keys)
console.log("day 3", stepDayThree)
console.log("day 4:", stepDayFour)
console.log("day 5:", keyNum, "-> REVIEW DAY 5 because this only works when this is 3")
console.log("day 6:", stepDaySix)
console.log("day 7:", stepDaySeven)