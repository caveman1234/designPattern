> bind 为什么只能bind改变一次this
```js
function myBind(fn, ctx) {
    let args = [...arguments].slice(2);
    return function() {
        let args1 = [...args, ...arguments]
        fn.apply(ctx, args1);
    }
}
let obj = {
    age: 'local-age'
};
let age = 'global';

function func(arg1, arg2) {
    console.log(this.age, arg1, arg2)
}
let x = myBind(func, obj, 1)
x(2)
```
> 原因

fn.apply(ctx, args1);在第一次bind的时候ctx就固化下来了，以后的bind不会改变了