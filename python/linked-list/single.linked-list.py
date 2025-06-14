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
            
    def prepend(self,data):
        node = Node(data)
        if self.isEmpty():
            self.head = node
        else:
            node.next = self.head
            self.head = node
            
    def findMidElement(self):
        if self.isEmpty(): return 
        
        slow = self.head
        fast = self.head
        
        
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            
        print(f"Mid elemen is: {slow.data}")
        
   
    def deleteMidElement(self):
        
        if self.isEmpty():return 
        
        slow = self.head
        fast = self.head
        
        if not self.head.next:
                self.head = None
                return
        
        prev = None
        
        while fast and fast.next:
            prev = slow
            slow = slow.next
            fast = fast.next.next
            
        prev.next = slow.next        
        
        
            
    def delete(self,data):
        
        if self.isEmpty():
            return
        
        if(self.head.data is data):
            self.head = self.head.next
            return
        
        current = self.head
        prev = None
        
        while current and current.data is not data:
            prev = current
            current = current.next
            
        if current:
            prev.next = current.next
            
              
        
        
            
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

linked.prepend(100)

linked.deleteMidElement()

linked.display()