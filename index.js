const { json } = require("express");
const met = require("./app.js");
const http = require('http');
const { errorMonitor } = require("events");
const pull_val= {
    owner: "mukhter2",
    repo:"pull-tester",
    head: "branch1",
    base: "main",
    title: "testing pull request-3"
}

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
        
    }else if(url === '/pull-request'){
        const puller = met.createPull(pull_val).then((dat)=>{
            return dat.status;

        });
        const finres= async () => {          
            try{
                const a= await puller;
            const b= JSON.stringify(a);
                if(b==="201"){
                    res.write("status code: "+b+" successfully created");
                }else{
                    res.write("status code: "+b+"- please check internet");
    
                }
                console.log(b);
            
            }catch(error){
                res.write("error occured with status: "+error.status);          
              }
            
              res.end();
        }
        finres();
    }
    else{
        res.write("hello");
        res.end();
    }
}).listen(3000,function(){
    console.log("server starts at port 3000");
});
//met.getUser().then((data)=>console.log(data));