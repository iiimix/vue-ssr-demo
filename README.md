# Vue SSR初探

## demo1
renderToString内嵌型渲染
```javascript
const app = new Vue({
    data: {
        url: req.url
    },
    template: `<div>访问的URL是：{{url}}</div>`
})

renderer.renderToString(app, (err, html) => {
    res.end(`
        <!DOCTYPE html>
        <html lang="zh">
            <head>
                <meta charset="UTF-8">
                <title>Hello Vue SSR</title>
            </head>
            <body>
                ${html}
            </body>
        </html>
    `)
})
```


## demo2
renderToString读取模板渲染
```javascript
const renderer = createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8')
})

renderer.renderToString(app, (err, html) => {
  console.log(html) // html 将是注入应用程序内容的完整页面
})
```