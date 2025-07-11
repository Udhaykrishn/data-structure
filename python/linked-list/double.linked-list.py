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
                
        self.increase()
        
    def prepend(self,data):
        node = Node(data)
        
        if not self.head:
            self.head,self.tail = node,node
        else:
            node.next = self.head
            self.head.prev = node
            self.head = node
            
        self.increase()
            
    def add_element_in_end(self,data):
        node = Node(data)
        
        if not self.head:
            self.head,self.tail = node,node
        else:
            node.prev = self.tail
            self.tail.next = node
            self.tail = node
        
        self.increase()
        
    def delete(self,data):
        if not self.head:
            return 
        
        if self.head.data == data:
            if self.head.next:
                self.head.next.prev = None
                self.head =  self.head.next
            else:
                self.head = None
                self.tail = None
            self.decrease()
            return 
        
        current = self.head
        prev = None
        
        while current and current.data != data:
            prev = current
            current = current.next
            
        if current.next:
            prev.next = current.next
            current.next.prev = prev
        else:
            prev.next = None
            self.tail = prev
            
            
        self.decrease()
        
        
    def insert_with_index(self,index,data):
        node = Node(data)
        
        if self.size < index or index <= 0:
            print(f"Index is out of range, 1 to {self.size} is possible")
            return
        
        if not self.head and index == 1:
            self.head,self.tail = node
            self.increase()
            return
        
        
        current = self.head
        
        count = 0
        
        while count < index-1 and current:
            count += 1
            current = current.next

        
        if not current.next:
            node.prev = current
            current.next = node
            self.tail = node
        else:
            node.prev = current
            node.next = current.next
            current.next.prev = node
            current.next = node
            
            
        self.increase()
      
      
    def reverse(self):
        current = self.tail
        
        while current:
            print(current.data)
            current = current.prev
            
        print(f"size is: {self.size}")
        
    
    def delete_element_with_end(self,index):
        if not self.head:
            print("no")
            return 
        
        print(self.size + 1 < index or index <= 0)
        
        if self.size < index or index <= 0:
            print(f"Index is out of range, 1 to {self.size} is possible")
            return
        
        slow = self.head
        fast = self.head
        
        
        for _ in range(index):
            if fast != None:
                fast = fast.next
            
        
        if not fast:
            self.head = self.head.next
            self.decrease()
            return
            
        
        while fast.next:
            slow = slow.next
            fast = fast.next  
        
        if not slow.next.next:
            self.tail = slow
        else:
            slow.next.next.prev = slow
            slow.next = slow.next.next
        self.decrease()
        
        
    def find_mid_element(self):
        if not self.head:return
        
        fast,slow = self.head,self.head
        
        
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            
        print(f"mid element is :{slow.data}")
       
    
    def display(self):
        current = self.head
     
        while current:
            print(current.data)
            current = current.next
        print(f"size is: {self.size}")  
            
DL = DL()

DL.append(10)
# DL.append(20)
# DL.append(30)
# DL.append(40)
# DL.append(50)

DL.delete_element_with_end(1)
DL.display()

# DL.reverse()

        
            