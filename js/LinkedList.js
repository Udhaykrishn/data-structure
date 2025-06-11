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

    delete(target) {
        let current = this.head;

        if (this.head.data === target) {
            this.head = this.head.next;
            return null;
        }

        let prev = null;
        while (current.next && current.data !== target) {
            prev = current;
            current = current.next;
        }

        if(current.data === target){
            prev.next = current.next;
            this.decrease();
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
LL.append("H")
LL.append(30)

LL.display()