// let myName ="ali     "

// console.log(myName.trueLength);

let myHero = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "web",
    getSpiderPower: function () {
        console.log(`Spider power is ${this.spiderman}`);
        
    }

}

Object.prototype.ali = function() {
    console.log(`ali is present in all objects`);
    
}
//heroPower.ali();
myHero.ali();