const value=Object.create({age:10, name:'sai', comments:'10'})

var val=value
var isSame= value==val?true: false


function callFor() {
    var val={age:10, name:'sai', comments:'10'}
    console.log(Object.values(val))
    for (const val in Object.keys(val)) {
        console.log("val", val)
    }
}


function callFor2() {
    var val={age:10, name:'sai', comments:'10'}
    console.log(this.value, val)
    Object.keys(val).forEach((e) => {
        console.log("with obj keys", e)
    });
}

console.log("object", value)

console.log("isame", isSame)

console.log("for", callFor2())