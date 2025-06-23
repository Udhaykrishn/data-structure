class Hash:
    def __init__(self,size=10):
        self.size = size
        self.table = [None for _ in range(size)]
        
    def hash(self,key):
        hash_value = 0
        
        for i in range(len(key)):
            hash_value += ord(key[i])
            
        return hash_value % self.size
    
    def set(self,key,value):
        index = self.hash(key)
        self.table[index] = value
         
    def get(self,key):
        index = self.hash(key)
        return self.table[index]
      
    def remove(self,key):
        index = self.hash(key)
        self.table[index] = None
        
        
ht = Hash()

ht.set("name","uday")

print(ht.get("name"))

ht.remove("name")

print(ht.get("name"))
