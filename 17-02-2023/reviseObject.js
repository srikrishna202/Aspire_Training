//https://github.com/james-priest/javascript-objects/tree/master/src

/**
 * JavaScript object literal pattern
 * Object literals create a pattern from nothing
 * They contain precisely what's assigned to them and nothing more.
 * No prototype object is associated with the created object.
 */

var car1 = {
    year: 2000,
    make: 'Ford',
    model: 'Fusion',
    repairs: ['repair1', 'repair2', 'repair3'],    
    getInfo: function() {
        return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
    }
};
var car2 = {
    year: 2010,
    make: 'BMW',
    model: 'Z4',
    getInfo: function() {
        return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
    }
};
console.log(car2.getInfo());

console.log(car1[year]);
