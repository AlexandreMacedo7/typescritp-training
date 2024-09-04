"use strict";
class Costumer {
    //Constructo new
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
//let's create an instance
let myCostumer = new Costumer("Alexandre", "Macedo");
console.log(myCostumer.firstName);
console.log(myCostumer.lastName);
