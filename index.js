const { json } = require("express");
const met = require("./app.js");
const http = require('http');

http.createServer(function (req,res){
    const url = req.url;

    if(url==='/userData'){
        
        
        const val = met.getUser().then((fin)=> { return fin;});
        const finres= async () => {
            const a= await val;
            const b= JSON.stringify(a);
            res.write(b);
            console.log(b);
            res.end();
        }
        finres();
        
    }else{
        res.write("hello world");
        res.end();
    }
}).listen(3000,function(){
    console.log("server starts at port 3000");
});
//met.getUser().then((data)=>console.log(data));