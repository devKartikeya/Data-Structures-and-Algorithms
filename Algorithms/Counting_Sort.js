function countingSort(arr) {
    if (arr.length <= 1) return arr;

    // 1. Find the minimum and maximum values to support negative numbers
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }

    const range = max - min + 1;
    const count = new Array(range).fill(0);
    const output = new Array(arr.length);

    // 2. Store the frequency of each element
    for (let i = 0; i < arr.length; i++) {
        count[arr[i] - min]++;
    }

    // 3. Transform count array into a prefix sum array
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    // 4. Build the output array by iterating backwards for stability
    for (let i = arr.length - 1; i >= 0; i--) {
        const currentVal = arr[i];
        const countIndex = currentVal - min;
        
        output[count[countIndex] - 1] = currentVal;
        count[countIndex]--; // Decrement the cumulative count
    }

    return output;
}

// Example Usage:
const unsortedArray = [4, -2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(unsortedArray);
console.log(sortedArray); // Output: [-2, 1, 2, 3, 3, 4, 8]
