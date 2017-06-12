###两种创建对象的方式
---

1. 字面量{}

```js
var obj = {
	a:function(){
		return 'a';
	},
	b:obj.a()	//错误，在对象还没创建完成obj是undefined
};
这种方式，属性之间不能依赖。
```
2. new 

```js

function Func(){
	this.func1 = function(){
		return 'func1';
	}
	this.func2 = this.func1()+'+func2';
	this.func3 = func4() + 'func3';
	// 这里会出错，因为call操作，代码从上往下执行，这里只能调用在func3之前的obj上的方法。
	this.func4 = function(){
		return 'func3';
	}
	this.func5 = this.func6()+'+func5'
	//可以说明call操作在obj.__proto__ = prototypeObj之后
}
Func.prototype.func6 = function(){
	return 'func6';
}

var x = new Func();

//new操作步骤

var prototypeObj = {
	func1:function(){

		console.log('func1');
		return 'func1'
	}
};
function Func1(){
	this.func2 = function(){
		console.log(func2);
	}
	this.func3 = this.func1();
};
function newFun(){
	var obj = {};
	obj.__proto__ = prototypeObj;
	prototypeObj.constructor = newFun;
	Func1.call(obj,arguments);
	return obj;
}

var a = newFun();

```


