> 简单的generater 

```js
function makdeIt(arr){
        var innerIndex = 0;
        return {
            next(){
                if(innerIndex < arr.length){
                    return {
                        value:arr[innerIndex++],
                        done:false
                    }
                }else{
                    return {
                        value:arr[arr.length-1],
                        done:true
                    }
                }
            }
        }
    }
    var it = makdeIt([1,2,3,4,5]);
    it.next();
    it.next();
    it.next();
```