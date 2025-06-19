function hash(key, size) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i)
    }


    return hash % size
}


const size = 10;

const hashTable = new Array(size).fill(null)


function set(key,value){
    const index = hash(key,size)
    hashTable[index] = value
}

function get(key){
    const index = hash(key,size)

    return hashTable[index]
}

function remove(key){
    const index = hash(key,size)
    hashTable[index] = null;
}

function has(key){
    const index = hash(key,size)
    
    return hashTable[index] !== null
}

set("name","uday")
set("age",21)

console.log(has("age"))
remove("age")
console.log(has("age"))

console.log(get("name"),get("age"))