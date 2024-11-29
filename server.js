const http=require('http')
const url=require('url')

const server=http.createServer(
    (req,res)=>{
        const rUrl=url.parse(req.url,true).pathname;
        if(rUrl=="/"){
            res.write("Home page")
            res.end()
        }else if(rUrl=="/about"){
            res.write("about page")
            res.end()
        }
        else if(rUrl=="/contact"){
            res.write("contact page")
            res.end()
        }
       
    }
)
server.listen(8080);