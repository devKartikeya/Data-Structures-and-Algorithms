/**
 * Performs an interpolation search on a sorted, uniformly distributed array.
 * @param {number[]} arr - The sorted array to search.
 * @param {number} target - The value to find.
 * @returns {number} The index of the target if found, otherwise -1.
 */
function interpolationSearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    // Ensure the target is within the bounds of the array
    while (low <= high && target >= arr[low] && target <= arr[high]) {
        
        // Prevent division by zero if all elements in the range are identical
        if (arr[low] === arr[high]) {
            if (arr[low] === target) return low;
            break;
        }

        // Probing formula to estimate the target's position
        let pos = low + Math.floor(
            ((high - low) / (arr[high] - arr[low])) * (target - arr[low])
        );

        // Target found
        if (arr[pos] === target) {
            return pos;
        }

        // If target is larger, search the right subarray
        if (arr[pos] < target) {
            low = pos + 1;
        } 
        // If target is smaller, search the left subarray
        else {
            high = pos - 1;
        }
    }

    return -1; // Target not found
}

// Example usage:
const uniformArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(interpolationSearch(uniformArray, 40)); // Output: 3
console.log(interpolationSearch(uniformArray, 85)); // Output: -1
