class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}


class DLinkedList{
    constructor(){
        this.head = null;
    }

    append(data){
        const node = new Node(data);

        if(!this.head){
            this.head = node;
            return;
        }

        let current = this.head;

        while(current.next){
            current = current.next;
        }

        node.prev = current;
        current.next = node;
    }


    prepend(data){
        const node = new Node(data)
        if(!this.head) {
            this.head = node;
            return 
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node
    }


    display(){
        if (!this.head) return;

        let current = this.head;

        while(current){
            console.log("current data: ",current.data)
            current = current.next;
        }

    }
}


const DLL = new DLinkedList()


DLL.append(10)
DLL.append(20)
DLL.append(30)
DLL.prepend(100)
DLL.prepend(200)

DLL.display()


