function secondHighest(arr) {
    if (arr.length < 2) {
        return -Infinity; // Return -Infinity for empty or single-element arrays
    }

    let highest = -Infinity;
    let secondHighest = -Infinity;
    
    for (const num of arr) {
        if (num > highest) {
            secondHighest = highest; // Update second highest
            highest = num; // Update highest
        } else if (num > secondHighest && num < highest) {
            secondHighest = num; // Update second highest
        }
    }

    // If secondHighest is still -Infinity, it means all elements are the same
    return secondHighest === -Infinity ? -Infinity : secondHighest;
}