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
        if (this.isEmpty()) return null;

        let slow = this.head;
        let fast = this.head;

        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }


        console.log(`mid elem is: ${slow.data}`)
    }

    deleteMidElement(){
        if(!this.head) return

        if(!this.head.next){
            this.head = null;
            return 
        }

        let slow = this.head;
        let fast = this.head;

        let prev = null;

        while(fast&& fast.next){
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

       prev.next = slow.next;
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

    isEmpty() {
        return this.head === null;
    }

    indexInsertAfter(index, data) {
        const node = new Node(data)

        if (this.isEmpty()) return null;

        let count = 0;

        if (this.size < index || index <= 0) {
            console.log("given index is out of range")
            return;
        }

        let current = this.head;


        while (count < index - 1 && current) {
            count++;
            current = current.next;
        }
        if (current) {
            node.next = current.next;
            current.next = node;
            this.increase();;
        }
    }


    indexInsertBefore(index, data) {
        const node = new Node(data)

        if (this.isEmpty()) return null;

        let current = this.head;

        if (index === 1) {
            node.next = this.head;
            this.head = node;
            this.increase();
            return
        }

        let count = 0;

        if (this.size < index || index <= 0) {
            console.log("out of range index entered")
            return null;
        }

        let prev = null;

        while (count < index - 1 && current) {
            count++;
            prev = current;
            current = current.next;
        }

        if (prev) {
            node.next = current;
            prev.next = node;
            this.increase();
        }
    }

    reverse() {
        let current = this.head;
        let prev = null;

        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }

    deleteLastElement() {
        let current = this.head;

        if (this.size === 1) {
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


    removeNthEndNode(n) {
        let fast = this.head;
        let slow = this.head;

        if(this.size < n || n <= 0){
            console.log("Nth value is out of range ")
            return
        }


        for (let i = 1; i <=n; i++) {
            if(fast !== null){
                fast = fast.next;
            }
        }

        if(!fast){
            this.head = this.head.next;
            this.decrease();
            return;
        }

        while(fast.next){
            fast = fast.next;
            slow = slow.next;
        }

        slow.next = slow.next.next
        this.decrease();
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
LL.append(50)

// LL.indexInsertBefore(1,100)
// LL.indexInsertAfter(1,200)


LL.deleteMidElement()
LL.deleteMidElement()
LL.deleteMidElement()
LL.deleteMidElement()

LL.display()

// LL.reverse()

// LL.display()

// LL.findMidElement()