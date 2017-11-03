## nodejs 小爬虫

```js

var fs = require('fs');
var express = require('express');
var app = express();
var http = require('http');
var cheerio = require('cheerio');
var request = require('request');
var allImgs = [];

var loadPage = url => {
    http.get(url, (res) => {
        
        var strBuffer = [];
        res.on('data', (data) => {
            strBuffer.push(data);
        })
        res.on('end', data => {
            fs.writeFile('./index.html',strBuffer.toString(),(err,ress)=>{});
            console.log(strBuffer.toString())
            var $ = cheerio.load(strBuffer.toString('utf8'));
            var imgs = $('img')
            var a = $('a')
            
            allImgs = [].slice.call(imgs).map((item,i)=>{
                loadImg(item.attribs.src,i)
            })
            console.log(allImgs)
            //a标签
            // var a = $('a')
            // [].slice.call(imgs).forEach(x=>{
            //     loadPage(x)
            // })
    
        });
    })
}

var loadImg = (img_src,name) => {
    
    if(img_src.indexOf('static') !== -1 && img_src.indexOf('http') == -1  ){
        img_src =  "http://www.imooc.com" + img_src;
    }else if(img_src.indexOf('http://img')==-1 && img_src.indexOf('//img')!=-1){
        img_src = 'http:' + img_src;
    }
    request.head(img_src, function (err, res, body) {
        if (err) {
            console.log(err);
        } else {
            request(img_src).pipe(fs.createWriteStream(`./imgs/${name}.jpg`))
        }
    });
}
var url = "http://www.imooc.com/course/list"
loadPage(url);


```