class Node:
    def __init__(self,data):
        self.data = data
        self.next,self.prev = None,None
        
        
class DL:
    def __init__(self):
        self.head,self.tail = None,None
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
            self.head,self.tail = node,node
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
            self.head,self.tail = node,node
        else:
            node.next = self.head
            self.head.prev = node
            self.head = node
            
        self.increase()
            
    def addElementInEnd(self,data):
        node = Node(data)
        
        if not self.head:
            self.head,self.tail = node,node
        else:
            node.prev = self.tail
            self.tail.next = node
            self.tail = node
        
        self.increase()
        
        
    def reverse(self):
        current = self.tail
        
        while current:
            print(current.data)
            current = current.prev
        
        
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

DL.reverse()

# DL.display()
        
            