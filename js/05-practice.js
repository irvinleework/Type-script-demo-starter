var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var fullName = function (firstName, lastName, middle) {
    return firstName + " " + middle + " " + lastName;
};
console.log(fullName("Irvin", "Lee"));
var login = function (userName, password) {
    if (userName === 'elevenfiftyuser' && password === "Letmein1234!") {
        return true;
    }
    else {
        return false;
    }
};
console.log(login("elevenfiftyuser", "Letmein1234!"));
var Hero = /** @class */ (function () {
    function Hero(name, talent) {
        this.name = name;
        this.talent = talent;
    }
    return Hero;
}());
var cptU = new Hero('Captain Underpants', 'Wedgie Power');
var Villain = /** @class */ (function () {
    //bio: IBio
    function Villain(name, plot) {
        this.name = name,
            this.plot = plot;
    }
    Villain.prototype.scheme = function () {
        return "I'm " + this.name + " and I'm gonna " + this.plot;
    };
    return Villain;
}());
var gollum = {
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
};
var gollum1 = new Villain("Gollum", "Get my preciouss");
// let gollum = new Villain('Gollum', 'my preeeeeecious');
// console.log(gollum.scheme())
var Vigilante = /** @class */ (function () {
    function Vigilante(name, talent, plot) {
        this.name = name;
        this.talent = talent;
        this.plot = plot;
    }
    Vigilante.prototype.scheme = function () {
        return "I'm " + this.name + " and I'll use my " + this.talent + " in plot to " + this.plot;
    };
    return Vigilante;
}());
var robinHood = new Vigilante('Robin Hood', 'giving to the poor', 'rob the rich');
console.log(robinHood.scheme());
var SuperHero = /** @class */ (function (_super) {
    __extends(SuperHero, _super);
    function SuperHero(name, talent, alias, power) {
        var _this = _super.call(this, name, talent) || this;
        _this.alias = alias;
        _this.power = power;
        return _this;
    }
    return SuperHero;
}(Hero));
var superMan = new SuperHero("Superman", "Hide by putting on glasses", "Clark Kent", "all of them");
var SuperVillain = /** @class */ (function (_super) {
    __extends(SuperVillain, _super);
    function SuperVillain(name, plot, alias, power) {
        var _this = _super.call(this, name, plot) || this;
        _this.alias = alias;
        _this.power = power;
        return _this;
    }
    SuperVillain.prototype.scheme = function () {
        return "I, " + this.alias + ", am actually " + this.name + " and I will " + this.plot + " using my " + this.power;
    };
    return SuperVillain;
}(Villain));
var joker = new SuperVillain("Joker", "Kill Batman", "Jack Napier", "craziness");
console.log(joker.scheme());
//# sourceMappingURL=05-practice.js.map