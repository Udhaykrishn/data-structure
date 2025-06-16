def binary_recursive_search(arr,left,right,target):
    mid = int((left + right) / 2)
    
    if arr[mid] == target:
        return mid
    
    if arr[mid] < target:
        return binary_recursive_search(arr,mid + 1,right,target)
    else:
        return binary_recursive_search(arr,left,mid - 1,target)
    
    
arr = [10,20,30,40,50]

target = 10

result = binary_recursive_search(arr,0,len(arr)-1,target)

if result != 1:
    print(f"Element found at index is: {result}")
else:
    print("Element not found")