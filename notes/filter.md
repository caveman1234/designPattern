
### filter简单实现
```js
function filter(arr,fn){
  var tempArr = [];
  if(!Array.isArray(arr)) return;
  
  for(var i=0;i<arr.length;i++){
    var shouldExist = fn.call(arr,arr[i],i,arr);
    if(shouldExist){
      tempArr.push(arr[i]);
    }
  }
  return tempArr;
}
var x = filter([1,2,3,4],function(v,i,list){
  return v == 3;
})
console.log(x);
```

> remark

```js
函数里面, Array.isArray({}) || return; 是不行的，必须要在条件下return
```