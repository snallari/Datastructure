/* ransom=aa
magzine=ab
test=magzine.includes(ransom) */

function checkString(ransome, magzine){
    var arr=magzine.split('')
    var rans=ransome.split('')
    var count=0
   for(var i=0; i<rans.length; i++){
    if(rans[i]==arr[i]){
        count++
    }else{
        break;
    }
   }
   return count==rans.length?true:false
}

console.log(checkString('aa','ab'))