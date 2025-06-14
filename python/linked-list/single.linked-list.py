class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
    

class LinkedList:
    def __init__(self):
        self.head = None
        self.size = 0
        
        
    def isEmpty(self):
        return self.head is None
    
    def increase(self):
        self.size += 1
        
    def decrease(self):
        self.size -= 1
        
    def append(self,data):
        node = Node(data)
        
        if self.isEmpty():
            self.head = node
        else:
            current = self.head
            
            while current.next:
                current = current.next
            
            current.next = node
            
        self.increase()
            
    def prepend(self,data):
        node = Node(data)
        if self.isEmpty():
            self.head = node
        else:
            node.next = self.head
            self.head = node
        
        self.increase()
        
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
                self.decrease()
                return
        
        prev = None
        
        while fast and fast.next:
            prev = slow
            slow = slow.next
            fast = fast.next.next
            
        prev.next = slow.next  
        self.decrease()   
        
    
    def deleteLastElement(self):
        
        if self.isEmpty():return 
        
        if not self.head.next:
            self.head = None
            self.decrease()
            return 
        
        current = self.head
        
        prev = None
        
        while current.next:
            prev = current
            current = current.next
        
        prev.next = None   
        self.decrease()
        
        
    def reverse(self):
        if self.isEmpty(): return
        
        prev = None
        current = self.head
        
        while current:
            next = current.next
            current.next = prev
            prev = current
            current = next
            
        self.head = prev
        
            
    def delete(self,data):
        
        if self.isEmpty():
            return
        
        if(self.head.data is data):
            self.head = self.head.next
            self.decrease()
            return
        
        current = self.head
        prev = None
        
        while current and current.data is not data:
            prev = current
            current = current.next
            
        if current:
            prev.next = current.next
            self.decrease()
            
            
    def deleteFirstElement(self):
        if self.isEmpty(): return
        
        self.head = self.head.next
        self.decrease()
            
              
        
    def deleteWithIndex(self,index):
        if not self.head: return
        
        if self.size < index or index <= 0:
            print("Index out or range")
            return
        
        if index == 1:
            self.deleteFirstElement()
            return
        
        count = 0
        current = self.head
        prev = None
        
        while count < index-1 and current:
            count += 1
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

linked.deleteWithIndex(1)

linked.display()