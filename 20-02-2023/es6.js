//constants
//immutable variables it can not re-assgin value
const value = 2;

//value = 3 ->error


let a=1;//it asscess only in scope.

//var cannot use in function 

//arrow function
//nums  = evens.map((v, i) => v + i)
nums = ["hai",1,4,6];
nums.forEach(v => {
    if (v % 5 === 0)
        console.log(v);
 })
//in es5 can't use statement 

function value(){
    number = [1,2,3,4];
    this.number.forEach((v) => {
        if (v % 5 === 0)
            console.log(v);
    })
}

//parametes 
function values(first,second=4)//in es5 this parmeter assginment not work
{
    return first+second;
}

function f (x, y, ...a) {
    return (x + y) * a.length
}
f(1, 2, "hello", true, 7) === 9
//to pass a perameter as a array that not work in es5

var str = "foo"
var chars = [ ...str ] 
//when normal varible can change and spit into array by using this method

//string 
// in es6 to use mutiple varible in single 
