const fullName = (firstName: string, lastName: string, middle?: string): string => {
    return `${firstName} ${middle} ${lastName}`
}

console.log(fullName("Irvin", "Lee"))

const login = (userName: string, password: string): boolean => {
    if (userName === 'elevenfiftyuser' && password === "Letmein1234!"){
        return true
    } else {
        return false
    }
}

console.log(login("elevenfiftyuser", "Letmein1234!"))

interface IPerson {
    name: string;
    //bio: IBio;

}

type IBio = {
    age: number,
    height: number,
    backstory: string,
    address: IAddress[]
}

type IAddress = {
    street1: string,
    street2: string | null,
    state: string,
    city: string,
    zipcode: number

}

interface IVillain extends IPerson {
    name: string,
    //bio: IBio,
    plot: string,
    scheme(): string
}

interface IHero extends IPerson {
    talent: string;
}

interface ISuperPerson extends IPerson {
    power: string;
    alias: string;
}

class Hero implements IHero {
    name: string;
    talent: string;

    constructor(name: string, talent: string){
        this.name = name;
        this.talent = talent;
    }
}

let cptU = new Hero('Captain Underpants', 'Wedgie Power')

class Villain implements IVillain {
    name: string;
    plot: string;
    //bio: IBio

    constructor(name: string, plot: string){
        this.name = name,
        this.plot = plot;
    }
    scheme(): string {
        return `I'm ${this.name} and I'm gonna ${this.plot}`
    }
}

let gollum = {
    name: 'Gollum',
    plot: 'get my preciouss',
    bio: {
        age: 1000,
        height: 3,
        backstory: "ring addiction",
        addresses: [{
            street1: "Cave Street",
            street2: "3",
            state: "Somewhere over the rainbow",
            city: "underground",
            zipcode: 1234
        }]
    }

}

let gollum1 = new Villain("Gollum", "Get my preciouss")
// let gollum = new Villain('Gollum', 'my preeeeeecious');
// console.log(gollum.scheme())

class Vigilante implements IHero, IVillain {
    name: string;
    talent: string;
    plot: string;

    constructor(name: string, talent: string, plot: string){
        this.name = name;
        this.talent = talent;
        this.plot = plot;
    }

    scheme(): string {
        return `I'm ${this.name} and I'll use my ${this.talent} in plot to ${this.plot}`;
    }
}

let robinHood = new Vigilante('Robin Hood', 'giving to the poor', 'rob the rich')
console.log(robinHood.scheme())

class SuperHero extends Hero implements ISuperPerson{
    alias: string;
    power: string;

    constructor(name: string, talent: string, alias: string, power: string){
        super(name, talent);

        this.alias = alias;
        this.power = power;
    }
}

let superMan = new SuperHero("Superman", "Hide by putting on glasses", "Clark Kent", "all of them")

class SuperVillain extends Villain implements ISuperPerson{
    alias: string;
    power: string;

    constructor(name: string, plot: string, alias: string, power: string){
        super(name, plot);

        this.alias = alias;
        this.power = power;
    }
    scheme(): string {
        return `I, ${this.alias}, am actually ${this.name} and I will ${this.plot} using my ${this.power}`;
    }
}

let joker = new SuperVillain("Joker", "Kill Batman", "Jack Napier", "craziness")
console.log(joker.scheme())