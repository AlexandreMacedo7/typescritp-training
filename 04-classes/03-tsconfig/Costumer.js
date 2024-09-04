"use strict";
class Costumer {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
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
myCostumer.firstName = "Alex";
myCostumer.lastName = "Mac";
console.log(myCostumer.firstName);
console.log(myCostumer.lastName);
