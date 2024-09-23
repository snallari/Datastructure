//Heaps are one type of trees
//Heaps are of 2 types
//Min heap stores the min heap at the root node
//Max heap stores the max heap at the root node
//Heaps are usually for storing purposes
//Insert:
//Push to the array
//Median of the array
//If it is greater swap and again take the median

class Heaps {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12]
    }

    insert(element) {
        let median, idx, temp, count = 0
        this.values.push(element)
        idx = this.values.length - 1
        while (idx > 0) {
            median = Math.floor(idx / 2)
            if (this.values[idx] > this.values[median]) {
                this.swap(median, idx)
            }
            idx = median
        }
        return this.values
    }
    swap(a, b) {
        let temp;
        temp = this.values[a]
        this.values[a] = this.values[b]
        this.values[b] = temp
        return this.values
    }
}

var heap = new Heaps()
console.log(heap.insert(55))
console.log(heap.insert(101))
console.log(heap.insert(21))
