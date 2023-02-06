//function creation
function random(number) {
    return Math.floor(Math.random()*number);
}
random(10);//invoking a function

//function that doesn't have a name - Anonymous function 
(function () {
    alert('hello');
})

//arrow function
textBox.addEventListener('keydown', (event) => {
    console.log(`You pressed "${event.key}".`);
});

const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');
const lengthofarray = names.length(); 
const choosename = document.createElement('button');
choose.textContent = "click to give a name";
panel.appendChild(choose);
const result = choose.addEventListener('click',choosename(lengthofarray));
console.log(names[result]);
// Add your code here
function choosename(num) {
    return Math.floor(Math.random()*num);
}


let age =10;
function print(){
    age = 20;
}
console.log(age);



