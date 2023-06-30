
const express = require('express')
const axios = require('axios');

const app = express()
const port = 3000

// 拦截静态文件直接回源
app.get('/_next/static/*', async (req, res) => {
    const redirectUrl = 'http://localhost:3033' + req.url;
    res.redirect(301, redirectUrl);
})

// 拦截 index.html
app.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3033');
        res.send(response.data)
    } catch (error) {
        console.error('请求出错:', error);
        res.status(500).send('请求出错');
    }
})

app.get('/about', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3033/about');
        res.send(response.data)
    } catch (error) {
        console.error('请求出错:', error);
        res.status(500).send('请求出错');
    }
})

app.listen(port, () => {
    console.log(`服务启动 listening on port ${port}`)
})