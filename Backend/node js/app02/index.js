const http =require ("http");
const server=http.createServer((req,res)=>{
    if(req.url=="/home"){
        res.end("Home page")
    }
    else if(req.url=="/about"){
        res.end("About page")
    }
    else if(req.url=="/news"){
       let obj={
         status:200,
         message:"news page",
         data:[{
           id:1,
           title:"news1",
           description:"description1"
         },
         {
           id:2,
           title:"news2",
           description:"description2"
         },
         {
           id:3,
           title:"news3",
           description:"description3"
         }
        ]
       }
       res.end(JSON.stringify(obj));
    }
    
    res.end("hello world");
})

server.listen(3000,()=>{console.log("server started at 3000")})