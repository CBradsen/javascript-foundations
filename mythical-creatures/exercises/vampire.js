class Vampire {
    constructor(name, pet) {
        this.ouncesDrank = 0;
        this.name = name;
        this.pet = pet;
        if (this.pet === undefined) {
            this.pet = "bat";
        }
        this.thirsty = true;
    }
        drink() {
            this.ouncesDrank += 10;
            this.thirsty = false;
            if (this.ouncesDrank >= 50) {
                this.ouncesDrank = 50;
                return "I\'m too full to drink anymore!";
            }   
            
        }
    }
           
         
    




module.exports = Vampire;