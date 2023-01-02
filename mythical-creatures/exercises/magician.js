class Magician {
   
    constructor(theMagician) {
        this.name = `The Great ${theMagician.name}`;
        this.confidencePercentage = 10;
        this.assistant = theMagician.assistant;
        this.favoriteAccessory = theMagician.clothing;
          if (this.favoriteAccessory === undefined) {
            this.favoriteAccessory = "top hat"
          }
    }
      performIncantation(words) {
        return (words.toUpperCase() + "!");
      }  
      performTrick() {
        this.confidencePercentage += 10;
        if (this.favoriteAccessory === 'top hat') {
            return 'PULL RABBIT FROM TOP HAT';
        } else {
            return 'PULL DOVE FROM SLEEVE';
        }
        }
        performShowStopper() {
            if (this.confidencePercentage <= 100) { return 'Oh no, this trick is not ready!'; 
            } else if (this.assistant === true) {
                return 'WOW! The magician totally just sawed that person in half!';
            } else {
                return 'Oh no, this trick is not ready!'; 
            }
         
        }
      }


module.exports = Magician;
