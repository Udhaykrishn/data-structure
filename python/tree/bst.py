class Node:
    def __init__(self,data):
        self.data = data
        self.left = None
        self.right = None

class Tree:
    def __init__(self):
        self.root = None

    
    def insert(self,data,root):
        node = Node(data)

        if not self.root:
            self.root = node
            return
    
        current = self.root


        while True:
            if data < current.data:
                if current.left == None:
                    current.left = node
                    return
                current = current.left
            else:
                if current.right == None:
                    current.right = node
                    return
                current = current.right
        