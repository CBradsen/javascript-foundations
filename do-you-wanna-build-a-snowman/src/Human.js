var Snowman = require('./Snowman');

class Human {
    constructor(name) {
        
        this.name = name
        this.wantsToBuildASnowman = true
        this.materials = { snowballs: 0,
            coal: 0,
            buttons: 0,
            carrots: 0}
            
    }
    gatherMaterials(item, number) {
        this.materials[item] += number
    }
    buildASnowman() {
        return new Snowman(this.materials)
    }
}
// snowman is actually human with a method of build a snowman
// in the method we need to create a new instance of Snowman
// snowman is using the materials of coal, etc


module.exports = Human