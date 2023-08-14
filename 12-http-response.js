const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to our home page')
    }
    if(req.url==='/about'){
        res.end('here is our short story')
    }
    res.end(
        `<h1>Oops!</h1>
        <p>we cannot seem to find the page you arte looking for </p>
        <a href="/"> Back home</a>`
    )
    
    
})

server.listen(5000)
