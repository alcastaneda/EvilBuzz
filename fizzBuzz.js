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
        return '1'
    }
}


module.exports = FizzBuzz;