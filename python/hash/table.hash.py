class Hash:
    def __init__(self,size=10):
        self.size = size
        self.table = [None for _ in range(size)]
        
        