const arr = [20,50,103,40,3050,20,450,230]


console.log("original  array is: ",arr)

for(let i = 0; i<arr.length; i++){
    let index = i;
    for(let j = index; j<arr.length; j++){
        if(arr[index] > arr[j]){
            index = j;
        }
    }

    [arr[i],arr[index]] = [arr[index],arr[i]]
}

console.log("Sorted array is: ",arr)