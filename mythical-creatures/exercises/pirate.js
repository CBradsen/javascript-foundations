class Pirate {
  constructor (name, job) {
    this.name = name;  
    this.job = job;
      if (this.job === undefined) {
      this.job = 'scallywag';  
      } 
    this.cursed = false;  
    this.booty = 0; 
    
  } 
    robShip() {
    this.booty += 100;
      if (this.booty >= 500) {
        this.cursed = true;
        this.booty = 500;
        return 'ARG! I\'ve been cursed!';
      }
      return 'YAARRR!';
    } 
    liftCurse() {
        if (this.cursed === false) {
            return 'You don\'t need to lift a curse!';
        }
        if (this.booty -= 300) {
            this.cursed = false;
           
            return 'Your curse has been lifted!';
        }
    }
}

module.exports = Pirate;