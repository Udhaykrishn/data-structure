def binary_search(arr,target):
    left,right = 0, len(arr) - 1
    
    while left <= right:
        mid = int((left + right) / 2)
        
        if arr[mid] == target:
            return mid
        
        if arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
            
    return -1



arr = [10,20,30,40,50] # sorted array need to perform binary search


target = 50


result = binary_search(arr,target)

if result != -1:
    print(f"Element found at index is: {result}")
else:
    print("Element not found")