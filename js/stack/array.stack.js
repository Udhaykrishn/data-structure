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
}