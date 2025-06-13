class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}


class DLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
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

        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.increase();
            return;
        }

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        node.prev = current;
        current.next = node;
        this.tail = node;
        this.increase()
    }


    prepend(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node
        }
        this.increase();
    }

    delete(data) {
        if (!this.head) return null;


        if (this.head.data === data) {
            if (this.head.next) {
                this.head.next.prev = null;
            }
            this.head = this.head.next;
            this.decrease();
            return
        }

        if (this.tail.data === data) {
            this.tail.prev.next = null;
            this.decrease();
            return;
        }

        let current = this.head


        while (current && current.data !== data) {
            current = current.next;
        }

        if (!current) return null;

        if (current.prev) {
            current.prev.next = current.next;
        }

        if (current.next) {
            current.next.prev = current.prev
        }

        this.decrease();
    }


    indexInsert(data, index) {

        const node = new Node(data)

        if (!this.head) return null;

        if (index === 1) {
            this.head.next.prev = null;
            this.head = this.head.next;
            this.increase();
            return;
        }

        if (this.size === index) {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
            this.increase();
            return null;
        }

        let count = 0;
        let current = this.head;

        while(count < index - 1 && current){
            count++;
            current = current.next;
        }

        node.next = current.next;
        current.next.prev = node;
        current.next = node;
        node.prev = current;
        this.increase();

    }

    reverse(){
        let current = this.tail;

        while(current){
            console.log(current.data)
            current = current.prev;
        }
    }

    display() {
        if (!this.head) return;

        let current = this.head;

        while (current) {
            console.log("current data: ", current.data)
            current = current.next;
        }
        console.log("size is: ",this.size)
    }
}


const DLL = new DLinkedList()


DLL.append(10)
DLL.append(20)
DLL.append(30)
DLL.append(40)
DLL.append(50)

DLL.indexInsert(60,3)

DLL.display()
DLL.reverse()

