//synchronous
//it run step by step
function makeGreeting(name) {
    return `Hello, my name is ${name}!`;
  }
  
const myname = 'Miriam';
const greeting = makeGreeting(myname);
console.log(greeting);
// "Hello, my name is Miriam!"

//asynchronous 
//code that runs in paralled with other code
setTimeout(hello,3000);
function hello(){
    alert("haii");
}

//call back
