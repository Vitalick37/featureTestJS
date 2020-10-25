'use strict'

    let a = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php')
    .then(data => {
        resolve(data.text());
    })
})

let b = new Promise((resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php')
.then(data => {
    resolve(data.text());
})
})

// a.then(data => {
//     console.log(data)
// })

// b.then(data => {
//     console.log(data)
// })

Promise.all([a,b]).then(value => {
    console.log(value);
    console.log(value[0]);
})