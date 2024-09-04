var Costumer = /** @class */ (function () {
    function Costumer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Costumer;
}());
//let's create an instance
var myCostumer = new Costumer("Alexandre", "Macedo");
console.log(myCostumer.firstName);
console.log(myCostumer.lastName);
