class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
        
class Stack:
    def __init__(self):
        self.top = None
        
    def push(self,data):
        node = Node(data)
        node.next = self.top
        self.top = node
        
    def empty(self):
        return self.top is None
        
    def pop(self):
        current_data = self.top.data
        self.top = self.top.next
        return current_data
    
    def peek(self):
        return None if self.empty() else self.top.data
      
    
# stack = Stack()


# stack.push(10)
# stack.push(20)
# stack.push(30)

# stack.display()

# print("\npeek: ",stack.peek(),"\n")

stack.pop()

stack.display()