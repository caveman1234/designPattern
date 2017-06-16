 ### 一些写法
 
 > js另类写法
 
 ```js
 (context ? context.defQueue : globalDefQueue).push([name, deps, callback])
 ```
 >  事件的订阅发布
 
 ```js
 
 	on: function (name, cb) {
                var cbs = this.events[name];
                if (!cbs) {
                    cbs = this.events[name] = [];
                }
                cbs.push(cb);
            },
    emit: function (name, evt) {
        each(this.events[name], function (cb) {
            cb(evt);
        });
        if (name === 'error') {
            //Now that the error handler was triggered, remove
            //the listeners, since this broken Module instance
            //can stay around for a while in the registry.
            delete this.events[name];
        }
    }
```

> for in

```js
function Func(options){
	var options = options ? options : {};
	var name = options.name;
	this.age = options.age;
	this.sayName = function(){
		console.log(name);
	}
}
Func.prototype.sayAge = function(){
	console.log(this.age)
}
var FuncObj = new Func({name:'jack',age:22});

for(var i in FuncObj){
	FuncObj.hasOwnProperty(i)&&console.log(i);
}
```

          