//cerate an object

const empsets={
    fullname:{
        first: "sri",
        last: "krishna",
    },
    age: 15,
    display(){
        console.log("first name:" + this.fullname.first);
    }
};
empsets.display();//acessing an object

//constructor
function empdatas(givename,givenage){
    const employeeditails = {};
    employeeditails.name = givename;
    employeeditails.age = givenage;
}
//to cerate a constructor object to get a values.

const person1 = empdatas("srikrishna",20);//cerate a new object

console.log(person1.age);//access data.

//notification API

const btu = document.getElementById("button1");
btu.addEventListener('click',notfiy);
function notfiy(){
    let permission = Notification.requestPermission();
    console.log(permission);
    if(permission === 'granted')
    {
        console.log("ok notification is allowed");
        new Notification("notification is on");
    }
    else if(permission === 'denied')
    {
        alert("notification no allowed");
    }
}

