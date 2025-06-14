class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
    

class LinkedList:
    def __init__(self):
        self.head = None
        
        
    def isEmpty(self):
        return self.head is None
        
    def append(self,data):
        node = Node(data)
        
        if self.isEmpty():
            self.head = node
        else:
            current = self.head
            
            while current.next:
                current = current.next
            
            current.next = node
            
    def display(self):
        current = self.head
        
        while current:
            print(current.data)
            current = current.next

linked = LinkedList()


linked.append(10)
linked.append(20)
linked.append(30)
linked.append(40)

linked.display()