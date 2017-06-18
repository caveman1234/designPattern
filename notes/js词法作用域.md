**JS词法作用域**

***

除this外，js的作用域是词法作用域。意思就是在函数定义的时候就决定了他的访问范围。

for example

```js
function Func(fn){
	var _message = 'inner';
	fn();
}

function fn(){
	console.log(_message);
}
//调用函数
Func(fn);
//这样fn是不能访问 _message 因为定义时决定了它的访问范围；

but 需要访问里面的参数

we can do like this:

function Func(fn){
	var _message = 'inner';
	fn(_message);
}

function fn(msg){
	console.log(msg);
}
Func(fn);



```
