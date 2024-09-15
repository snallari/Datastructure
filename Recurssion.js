class Sample {
    i=1
    acc=[]
    constructor() {
        //this.printNos([1,2,3,4,5,6,7,8,9,10])
    }

    printNos(N) {
        if (N == this.i) {
            return true
        } else {
            this.acc.push(this.i)
            console.log(this.acc)
            this.i++
            return this.printNos(N)
        }
    }
}

console.log(new Sample().printNos(10))
   
   