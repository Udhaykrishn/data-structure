class HashTable:
    def __init__(self,size=10):
        self.size = size
        self.table = [[] for _ in range(size)]
        
    
    def hash(self,key):
        hash_value = 0
        
        for i in range(len(key)):
            hash_value += ord(key[i])
        return hash_value % self.size
    
    def set(self,key,value):
        index = self.hash(key)
        bucket = self.table[index]
        
        for i in range(len(bucket)):
            if bucket[i][0] == key:
                bucket[i][1] = value
                break
            
        bucket.append([key,value])