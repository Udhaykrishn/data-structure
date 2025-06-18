arr = [40,00,302,502,424,1048,948]

size = len(arr)


print("Original array is: ",arr)

for i in range(size):
    index = i
    
    for j in range(index,size):
        if arr[index] > arr[j]:
            index = j
    arr[index],arr[i] = arr[i],arr[index]
    
    
print("Sorted array is: ",arr)