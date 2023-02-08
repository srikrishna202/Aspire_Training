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