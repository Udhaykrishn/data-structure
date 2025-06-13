const arr = [2, 3, 1, 40, 20, 49, 100, 309]; // Unsorted array

/**
 * Binary search works only in sorted arrays.
 *
 * Time Complexity:
 * - Binary Search (Recursive): O(log n)
 *
 * Space Complexity:
 * - O(log n) -> Recursive call stack space
 *
 * @param {number[]} arr - The sorted array
 * @param {number} left - Left index
 * @param {number} right - Right index
 * @param {number} target - The value to search for
 * @returns {number} - The index of target in the sorted array, or -1 if not found
 */
function binaryRecursiveSearch(arr, left, right, target) {
    if (left > right) {
        return -1; // base case: not found
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid;
    }

    if (arr[mid] < target) {
        return binaryRecursiveSearch(arr, mid + 1, right, target);
    } else {
        return binaryRecursiveSearch(arr, left, mid - 1, target);
    }
}

const target = 20;

// Sort the array before binary search
const sortedArr = [...arr].sort((a, b) => a - b); // O(n log n) time, O(n) space

const result = binaryRecursiveSearch(sortedArr, 0, sortedArr.length - 1, target);

console.log("Sorted array is:", sortedArr.join(' '));

if (result !== -1) {
    console.log("Element found at index:", result);
} else {
    console.log("Element not found");
}
