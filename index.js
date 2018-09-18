function Human(options) {
    this.name = options.name;
    this.health = options.health;
    this.maxHealth = options.health * 2;
    this.chanceToCrit = options.chanceToCrit;
    this.chanceToMiss = options.chanceToMiss;
    this.baseToManage = options.baseToManage;
    this.message = ' ';
}
function Person(options) {
    Human.call(this, options);
    Person.prototype = Object.create(Human.prototype);
}

Person.prototype.fight = function (enemy) {
    console.log("Oh those are fighting words")
    if (this.health > 0 && enemy.health > 0) {
        console.log(this.hit(enemy))
        //append here
        enemy.fight(this)
    }
}

Person.prototype.hit = function (enemy) {
    console.log("I'm hitting you", this)
    if (this.health > 0 && enemy.health > 0) {
        if (this.chanceToMiss > Math.random()) {
            this.message += `${this.name} missed ${enemy.name} ha ha ha\n`
            this.spit(enemy)
        } else {
            let dmg = Math.random() > 0.9 ? 20 : 10
            enemy.health -= dmg
            this.message = `${enemy.name} has been hit! Her health is at ${enemy.health}\n`
            this.hit(enemy)
        }
    }
    return this.message += "Ouch\n"
}



Person.prototype.spit = function (enemy) {
    console.log("Take that", this)
    if (this.health > 0 && enemy.health > 0) {
        this.message += `${this.name} spit in ${enemy.name}'s face! Frickin' brutal.\n`
   
    }
    return this.message += "Oh Gross";
}

const hero = new Person({
    name: "SexyHotMama",
    health: 100,
    chanceToMiss: 0.3,
    chanceToCrit: 0.9,
    baseToDamage: 0,
})


const monster = new Person({
    name: "BadMom",
    health: 50,
    chanceToMiss:  0.3,
    chanceToCrit: 0.9,
    baseToDamage: 0,
})


hero.fight(monster)










