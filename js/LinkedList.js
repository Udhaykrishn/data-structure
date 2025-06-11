class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    increase() {
        this.size++;
    }

    decrease() {
        this.size--;
    }

    append(data) {
        const node = new Node(data);

        if (this.head === null) {
            this.head = node;
        } else {

            let current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.increase();
    }

    findMidElement() {
        if(this.isEmpty()) return null;

        let slow = this.head;
        let fast = this.head;

        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }


        console.log(`mid elem is: ${slow.data}`)
    }

    delete(target) {
        if (!this.head) return;

        let current = this.head;

        if (current.data === target) {
            this.head = current.next;
            return null;
        }

        let prev = null;
        while (current && current.data !== target) {
            prev = current;
            current = current.next;
        }

        if (current) {
            prev.next = current.next;
            this.decrease();
        }
    }

    isEmpty(){
        return this.head === null;
    }

    indexInsertAfter(index,data){
        const node = new Node(data)

        if(this.isEmpty()) return null;

        let count = 0;

        if(this.size < index || index <= 0){
            console.log("given index is out of range")
            return;
        }

        let current = this.head;


        while(count < index-1 && current){
            count++;
            current = current.next;
        }
        if(current){
            node.next = current.next;
            current.next = node;
            this.increase();;
        }
    }


    indexInsertBefore(index,data){
        const node = new Node(data)

        if(this.isEmpty()) return null;

        let current = this.head;

        if(index === 1){
            node.next = this.head;
            this.head = node;
            this.increase();
            return
        }        

        let count = 0;

        if(this.size < index || index <= 0 ){
            console.log("out of range index entered")
            return null;
        }

        let prev = null;

        while(count < index-1 &&  current){
            count++;
            prev = current;
            current = current.next;
        }

        if(prev){
            node.next = current;
            prev.next = node;
            this.increase();
        }
    }

    deleteLastElement() {
        let current = this.head;

        if(this.size === 1){
            this.head = null;
            this.decrease();
            return
        }

        while (current && current.next && current.next.next) {
            current = current.next;
        }

        if (current) {
            current.next = null;
            this.decrease()
        }

    }

    display() {
        let current = this.head;

        while (current) {
            console.log(current.data)
            current = current.next;
        }

        console.log("size is: ", this.size)
    }
}


const LL = new LinkedList();

LL.append(10)
LL.append(20)
LL.append(30)
LL.append(40)

LL.indexInsertBefore(1,100)
LL.indexInsertAfter(1,200)

LL.display()

// LL.findMidElement()