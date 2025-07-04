class Node:
    def __init__(self,data):
        self.data = data
        self.left = None
        self.right = None

class Tree:
    def __init__(self):
        self.root = None

    
    def insert(self,data):
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

    def min(self,root):
        if not root.left:
            return root.data
        else:
            return min(root.left) 
        
    
    def bfs(self):
        queue = []
        queue.append(self.root)

        while len(queue):
            node = queue.pop(0)
            print(node.data)

            if node.left:
                queue.append(node.left)
            
            if node.right:
                queue.append(node.right)




tree = Tree()

tree.insert(10)
tree.insert(20)
tree.insert(15)
tree.insert(5)
tree.insert(8)

print(tree.min(tree.root.left))


tree.bfs()