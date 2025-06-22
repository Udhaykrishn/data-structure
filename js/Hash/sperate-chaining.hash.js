// Hash table collision handling using sperate chainig

class HashTable{
    constructor(size = 10){
        this.size = 10;
        this.tabe = [];

        for(let i = 0; i<size; i++){
            this.tabe[i] = []
        }
    }

    _hash(key){
        let hash = 0;

        for(let i = 0; i < key.length; i++){
            hash += key.charCodeAt(i)
        }

        return hash % this.size
    }

    set(key,value){
        const index = this._hash(key)
        const bucket = this.tabe[index]


        for(let i = 0; i < bucket.length; i++){
            if(bucket[i][0] === key)
                bucket[i][1] = value;
                break;
        }

        bucket.push([key,value])
    }

    get(key){
        const index = this._hash(key)
        const bucket = this.tabe[index]

        for(let i = 0; i<bucket.length; i++){
            if(bucket[i][0] === key)
                return bucket[i][1]
        }

        return null; // not found
    }
}

const ht = new HashTable()

ht.set("name","uday")

console.log(ht.get("name"))