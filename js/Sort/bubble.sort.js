const arr = [102,3,402,350,20];


console.log("Original array is: ",arr)

for(let i = 0; i<arr.length; i++){
    for(let j = i; j<arr.length; j++){
        if(arr[i] > arr[j]){
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }
    }
}


console.log("Sorted array is: ",arr)