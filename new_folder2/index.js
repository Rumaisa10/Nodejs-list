// const fs = require('fs');
// const { chunk } = require('lodash');

// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);

// ourReadStream.on('data',(chunk)=>{
// console.log(chunk);
// })
const http= require('http');

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
    res.write('hello rumaisa go ahead, one day youll get everything you deserve');
    res.end();
    }
    else if(req.url==='/about'){
        res.write('hello riaz go ahead, one day youll get everything you deserve');
    res.end();
    }
}) ;

server.listen(5000);
console.log('listening to port 3000') 