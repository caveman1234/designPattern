> 为什么事件中的回调函数this指向window，若要指定this指向，需用bind语法，绑定this的域？
事件是用订阅发布设计模式设计的，
一个dom对象订阅了一个事件，就是将所绑定的回掉函数放进毁掉队列，如下

```js
{
    domNode:{
        click:[cb1,cb2,cb3],
        mouseup:[],
        mousedown:[]
    }
}
```
订阅的时候在click数组中push回掉函数，
触发click事件的时候
```js
click.forEach(function(cb){
    cb()
})
```
此时cb在一个函数中执行，是匿名函数，this域指向window，所有有时需要this指向自己想要的对象，需要传入cb的时候绑定this。cb.bind(obj)；
因为bind后的函数不能再被绑定，在任何地方执行都指向规定的域。

```js
dom.onclick = function(){}.bind(obj||this)
```
