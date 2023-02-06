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
