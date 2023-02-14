//if have a variable that can convert object easy to ES6
let first = "1",second = "2";
objectvalues = {first,second};

//if have two values that can combain to make a one object name
objectvalues["bar"+"value"] = 10;

//if want to create a one function inside object it can easy
objvalue2={
    first (){
        console.log("first method in object");
        return [10,20];
    }
}

//array
//if have array to convert to normal varible to make easy
var arrayval= [1,2,3];
var [a,b,c] = arrayval;

//if call same method and store it diffiernt variable use this method
var {one,two} = objvalue2.first();
console.log('one---',one);
//when have single object to split to object left side could be object
var {a,b} = objectvalues;

//when have function we pass any type argument that could be a array,object or etc..
function get([data]){
    console.log(data)
}
get(["1"]);

//when have varaible already have value now you assesing a array it can replase
// var a=1 = [1];

//modules
//if have any method or somethings to use other file that time to use export option
// export function valuesfun(){
//     console.log("hai");
// }

//if import something form other file.
//if import other file mention the file name
// import valuesfun from "objectproperties"

