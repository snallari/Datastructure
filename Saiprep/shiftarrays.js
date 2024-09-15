
const a = [1, 3, 4, 5, 6, 7, 9]
const ob = { a: 1, b: 2, c: 3 }
var arrayCopy = [...a]
var result, resPro
var filter, filterPr
var filterResults


//var result=a.shift()

console.log("isarray", arrayCopy, a)

// var resultsUnshift=a.unshift(10,11)

// var respop=a.pop()

// var respush=a.push([11,22,33])

// console.log("shift",result, a)
console.log("original array", a)
var copywithin = a.copyWithin(5, 1, 3)

console.log("copywithin", copywithin, a)

var concat = a.concat([11, 91])

var resuce = a.reduce((acc, v) => {
    console.log("add", a, a[v], acc)
    return acc.concat(v)
}, [])

//TODO

async function makeCall() {
    var res = await fetch("https://dummyjson.com/products", {
        method: "GET"
    })
    var result = await res.json()
    console.log(result)
    setTimeout(() => {
        filter = result && getResults()
    }, 1000)
}
//WHERE EVER STRUCK GO ONE STEP BACK
function getResults() {
    console.log(result.products)
    var products = result.products

    filterResults = products.filter((p) => { return p.price > 12 && p.price < 16 })//o(n)
    console.log("filter", filterResults, "products", products)

    findResults = products.find((p) => { return p?.price > 100 })//o(1)
    console.log("find", findResults, "products", products)

    findLast = products.findLast((p) => p.price > 900)
    console.log("last", findLast, "products", products)

    mapResults = products.map((p) => {
        p.area = Math.ceil(p.price * p.discountPercentage, 1)
        return p
    })
    console.log("map", mapResults, "products", products)

    sortCopy = [...products]
    sortCopy2 = [...products]
    console.log("sortcopy", sortCopy)
    sortResults = sortCopy.sort((a, b) => { return a.price - b.price})
    console.log("sort", sortResults)
    [""]
    sortDiscount = sortCopy2.sort((a, b) => b.discountPercentage - a.discountPercentage)
    console.log("sort", sortDiscount)


    console.log("reverseproducts", products)
    reverseDiscount =products.reverse()
    console.log("reverse", reverseDiscount, products)


    products.forEach((element, index) => {
        console.log("element", element, index)
    });

    for(let [k, v] of products.entries()){
        console.log("ientries", k , v)
    }

    for(let k of products.keys()){
        console.log("keys",k);
    }


    console.log("isArray", Array.isArray(products))

    dataArray=Array.from("foo")
    const map=new Map([[1,"a"], [2,"b"]])
    const set=new Set(users)
    dataset=Array.from(set)
    datamap=Array.from(map)    
    console.log("map", datamap)
    console.log("set", dataset)
    console.log("arraycopy", datamap.flatMap((m)=>m))


    console.log("lastindex", products.indexOf((p)=>p.id===1))


    const array1 = [1,2]
    const array2 = [...users]
    isIncludes = array1.includes(2)
    console.log("includes", isIncludes)
    isIncludes = array2.includes((obi)=>obi.id==1)
    console.log("includes", isIncludes)


    isEverySubset = array1.every((a) => {
        return array2.includes(a)
    })
    console.log("isevery", isEverySubset)


    isSomeSubset = array1.some((a) => {
        return array2.includes(a)
    })

    console.log("issome", isSomeSubset)



    isproductEvery = products.every((p) =>
        p.price < 1749);
    console.log("productsevery", isproductEvery)



    productSome = products.some((p) => {
        return p.price > 13
    });
    console.log("productssome", productSome)


    const d = {
        area: 16129,
        brand:"Apple",
        category: "smartphones"
    }
    productratingFill = products.fill(d, 1, 1)
    // TODO PROTOTYPE OBJ WITH ARRAY dobj=Array.prototype.fill.call(d,{10})

    console.log("fill", productratingFill)

    reduce = filterResults.reduce((a, v) => {
        console.log("a", a)
        return a.title + v.title
    })
    console.log("reduce", reduce)

    console.log("users", users)
    findIndexUsers=users.findLastIndex((u)=>{
        return u.name=="Ervin Howell"
    })
    console.log("indexusers",findIndexUsers)
}
    




console.log("concat", makeCall())