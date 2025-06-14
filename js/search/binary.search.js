const arr = [2, 3, 1, 40, 20, 49, 100, 309]; // Unsorted array

/**
 * Binary search works only in sorted arrays.
 *
 * Time Complexity:
 * - Binary Search: O(log n)
 *
 * Space Complexity:
 * - O(1) -> No extra space used (iterative approach)
 *
 * @param {number[]} arr - The sorted array
 * @param {number} target - The value to search for
 * @returns {number} - The index of target in the sorted array, or -1 if not found
 */
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

const target = 20;

// Sort the array before binary search
// Time Complexity: O(n log n) for sorting
// Space Complexity: O(n) for using spread operator to avoid modifying original array
const sortedArr = [...arr].sort((a, b) => a - b);

const result = binarySearch(sortedArr, target);

console.log("Sorted array is:", sortedArr.join(' '));

if (result !== -1) {
    console.log("Element found at index:", result);
} else {
    console.log("Element not found");
}
