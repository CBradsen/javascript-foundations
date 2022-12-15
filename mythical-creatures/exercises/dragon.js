class Dragon {
    constructor(dragonName, riderName) {
        this.name = dragonName;
        this.rider = riderName;
        this.hungry = true;
        this.eatHowManyTimes = 0;
    }
        greet () {
            return `Hi, ${this.rider}!`
        }
        eat () {
          this.eatHowManyTimes ++
                if (this.eatHowManyTimes === 3) {
                this.hungry = false
            }
        }

}









module.exports = Dragon;