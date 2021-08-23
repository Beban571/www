array = [5, 3, 2, 8, 1, 4]

function sortOddsOnly(arr) {
    odds = arr.filter(x => x%2).sort((a, b) => a - b);
        
    return arr
        .map(x => x%2 ? odds.shift() : x);
}

console.log(sortOddsOnly(array));