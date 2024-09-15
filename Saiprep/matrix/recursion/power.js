function power(val,n){

   
    function reducepow(n){
        if(n==0){
            return 1
        }
        return val*reducepow(n-1)
    }
    return  reducepow(n)
}


console.log(power(3,3))
