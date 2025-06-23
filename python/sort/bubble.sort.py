arr = [40,20,403,504,694,209]

size = len(arr)

print("Original Array is: ",arr)

for i in range(size-1):
    for j in range(size-1-i):
        if arr[j] > arr[j + 1]:
            arr[j],arr[j + 1] = arr[j + 1],arr[j]
            
            
print("Sorted Array is: ",arr)