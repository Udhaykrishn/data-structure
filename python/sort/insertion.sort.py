arr = [20,40,30,100,5023,409,48,4348,394]

size = len(arr)

print("Original array is: ",arr)

for i in range(1,size):
    key = arr[i]
    j = i - 1
    
    while j >= 0 and key < arr[j]:
        arr[j + 1] = arr[j]
        j -= 1
    arr[j + 1] = key
    
print("Sorted array is: ",arr)