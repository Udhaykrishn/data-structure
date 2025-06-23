class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(data) {
        this.queue.push(data)
    }

    dequeue() {
        return this.empty() ? null : this.queue.shift()
    }

    empty() {
        return this.queue.length === 0
    }

    peek() {
        return this.empty() ? null : this.queue[0]
    }

    display() {
        console.log(this.queue.join(" -> "))
    }
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

console.log("peek: ",queue.peek())

queue.display()

queue.dequeue()

queue.display()