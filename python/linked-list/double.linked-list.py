class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
        self.prev = None
        
        
        
class DL:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0
        
    def isEmpty(self):
        return self.head is None
    
    def increase(self):
        self.size += 1
        
    def decrease(self):
        self.size -= 1
    
    def append(self,data):
        node = Node(data)
        
        if not self.head:
            self.head = node
            self.tail = node
        else:
            current = self.head
            
            while current.next:
                current = current.next
                
            if current:
                node.prev = current
                current.next = node
                self.tail = node
                
        self.increase
        
    def prepend(self,data):
        node = Node(data)
        
        if not self.head:
            self.head = node
            self.tail = node
        else:
            node.next = self.head
            self.head.prev = node
            self.head = node
            
        
    def display(self):
        current = self.head
        
        
        while current:
            print(current.data)
            current = current.next
            
            
DL = DL()

DL.append(10)
DL.append(20)
DL.append(30)
DL.append(40)

DL.display()
        
            