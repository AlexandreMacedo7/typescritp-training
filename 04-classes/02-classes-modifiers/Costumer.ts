class Costumer{
    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast:string){
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName(): string{
        return this._firstName;
    }
    set firstName(value: string){
        this.firstName = value;
    }
    get lastName(): string{
        return this._lastName;
    }
    set lastName(value: string){
        this.lastName = value;
    }
}

//let's create an instance

let myCostumer = new Costumer("Alexandre", "Macedo");

console.log(myCostumer.firstName);
console.log(myCostumer.lastName);

myCostumer.firstName = "Alex";
myCostumer.lastName = "Mac"

console.log(myCostumer.firstName);
console.log(myCostumer.lastName);
