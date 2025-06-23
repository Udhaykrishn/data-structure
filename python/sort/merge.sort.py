arr = [20,40,30,100,5023,409,48,4348,394]



print("Original array is: ",arr)

def mergeSort(left:list[int],right:list[int])->list[int]:
    result:list[int] = []
    i:int = 0
    j:int = 0
    
    while i < len(left) and j < len(right):
        result.append(left[i] if left[i] < right[j] else right[j])
        if left[i] < right[j]:
            i += 1
        else:
            j += 1

            
    result.extend(left[i:])
    result.extend(right[j:])
            
    return result

def merge(arr:list[int]) -> list[int]:
    if len(arr) < 2:
        return arr
    
    mid:int = len(arr) // 2
    left:list[int] = arr[:mid]
    right:list[int] = arr[mid:]
    
    
    return mergeSort(merge(left),merge(right))


result = merge(arr)

print("Sorted array is: ",result)