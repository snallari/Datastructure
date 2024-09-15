
// function getTheCall(){
//   var data=fetch('https://jsonplaceholder.typicode.com/posts'). 
//   then(res=>res.json).
//   then(data=>console.log("data",data))
//   console.log("data",data)
// }
import fetch from 'node-fetch';
import axios from 'axios';

var results;

async function getTheCall() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if(res.status == 200){
        const data =await res.json()
        getData(data)
    }
}
// const getTheCall = () => {
//     axios({
//         method: 'get',
//         url: 'https://jsonplaceholder.typicode.com/posts',
//     })
//         .then(function (response) {
//             getData(response.data)
//         });
// }

function getData(res) {
    let arrayVal
    if (res) {
        arrayVal = res
        let filtered=arrayVal.filter((data)=>data.userId==1)
        console.log("values",filtered)
    }
}

function post() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
        });
}


getTheCall()
//console.log("results", results)

