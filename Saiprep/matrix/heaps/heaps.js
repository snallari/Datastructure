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
        this.values = [10]
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
    //Only can delete highest priority element
    delete() {
        let replace = "", extract = ""
        replace = this.values.pop()
        extract = this.values[0]
        this.values[0] = replace
        this.heapifyDown()
        return extract
    }

    heapifyDown() {
        let idx = 0
        const length = this.values.length
        const element = this.values[0]
        let lidx, ridx, l, r, swap
        while (true) {
            lidx = 2 * idx + 1
            ridx = 2 * idx + 2
            if (lidx < length) {
                l = this.values[lidx]
                if (l > element) {
                    swap = lidx
                }
            }
            if (ridx < length) {
                r = this.values[ridx]
                if ((r > element && swap == null) || (swap !== null && r > l)) {
                    swap = ridx
                }
            }
            if (swap == null) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
            swap=null
            console.log("values", this.values);
        }
        

    }
}

var heap = new Heaps()
console.log(heap.insert(20))
console.log(heap.insert(30))
console.log(heap.insert(25))
console.log(heap.insert(5))
console.log(heap.insert(40))
console.log(heap.insert(35))
console.log(heap.delete())
// console.log(heap.insert(101))
// console.log(heap.insert(21))
