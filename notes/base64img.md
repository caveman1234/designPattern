##把图片转换成base64编码

> 1. 用canvas

```js

var img = new Image();
img.src = './1.jpg';
img.onload = function(){
    var canvas = document.createElement('canvas);
    canvas.getContext('2d').drawImage(img,0,0,100,100);
    var base64 = canvas.toDataUrl('image/jpeg');
}

```

> 2. FileReader <input type="file" accept="image/*" capture="camera"> 手机端存在页面崩溃现象

```js 

var file = e.target.files[0];
var reader = new FileReader();
reader.readAsDataURL(file); // 读出 base64
reader.onloadend = function() {
    var base64 = reader.result;
    img.src = base64;
};

```

> canvas 用于知道路径， FileReader 用于input取到的filelist （lrz 库）