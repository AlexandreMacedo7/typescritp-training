var Costumer = /** @class */ (function () {
    function Costumer(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Costumer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this.firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Costumer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this.lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Costumer;
}());
//let's create an instance
var myCostumer = new Costumer("Alexandre", "Macedo");
console.log(myCostumer.firstName);
console.log(myCostumer.lastName);
myCostumer.firstName = "Alex";
myCostumer.lastName = "Mac";
console.log(myCostumer.firstName);
console.log(myCostumer.lastName);
