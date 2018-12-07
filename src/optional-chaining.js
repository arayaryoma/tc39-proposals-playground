const fetch = require('node-fetch');
fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(posts => {
    posts.forEach(post => {
        // console.log(post?.author?.name);
    })
});

const obj = {
    a: {}
};
console.log(obj); // -> { a: {} }
console.log(obj.a); // -> { }
console.log(obj.a?.b); // -> undefined
console.log(obj.a?.b?.c); // -> undefined

