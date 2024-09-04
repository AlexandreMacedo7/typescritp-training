class Costumer{
    
    //Constructo new
    constructor(private _firstName: string,private _lastName: string){
        
    }
    get firstName(): string{
        return this._firstName;
    }
    set firstName(value: string){
        this._firstName = value;
    }
    get lastName(): string{
        return this._lastName;
    }
    set lastName(value: string){
        this._lastName = value;
    }
}

//let's create an instance

let myCostumer = new Costumer("Alexandre", "Macedo");

console.log(myCostumer.firstName);
console.log(myCostumer.lastName);
