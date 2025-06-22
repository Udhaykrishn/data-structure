class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
    }

    append(data){
        const node = new Node(data)
        node.next = this.top;
        this.top = node
    }
}