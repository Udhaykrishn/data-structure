class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class Tree{
    constructor(){
        this.root = null;
    }


    insert(data){

        const node = new Node(data)

        if(!this.root){
            this.root = node
            return
        }

        let current = this.root;

        while(true){
            if(data < current.data){
                if(current.left === null){
                    current.left = node
                    return;
                }
                current = current.left;
            }else{
                if(current.right === null){
                    current.right = node;
                    return
                }
                current = current.right;
            }
        }
    }

    delete(data){
        return this._deleteNode(data,this.root)
    }


    _deleteNode(data,root){
        if(!root){
            return null;
        }

        if(data < root.data){
            root.left = this._deleteNode(data,root.left);
        }else if(data > root.data){
            root.right = this._deleteNode(data,root.right);
        }else{
            if(!root.left && !root.right){
                return null;
            }

            if(root.left){
                return root.right;
            }
            if(root.right){
                return root.left;
            }


            const min = this.min(root.right)
            root.right = this._deleteNode(min,root.right)
        }
        return root;
    }


    min(root=this.root){
        if(!root.left){
            return root.data;
        }else{
            return this.min(root.left)
        }
    }


    bfs(){
        const queue = [];
        queue.push(this.root);

        while(queue.length){
            const node = queue.shift();
            console.log(node.data)


            if(node.left){
                queue.push(node.left);
            }

            if(node.right){
                queue.push(node.right);
            }
        }
    }
}

const tree = new Tree();

tree.insert(10)
tree.insert(4)
tree.insert(20)
tree.insert(15)
tree.insert(25)
tree.insert(8)

tree.delete(8)

tree.bfs() // 10 4 20 8 15 25
