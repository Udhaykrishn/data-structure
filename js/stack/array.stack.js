class Stack{
    constructor(){
        this.stack = [];
    }


    push(data){
        this.stack.push(data)
    }

    pop(){
        return  this.stack.pop()
    }
}