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

    empty(){
        return this.top === null;
    }

    peek(){
        if(this.empty()) return null;

        const data = this.top.data;
        console.log("peek data: ",data)
        return data;
    }

    display(){
        let current = this.top;

        while (current){
            console.log(current.data)
            current = current.next;
        }
    }
}



const stack = new Stack()

stack.append(10)
stack.append(20)
stack.append(30)

stack.display()