class HashTable:
    def __init__(self,size=10):
        self.size = size
        self.table = [[] for _ in range(size)]
        
    
    def hash(self,key):
        hash_value = 0
        
        for i in range(len(key)):
            hash_value += ord(key[i])
        return hash_value % self.size