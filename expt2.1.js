var http = require ("http")
http.createServer(function(req , res)
{
     res.write("<h1>Hello Purav</h1>")
     res.end()
}).listen(2000, ()=>{
    console.log("Server is running on port 2000")
})