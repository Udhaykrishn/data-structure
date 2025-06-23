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
        
      
    
# stack = Stack()


# stack.push(10)
# stack.push(20)
# stack.push(30)

# stack.display()

# print("\npeek: ",stack.peek(),"\n")

stack.pop()

stack.display()