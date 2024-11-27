var http=require('http')

http.createServer(function(req,res){
    res.write('hello server from HTTP')
    res.end()
}).listen(8080)