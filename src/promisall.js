var users
const p= fetch('https://jsonplaceholder.typicode.com/users', {
    method: "GET"
})
const p1=fetch('https://dummyjson.com/auth/products', {
    method: "GET"
})
Promise.all([p, p1, p]).then(function (values) {
    const res=values.filter((v)=>v.status==200);
    console.log("res", values,res)
}).catch((e)=>console.log(e));ok

