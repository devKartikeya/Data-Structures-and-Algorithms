function jumpSearch(arr, target) {
    const n = arr.length;
    
    // 1. Define the optimal block/jump size
    let step = Math.floor(Math.sqrt(n));
    let prev = 0;

    // 2. Jump ahead through blocks while the element at the jump index is less than the target
    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        
        // If we jump past the end of the array, the element is not present
        if (prev >= n) {
            return -1;
        }
    }

    // 3. Perform a linear search for the target within the identified block
    while (arr[prev] < target) {
        prev++;

        // If we reach the next block or the end of the array, the element is missing
        if (prev === Math.min(step, n)) {
            return -1;
        }
    }

    // 4. If the element is found, return its index
    if (arr[prev] === target) {
        return prev;
    }

    // Target not found
    return -1;
}

// Example Usage:
const sortedArray = [10, 20, 30, 45, 55, 60, 75, 80, 99, 120, 150];
const targetValue = 75;

const resultIndex = jumpSearch(sortedArray, targetValue);
console.log(`Element found at index: ${resultIndex}`); // Output: 6
