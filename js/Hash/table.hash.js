function hash(key, size) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i)
    }


    return hash % size
}


const size = 10;

const hashTable = new Array(size).fill(null)


