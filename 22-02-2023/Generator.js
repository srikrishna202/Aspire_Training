//To generator use to given value one by one
const result = 10;
function* PreviousNumberGiven(num)
{
    yield num-1;
}
result = PreviousNumberGiven(result)
console.log(result);
result = PreviousNumberGiven(result);

// New Built-In Methods
//1)Object Property Assignment
var objectValue = {first:1}
var objectValue1 = {second:2}
const totalObject = Object.assign(objectValue,objectValue1);

//2)Array find()
const arrayData = [1,2,3,4];
console.log(arrayData.find(data => data === 1));

//3)String repeat method
console.log("hai ".repeat(3));

//4)to check given integer is safe or not based on range(-2th52 to 2th52)
console.log(Number.isSafeInteger(9007199254740992) === false);

//5)to cut decimal value 
console.log(Math.trunc(42.7)) 

//6)Determine the sign of a number
console.log(Math.sign(-0)) 
console.log(Math.sign(-7))
                                                                                                                                                                                   

