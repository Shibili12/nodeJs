// named function
function sayHello(){
    console.log("hey all are welocome")
}

//module.exports=sayHello;

//anonymous function
const hello=function (){
    console.log("hey all are welocome........anonymous")
}

//module.exports=hello;

//javascript object

const helloobject={
    name:"shibili",
    place:"malappuram",
    greet:function(){
        console.log(`I am  ${this.name} from ${this.place}`);
    }
}

module.exports=helloobject;

