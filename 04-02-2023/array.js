//ARRAYS
//cerate a array
const random = ['tree', 795, [0, 1, 2]];
const random1 = [1,2,3,4,1];
//find out the length
let lenanarray = random.length;

//accessing
console.log(random[2]);
random[2][2];

//modifing
random[0] = 'tahini';
console.log(random);

//finding index
console.log(random.indexOf('tree')); 

//adding a element
random.push('Bradford', 'Brighton');

//To add an item to the start of the array,
random.unshift('flower');

//shift() - to remove the first item
random1.shift();


//Removing items it removing in end of array
random.pop();

let remove_element = random.pop();//the removed element save in new varaible

//find object key
console.log(Object.keys(random)); 

//ARRAY METHODES 
//1)Concatenating of array
const newrandom = random.concat(random1);

//Concatenating array-like objects with Symbol.isConcatSpreadable
const objfull = [0];
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log(objfull.concat(obj1,obj2));
//Calling concat() on non-array objects
console.log(Array.prototype.concat.call(arrayLike, 3, 4));

//filtering an array
function isBigEnough(value) {
    return value >= 10;
  }
  
  const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

//array flat all sub-array elements concatenated
const arr1 = [0, 1, 2, [3, 4,0]];
console.log(arr1.flat(Infinity));

//for-each  provided function once for each array element
arr1.forEach(element => console.log(element));

//Indexof()
random1.indexOf(0); //-1
random1.indexOf(1,2);//4

//lastIndexof - last index at which a given element 
random1.lastIndexOf(1);//4

//map -  creates a new array populated with the results of calling a provided function on every element in the calling array.
const mapingelement = random1.map(x=>x*2)
console.log(mapingelement);

//reversin an array
console.log(random1.reverse());

//not affect orginal array
const revs = [...random1].reverse();
console.log(revs);

//some() - if given array element is avaible in another array will return true
function isBiggerThan10(element) {
    return element > 10;
}
[2, 5, 8, 133, 4].some(isBiggerThan10);//terue

//remove it from the array using splice()
const removed = random1.splice(2, 0, "drum", "guitar");

//Array.form()
const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
// [ "foo", "bar", "baz" ]

//Array.isArray() - to check given array is a array or not
Array.isArray(random1);//true

//Array.of - it cerate a new array instance
Array.of(4,4);

const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);