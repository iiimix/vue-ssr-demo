# Vue SSR初试

> 推荐使用Node.js版本6+

## 安装vue,vue-server-renderer
```shell
npm install vue vue-server-renderer --save
```

## 1. 创建一个Vue实例
```javascript
const Vue = require('vue')
const app = new Vue({
    template: `<div>Hello Vue Server Renderer</div>`
})
```

## 2. 创建一个renderer
```javascript
const renderer = require('vue-server-renderer').createRenderer()
```

## 3. 将Vue实例渲染为HTML
```javascript
renderer.renderToString(app, (err, html) => {
    if(err) throw err
    console.log(html)
})
```

## 4. 在vue-renderer2.5.0+，如果没有传入回调函数，则会返回Promise
```javascript
renderer.renderToString(app).then(html => {
    console.log(html)
}).catch(err => {
    console.error(err)
})
```


## 5. 接入服务器express
```shell
npm install express -S
```

## 6. 启动express服务
```shell
node server.js
```