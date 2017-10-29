## 箭头函数 this 

```js 

var name = 'global'

var obj = {
	name:1,
	func(){
		var name = 2;
		var fn = ()=>{
			alert(this.name)
		}
		fn()
	}
}
obj.func();//1,
//fn 没有this所以往外层找this，找到谁调用的func，是this指向obj
//若不是箭头函数，this指向window

```