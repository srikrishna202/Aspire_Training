import {add} from './export.js';

//object
//To use short hand syntax 
let firstVar = 10;
let secondVar  = 20;
const ObjectValue = {firstVar,secondVar}
//in Es5 
//obj = { x: x, y: y };

//to declare object key form verious name it is declare inside object creation
let obj = {
    foo: "bar",
    [ "baz" + "23" ]: 42
}
console.log(obj)
/*
baz23:42
foo:"bar" 
*/
export function sum(age,year){
    return age+year;
}
//to declare Generator function in object
const objectValue1 = {
    *generator(i) {
        yield i;
        yield i + 10;
    },
    secondObject : 10,
};
const genValue = objectValue1.generator(10);
console.log(genValue.next().value);

//Array 
//to assgin value can directly in Array to array or variable
let arrayValues = [1,2,3,4,5]
var [a,b] = arrayValues;
console.log(a,b);//1,2

//to assign a method to many variable 
var {first,second} = objectValue1.generator();

//And also assign value to nested object
var {objectValue1:secondObject} = 20;

//to pass paremerter in individual paramerter during function call



console.log('import-add-function--',add(10,40));

//classes
//In es5 don't have class system
class Car{
    getName(name) {
        this.carName = name
    }
}
