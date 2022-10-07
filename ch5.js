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

console.log(arrSubs, arrSubs.length)