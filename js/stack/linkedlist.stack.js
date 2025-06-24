class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.size = 0;
    }

    push(data){
        const node = new Node(data)
        node.next = this.top;
        this.top = node
        this.size++
    }

    empty(){
        return this.top === null;
    }

    peek(){
        if(this.empty()) return null;

        const data = this.top.data;
        // console.log("peek data: ",data)
        return data;
    }

    pop(){
        if(this.empty()) return null;

        const data = this.top.data;
        this.top = this.top.next;
        this.size--;
        return data;
    }

    reverse(){
        if(this.empty()) return null;

        let current = this.top;
        let prev = null;

        while(current){
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next
        }
        this.top = prev;
    }

    findMid(){
        if(this.empty()){
            return null;
        }

        let n = this.size;
        let mid = Math.floor(n / 2)

        let temp = new Stack()

        let count = 0;

        while(!this.empty() && count <= mid){
            temp.push(this.pop())
            count++
        }

        const data = temp.peek()

        while(!temp.empty()){
            this.push(temp.pop())
        }

        console.log("mid is: ",data)
    }

    delete(data){
        let temp = new Stack();

        while(!this.empty()){
            let last = this.pop();
            if (last === data) break
            temp.push(last)
        }

        while(true){
            let current = temp.pop()

            if(!current){
                break
            }else{
                this.push(current)
            }   
        }
    }


    display(){
        let current = this.top;

        while (current){
            console.log(current.data)
            current = current.next;
        }
        console.log("size: ",this.size)
    }
}



const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)

stack.findMid()

stack.display()