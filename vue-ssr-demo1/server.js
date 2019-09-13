

const Vue = require('vue')
const express = require('express')
const renderer = require('vue-server-renderer').createRenderer()

const server = express()

server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div>访问的URL是：{{url}}</div>`
    })

    renderer.renderToString(app, (err, html) => {
        if(err) {
            res.status(500).end('服务器错误')
            return
        }
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
})

server.listen(8000)
