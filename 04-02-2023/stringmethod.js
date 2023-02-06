//string creation
const exstring = "haii"; //string primitive
const exstring1 = new String("hello") //to cerate an string object


//to access an individual character in a string
//-->using method
console.log(exstring.charAt(1));//a
//-->using array type
console.log(exstring[2]);//i

//comparing a string
//all comparison operators, including === and ==, compare strings case-sensitively. 
const ex = "a";
const ex1 = "b";
if (ex < ex1);//true
if (ex > ex1);//false



//string methods
//Converted to uppercase
console.log(ex.toUpperCase());//HAII

//converted to lower case. 
console.log(ex.toLowerCase());//haii

//convert to lower case, according to any locale-specific case mappings. 
const dotted = 'Köpek '; //Köpek = Dog

console.log(dotted.toLocaleLowerCase('tu'));//köpek
console.log(dotted.toLocaleLowerCase('tu'));//KÖPEK

//compering a string usin intl.collator

//--> new Intl.Collator(locales, options) //syntax
/*
locales
   |--> A string with a BCP 47 language tag, or an array of such strings.
options 
    |-->usage 
        sort, search
    |-->sensitive
        base - Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.
        accent - Only strings that differ in base letters or accents and other diacritic marks compare as unequal. Examples: a ≠ b, a ≠ á, a = A. 
        case - Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A. 
        variant - Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal. Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A,b=á.
    |-->ignorePunctuation
*/
console.log(['Z', 'a', 'z', 'ä'].sort(new Intl.Collator('de', { caseFirst: 'upper' },{ignorepanctuation: true} ).compare));

//find length
const lenstring = ex.length;//4

//To retrieve the last character 
constlastchar = ex[lenstring-1];//i

//if a substring is present or not
const browserType = 'mozilla';

if (browserType.includes('zilla')) {
  console.log('Found zilla!');
} else {
  console.log('No zilla here!');
}//found zilla

//if a string starts or ends with a particular substring
if(browserType.startsWith('m'))
{
    console.log("yes");
}
else{
    console.log("no");
}//yes
if(browserType.endsWith("m"))
{
    console.log("yes it is end chareter");
}
else{
    console.log("no it is end chareter")
}//no


//Finding the position of a substring in a string
const tagline = 'MDN - Resources for developers, by developers';
const first=tagline.indexOf('developers') + 1;
console.log(first);

//note
//parseInt() doesn't recognize the decimal point, and parseFloat() doesn't recognize the 0x prefix.

//Extracting a substring from a string
console.log(ex.slice(1,3));//aii
console.log(ex.slice(-4))//haii

/*
-->update a string
replace(pattern, replacement) -- syntax
it return a new string so its not update in old variable
when the update same variable use let datatype not in const.
replace() --> only changes the first occurrence 
replace() --> it change all commits


*/
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));

//Strings as objects
const newstring = new String(srikrishan)//String with new returns a string wrapper object.

//eval()
/*
Primitives passed to eval are treated as source code
String objects are treated as all other objects are, by returning the object.
*/
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2));

//iterator
const str = "thevalue";
let i=0;
const strIter = str[Symbol.iterator]();
let thechar = strIter.next();
while(i<str.length)
{

    console.log(thechar.value);
    thechar = strIter.next();
    i++;
}

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
//CONDITION STATEMENT
//if-else statement
function setWeather() {
  const choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
}

//Switch Statement
const choice = select.value;
switch(choice)
{
    case 'sunny':
        console.log("to play");
        break;
    case 'rainy':
        console.log("don't play");
        break;
}

//ternary operator
const result = (choice === "sunny" || choice === 'overcast')
? console.log("to play outside") : console.log("do not play outside");

//looping  
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const cat of cats) {
  console.log(cat);
}

//MAP and FILTER are return a array
function toUpper(string) {
    return string.toUpperCase();
  }
  
  const upperCats = cats.map(toUpper);
  
  console.log(upperCats);

  function lCat(cat) {
    return cat.startsWith('L');
  }  
  const filtered = cats.filter(lCat);
  console.log(filtered);

//while 
while (i < cats.length) {
    if (i === cats.length - 1) {
      myFavoriteCats += `and ${cats[i]}.`;
    } else {
      myFavoriteCats += `${cats[i]}, `;
    }
}
//do-while
do {
    if (i === cats.length - 1) {
      myFavoriteCats += `and ${cats[i]}.`;
    } else {
      myFavoriteCats += `${cats[i]}, `;
    }
  
    i++;
  } while (i < cats.length);
//-->number() -->https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
//-->localecompare() --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
