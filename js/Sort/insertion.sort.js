const arr = [10,205,4,304,548,39]


console.log("Original array is: ",arr)

for(let i = 1; i<arr.length; i++){
    let key = arr[i];
    let j = i - 1;

    while(j >= 0 && arr[j] > key){
        arr[j + 1] = arr[j];
        j--;
    }

    arr[j + 1] = key
}


console.log("Sorted array is: ",arr)