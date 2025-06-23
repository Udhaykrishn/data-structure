class Stack:
    def __init__(self):
        self.stack = []
        
    def push(self,data):
        self.stack.append(data)
        
    def empty(self):
        return len(self.stack) == 0
    
    def peek(self):
        return None if self.empty() else self.stack[len(self.stack) - 1]
    
    