//SET
//To cerate a New Set in Using Es6
const setData = new Set();
//To using add method to add a value
setData.add("haii");
if(setData.size <= 5)
{
    console.log("the value are less than 5");
}
//In es5 there is work based on basics algorithms
//eg:-
/*
    var s = {};
    s["hello"] = true;
*/

//MAP
//To cerate a New Map 
const mapData = new Map()
//to Add a data into a map
mapData.set("firstNum",20);

//Iterators
//In ES6 to introduce a iterator method
//this iterator works on array,set,map...
//using without 
let arrayData = [1,2,3];
function cerateIterable(array){
    let count = 0;
    return {
        next() {
            if(count < array.length)
            {
                return {value: array[count++],done:false};
            }
            else{
                return {value: undefined,done:true};
            }
        }
    }
}
const result = cerateIterable(arrayData);
console.log(result.next());
console.log(result.next());

//With using Inbiult function
//to iteration values on Symbol iterator
const numberIteration = arrayData[Symbol.iterator]();
console.log(numberIteration);
console.log(numberIteration.next());


