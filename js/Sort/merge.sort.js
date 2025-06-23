const arr = [20, 40, 220,502, 3059, 503, 54, 250, 849, 0o0];

console.log("Original array is: ",arr)

function merge(arr){
    if(arr.length < 2){
        return arr;
    }


    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid,arr.length);


    return mergeSort(merge(left),merge(right))
}


function mergeSort(left,right){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(left.length > leftIndex && right.length > rightIndex){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex++])
        }else{
            result.push(right[rightIndex++])
        }
    }

    return [...result,...left.slice(leftIndex),...right.slice(rightIndex)]
}

const sorted = merge(arr)

console.log("Sorted array is: ",sorted)