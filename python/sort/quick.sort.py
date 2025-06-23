arr = [20,40,30,100,5023,409,48,4348,394]

def partition(arr,low,high):
    pivot = arr[high]
    i = low - 1
    
    for j in range(low,high):
        if arr[j] < pivot:
            i += 1
            arr[i],arr[j] = arr[j],arr[i]
    i += 1
    arr[i],arr[high] = arr[high],arr[i]
    return i

def  quick_sort(arr,low,high):
    if low < high:
        pivot = partition(arr,low,high)
        quick_sort(arr,low,pivot - 1)
        quick_sort(arr,pivot + 1,high)
        
        
print("Original array is: ",arr)

quick_sort(arr,0,len(arr)-1)

print("Sorted array is: ",arr)