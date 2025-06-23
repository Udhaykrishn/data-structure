const arr = [1,3,42,50,0,402,305,259,485]


function swap(arr,a,b){
    [arr[a],arr[b]] = [arr[b],arr[a]];
}

function partition(arr,low,high){
    let pivot = arr[high]
    let i = low - 1;
    for(let j = low; j<=high-1; j++){
        if(arr[j] < pivot){
            i++;
            swap(arr,i,j);
        }
    }
    i++;
    swap(arr,i,high)
    return i;
}

function quickSort(arr,low,high){
    if(low < high){
        const pivot = partition(arr,low,high)

        quickSort(arr,pivot + 1,high)
        quickSort(arr,low,pivot - 1)
    }
}


console.log("Original array is: ",arr)

quickSort(arr,0,arr.length-1)


console.log("Sorted array is: ",arr)