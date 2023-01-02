class Medusa {
    constructor(medusaName) {
        this.statues = [];
        this.medusaName = medusaName; 
       
    }
    gazeAtVictim() {
        this.statues.push(person.name);
    }
}






var Person = require('./person');
var Statue = require('./statue');
module.exports = Medusa;