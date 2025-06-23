class Stack{
    constructor(){
        this.stack = [];
    }


    push(data){
        this.stack.push(data)
    }

    empty(){
        return this.stack.length === 0
    }

    pop(){
        if(this.empty())
            return null;
        return  this.stack.pop()
    }

    peek(){
        if(this.empty())
            return null;
        return this.stack[this.stack.length - 1]
    }

    display(){
        let temp = new Stack();

        while(!this.empty()){
            let data = this.pop()
            console.log(data)
            temp.push(data)
        }

        while(!temp.empty()){
            this.push(temp.pop())
        }
    }
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)

stack.display()