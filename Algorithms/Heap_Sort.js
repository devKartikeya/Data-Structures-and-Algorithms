/**
 * Main function to perform Heap Sort on an array.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} The sorted array.
 */
function heapSort(arr) {
    const size = arr.length;

    // 1. Build a Max Heap from the unsorted array
    // Start from the last non-leaf node and move up to the root
    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
        heapify(arr, size, i);
    }

    // 2. Extract elements from the heap one by one
    for (let i = size - 1; i > 0; i--) {
        // Move current root (largest element) to the end of the unsorted segment
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call max heapify on the reduced heap to restore order
        heapify(arr, i, 0);
    }

    return arr;
}

/**
 * Re-shapes a subtree into a Max Heap rooted at index i.
 * @param {Array} arr - The array representing the binary tree.
 * @param {number} size - The size of the heap remaining to be sorted.
 * @param {number} i - The index of the root node of the current subtree.
 */
function heapify(arr, size, i) {
    let largest = i;          // Initialize largest as root
    const left = 2 * i + 1;   // Formula for left child index
    const right = 2 * i + 2;  // Formula for right child index

    // Check if left child exists and is greater than root
    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }

    // Check if right child exists and is greater than the largest so far
    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is no longer the root node, swap and continue heapifying
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        // Recursively heapify the affected sub-tree
        heapify(arr, size, largest);
    }
}

// Example usage:
const unsortedArray = [12, 11, 13, 5, 6, 7];
console.log("Original Array:", unsortedArray);

const sortedArray = heapSort(unsortedArray);
console.log("Sorted Array:  ", sortedArray); 
// Output: [5, 6, 7, 11, 12, 13]
