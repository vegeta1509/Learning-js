var event=require('events');
var util=require('util');
var fs=require('fs');
/*var emitter=new event.EventEmitter();

emitter.on('someevent',function(msg){
    console.log(msg);
});

emitter.emit('someevent','Hello Vegeta');*/

/*var person = function(name){
    this.name = name;
};
util.inherits(person,event.EventEmitter);

var vegeta=new person('vegeta');

var people=[vegeta];

people.forEach(function(person){
    person.on('e',function(msg){
        console.log(msg);
    });
});
vegeta.emit('e','Hi');*/
var readme=fs.readFileSync('readme.txt','utf8');
fs.writeFileSync('writeme.txt',readme);
console.log(readme);