def linear_search(arr,target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
        
    return -1


arr = [10,30,20,50,40]

target = 50

result = linear_search(arr,target)

if  result != -1:
    print(f"Element found at index is: {result}")
else:
    print("Element not found")