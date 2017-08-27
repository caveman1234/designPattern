> compose
```js
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
```
> reduce 
```js
let arr = [1,2,3,4,5];
arr.reduce((acc,value,index,context)=>{

})
acc是迭代的结果，函数最终返回acc的结果，acc从index=0开始，value从index=1开始
arr.reduce((acc,value,index,context)=>{

},[])
若指定了acc的初始值acc value index都从0开始。
```
> compose:
```js
var arr = [fn1,fn2,fn3,fn4];
arr.reduce((acc,fun)=>(...args)=>acc(fun(...args)))
### 第一次循环参数：
acc > fn1
fun > fn2
返回（也就是迭代后的值acc）：
(...args) => fn1(fn2(...args))
### 第二次循环参数：
acc > (...args) => fn1(fn2(...args))
fun > fn3
返回（也就是迭代后的值acc）：
(...args) => fn1(fn2(fn3(...args)))
### 第三次循环参数：
acc > (...args) => fn1(fn2(fn3(...args)))
fun > fn4
返回（也就是迭代后的值acc）：
(...args) => fn1(fn2(fn3(fn4(...arg))))
```

