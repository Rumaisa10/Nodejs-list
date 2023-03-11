const http= require('http');

const server = http.createServer((req,res)=>{
    res.write('hello rumaisa go ahead, one day youll get everything you deserve');
    res.end();
}) ;

server.listen(5000);
console.log('listening to port 3000') 