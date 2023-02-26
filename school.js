const EvenEmitter = require('events');


class School extends EvenEmitter{
     startPeriod(){
        console.log('class started');
     
     setTimeout(()=>{
        this.emit('bellring',{
            period: 'first',
            text: "peiod ended"
        });
    },1000)
     }
}
module.exports = School;