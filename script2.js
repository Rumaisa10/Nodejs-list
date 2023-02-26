const EvenEmitter = require('events');

const emitter = new EvenEmitter();

const School= require('./school')
const school = new School()

emitter.on('bellring',({period,text})=>{
    console.log(`boss rumaisa will run bcz ${period} ${text}`);
})

school.startPeriod();