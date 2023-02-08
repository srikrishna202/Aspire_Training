//cerate an class
class student{
    name;
    constructor(name) {      //to declare an constructor
        this.name = name;
    }
    getdata(name){
        alert("haii " + this.name);

    }
}
const person = new student('sri');
person.getdata();

/* The constructor method is a special method of a class for creating and initializing an object instance of that class. */

//inheritance
/*it inherit the class used to share porperties and methods form parent class by using extends keyword */
//super = reference to the parent class

class Car{
    name;
    releaseyear;
    constructor(name,releaseyear)
    {
        this.name = name;
        this.releaseyear = releaseyear;
    }

}
class Withgear extends Car{

    constructor(name,releaseyear,gearcount){
     super(name,releaseyear);
     this.gearcount = gearcount;       
    }

}
class Withoutgear extends Car{
    constructor(name,releaseyear,type)
    {
        super(name,releaseyear);
        this.type = type;
    }
}

let withgear = new Withgear();
withgear("alto",2001,4);
let withoutgear = new Withoutgear("tesla",2020,"ev");
console.log(withgear.name);
console.log(withgear.releaseyear);
console.log(withgear.gearcount);

//this keyword = a reference to the object that we currently working it

//encapulation - to raping up data and function into one single unit is called class

class ceratecar{
    constructor(){
        let carname,noofgear;
    }
    setname(carname)
    {
        this.carname = carname;
        console.log("given name is set " + this.carname);
    }
    setgear(noofgear)
    {
        this.noofgear = noofgear;
        console.log("given gear is set " + this.noofgear);
    }
}
const car1 = new ceratecar();
car1.setname("alto");
car1.setgear(4);
