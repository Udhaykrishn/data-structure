class HashTable:
    def __init__(self,size=10):
        self.size = size
        self.table = [[] for _ in range(size)]
        