class Unicorn {
  constructor(uName, uColor, message) {
    this.name = uName;
      if (uColor === undefined) {
      this.color = "white";
      } else {
        this.color = uColor;
      }  
  } 
  isWhite() {
    if (this.color !== "white") {
      return false;
    }
  }
  says(message) {
      
      return (`**;* ${message} *;**`);
  }
 }


module.exports = Unicorn;

//read the test
//ask your self if it will fail?
//and why?
//run the test
//make it pass.