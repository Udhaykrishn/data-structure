class Stack:
    def __init__(self):
        self.stack = []
        
    def push(self,data):
        self.stack.append(data)
        
    def empty(self):
        return len(self.stack) == 0
    
    def peek(self):
        return None if self.empty() else self.stack[len(self.stack) - 1]
    
    def pop(self):
        return None if self.empty() else self.stack.pop()
    
    def display(self):
        temp = Stack()
        
        while not self.empty():
            data = self.pop()
            print(data)
            temp.push(data)
        
        while not temp.empty():
            self.push(temp.pop())
            
            
stack = Stack()
            
stack.push(10)
stack.push(20)
stack.push(30)

stack.display()

print("\npeek: ",stack.peek(),"\n")

stack.pop()

stack.display()