// Day 19: MORE BAD CODE BELOW
// 1. Extract helper functions for shared code
// 2. Create guard classes
// 3. Condense
// 4. Clarify

function formatDates(d1, d2) {
    const now = new Date()
    const millisecPerDay = 1000*60*60*24
    const tilld1 = Math.ceil(Math.abs(now.getTime() - d1.getTime()) / millisecPerDay)
    const tilld2 = Math.ceil(Math.abs(now.getTime() - d2.getTime()) / millisecPerDay)
    const strd1 = d1.toDateString()
    const strd2 = d2.toDateString()
    return {toD1: tilld1, toD2: tilld2, 1: strd1, 2: strd2}
}

function comp1(a, b) {
    const d = formatDates(a, b);
    if (d.toD1 === d.toD2) return `They're the same number of days away!`;
    
    if (d.toD1 * 2 <= d.toD2) {
        return `If you thought ${d[1]} was a long wait, wait until you see how long it is until ${d[2]}.`;
    }
    return d.toD1 < d.toD2 
      ? `Don't worry, ${d[2]} isn't too much farther away than ${d[1]} in the scheme of things.`
      : `You know ${d[1]} is closer, right?`;
}

function comp2(a, b) {
    const d = formatDates(a, b);
    const ratio = Math.floor(d.toD2 / d.toD1);
    if (ratio === 1) return `Same exact date there, mate.`;
    
    return d.toD1 < d.toD2 
      ? `Looks like ${d[2]} is ${ratio} times farther away than ${d[1]}.`
      : `Looks like ${d[1]} is ${ratio} times farther away than ${d[2]}.`;
}

function tot(a, b) {
    const d = formatDates(a, b);
    const diff = d.toD2 - d.toD1;
    return `You have ${d.toD1} days left until ${d[1]}, and ${d.toD2} days left until ${d[2]}. There are ${diff} days between them.`;
}

// feel free to plug these example dates into your functions
const dateA = new Date(2022,09,26)
const dateB = new Date(2022,11,25)

console.log(comp1(dateA, dateB))
console.log(comp2(dateA, dateB))
console.log(tot(dateA, dateB))