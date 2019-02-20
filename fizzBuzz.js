class FizzBuzz {
    constructor(endNumber) {
        if(!endNumber) throw new Error("must include param endNumber")
        if(typeof endNumber !== 'number') throw new Error("times is NaN")
        this.endNumber = endNumber;
        this.output = this.render();
    }
    
    get getOutput() {
        return this.output;
    } 

    render() {
        if (this.endNumber % 5 === 0 && this.endNumber % 3 === 0){
            return 'Fizzbuzz'
        } else if (this.endNumber % 3 === 0) {
            return 'Fizz';
        } else if (this.endNumber % 5 === 0) {
            return 'Buzz';
        }
    }
}


module.exports = FizzBuzz;