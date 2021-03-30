const EventEmitter=require('events');
const eventEmmitter= new EventEmitter();

eventEmmitter.on('tutorial',(num1,num2)=>{
    console.log(num1+num2);
});

eventEmmitter.emit('tutorial',1,2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name= name;
    }
    get name(){
        return this._name;
    }
}

let Pedro= new Person('Pedro'); //Object of class Person
let adele=new Person('Adele');
    //Objects of Person can use eventEmmitter functions as Person extends evenEmmitter
Pedro.on('name',()=>{ 
    console.log('My name is: '+Pedro.name);
});

adele.on('name',()=>{
    console.log('My name is: '+adele.name);
});
adele.emit('name'); //The emit statements get executed in the order in which they are wriiten
Pedro.emit('name');