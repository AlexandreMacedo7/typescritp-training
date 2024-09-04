class Costumer{
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast:string){
        this.firstName = theFirst;
        this.lastName = theLast;
    
    }
}

//let's create an instance

let myCostumer = new Costumer("Alexandre", "Macedo");

console.log(myCostumer.firstName);
console.log(myCostumer.lastName);

