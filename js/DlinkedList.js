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
        this.tail = null;
    }

    append(data){
        const node = new Node(data);

        if(!this.head){
            this.head = node;
            this.tail = node;
            return;
        }

        let current = this.head;

        while(current.next){
            current = current.next;
        }

        node.prev = current;
        current.next = node;
        this.tail = node;
    }


    prepend(data){
        const node = new Node(data)
        if(!this.head) {
            this.head = node;
            this.tail = node;
            return 
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node
    }

    delete(data){
        if(!this.head) return null;


        if(this.head.data === data){
            if(this.head.next){
                this.head.next.prev = null;
            }
            this.head = this.head.next;
            return
        }

        if(this.tail.data === data){
            this.tail.prev.next = null;
            return;
        }

        let current = this.head


        while(current && current.data !== data){
            current = current.next;
        }

        if(!current) return null;

        if(current.prev){
            current.prev.next = current.next;
        }

        if(current.next){
            current.next.prev = current.prev
        }
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
DLL.append(40)
DLL.append(50)


DLL.delete(50)

DLL.display()


