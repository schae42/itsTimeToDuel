class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
        this.text = `${this.power} Power\n${this.resilience} Resilience`
    }

    attack(target){
        if(target instanceof Unit){
            target.resilience -= this.power;
            console.log(`${this.name} attacks ${target.name}, dealing ${this.power} damage`);    
        } else {
            console.log(`${this.name} can only attack another Unit card.`);
        }
    }
}

class Effect extends Card {
    constructor(name, cost, stat, magnitude){
        super(name, cost);
        this.magnitude = magnitude;
        let mod = "";
        if(magnitude > 0){
            mod = "Raise";
        } else {
            mod = "Lower";
        }
        this.text = `${mod} the target's ${this.stat} by ${Math.abs(this.magnitude)}`
    }

    play(target){
        if(target instanceof Unit) {
            if(this.stat == "resilience"){
                target.resilience += this.magnitude;
                console.log(this.text)
            } else if(this.stat == "power") {
                target.power += this.magnitude;
                console.log(this.text)
            } else {
                console.log("That's not an option.");
        } else {
            console.log(`${this.name} can only be played on a Unit card.`);
        }
    }
}

const HardAlgo = new Effect("Hard Algorithm", 2, "resilience", 3);
const Unhandled = new Effect("Unhandled Promise Rejection", 1, "resilience", 2);
const Pair = new Effect("Pair Programming", 3, "power", 2);

//Turn 1 
const RedBelt = new Unit("Red Belt Ninja", 3, 3, 4);
HardAlgo.play(Redbelt);

//Turn 2 
const BlackBelt = new Unit("Black Belt Ninja", 4, 5, 4);
Unhandled.play(RedBelt);

//Turn 3 
Pair.play(RedBelt);
RedBelt.attack(BlackBelt);

console.log(RedBelt);
console.log(BlackBelt);