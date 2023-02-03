const para = document.querySelector("p");

para.addEventListener('click', updateName);
function updateName() {
    const name = prompt('Enter a new name');
    para.textContent = `Player 1: ${name}`;
}
var count = 1;
function counter(){
    //const para = document.createElement('p');
    window.alert(count);
    //para.textContent=count;
    //document.body.appendChild(para);
    count += 1;
}

const buttons = document.querySelectorAll('button');
for (const button of buttons){
    button.addEventListener('click',counter);

}
const counet = "haii";
const string = "The revolution will not be televised.";
console.log(string);

//Concatenating strings
const firstname = "sri";
const lastname = "krishna";
const fullname = firstname + lastname;
console.log('${fullname}');

//number
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);//

//tostring
const myString2 = myNum.toString();
console.log(typeof myString2); //string

//operators
const num1 = 10;
const num2 = 30;
let add = num1+num2;
let sub = num1-num2;