//1.console
console.log('node js');
console.log(__filename);
console.log(__dirname);

// 2.require

//3.setInterval
const si=setInterval(
    function(){
        console.log("node js")
    },
    1000,
)

// 4.setTimeout
setTimeout(
    function(){
        console.log("set time out function after 5s")
    },5000
)

//5.clear interval
const st=setTimeout(()=>
    clearInterval(si),4000)

//6.clearTimeout
clearTimeout(st);

