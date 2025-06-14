const arr = [2, 3, 1, 40, 20, 49, 100, 309]; // Unsorted array

/**
 * Linear search works on both sorted and unsorted arrays.
 * It checks each element one by one from left to right.
 *
 * Time Complexity:
 * - Worst case: O(n) → when target is at the end or not present
 * - Best case: O(1) → when target is at the beginning
 *
 * Space Complexity:
 * - O(1) → no extra space used
 *
 * @param {number[]} arr - The array to search through
 * @param {number} target - The value to search for
 * @returns {number} - The index of the target, or -1 if not found
 */
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const target = 20;
const result = linearSearch(arr, target);

console.log("Original array is:", arr.join(' '));

if (result !== -1) {
    console.log("Element found at index:", result);
} else {
    console.log("Element not found");
}
