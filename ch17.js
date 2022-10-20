// Parameters: array of items
// Results: brief description of array size
// Examples: 
const arr1 = [1, 2, 3, 4, 5, 6, 7]
const arr2 = []
const arr3 = "OoPs!"
const arr4 = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// Pseudocode:

function myExampleFunction(arr) {
    if (arr != null) { // if array is null return null
        if (arr.length !== 0) { // if array length is 0 return null
            if (arr[0].length !== 0) { // if first item length is 0 return null
                // ELSE
                if (arr.length > 10) { // if array length is over 10 push "max..."
                    arr.push('maximum')
                } else if (arr.length === 10) { // if array length is 10 push "max..."
                    arr.push('maximum')
                } else {
                    if (arr[0] === 'must be maximum') { // if first item is '...' push 'fail...'
                        arr.push('failure')
                    } else if (arr[0] === 'flexible') { // if first item is '...' push 'fail...'
                        arr.push('success')
                    }
                }
            }
        }
    }
    return arr
}

function sameFunctionSimplified(arr) {
    if (arr == null || arr.length === 0) return arr;
  
    if (arr[0].length === 0) return arr;
  
    if (arr.length >= 10) arr.push('maximum');
  
    if (arr[0] === 'must be maximum') arr.push('failure');
    else if (arr[0] === 'flexible') arr.push('success');
    
    return arr
}