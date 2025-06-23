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

    append(data){
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
        console.log("peek data: ",data)
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


        let slow = this.top;
        let fast = this.top;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        console.log("mid is: ",slow.data)
    }

    delete(data){
        let temp = new Stack();

        while(!this.empty()){
            let last = this.pop();
            if (last === data) break
            temp.append(last)
        }

        while(true){
            let current = temp.pop()

            if(!current){
                break
            }else{
                this.append(current)
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

stack.append(10)
stack.append(20)
stack.append(30)

stack.delete(30)

stack.display()