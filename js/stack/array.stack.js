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
        return  this.stack.pop()
    }

    peek(){
        return this.stack[this.stack.length - 1]
    }
}