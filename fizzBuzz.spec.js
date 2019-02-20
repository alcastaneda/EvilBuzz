const FizzBuzz = require('./fizzBuzz');
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const sandbox = sinon.createSandbox();

// Write a program that prints the numbers from 1 to X 
// where X is a number set in the contructor. 
// But for multiples of three print "Fizz" instead of the
// number and for the multiples of five print "Buzz". For
// numbers which are multiples of both three and five
// print "FizzBuzz".

describe('FizzBuzz', () => {
    afterEach(() => {
        sandbox.restore();
      });

    it('should pass this canary test', ()=>{
        expect(true).to.equal(true);
    });

    it('should call render on fizzbuzz init', () => {
        const spy = sandbox.stub(FizzBuzz.prototype, 'render')
            .returns('1')
       const fizz = new FizzBuzz(42)
       expect(spy.called).to.be.equal(true)
       expect(fizz.output).to.equal('1');
       expect(fizz.endNumber).to.be.equal(42)
    });

    it('should throw an error if we dont include times in contructor', () => {
        const spy = sandbox.stub(FizzBuzz.prototype, 'render')
            .returns('1')

        expect(spy.called).to.be.equal(false)
        expect(() => new FizzBuzz()).to.throw('must include param endNumber')
        FizzBuzz.bind(FizzBuzz, "100")
        expect(() => new FizzBuzz("100")).to.throw('times is NaN')
    });

    it('should render "Fizz" for numbers divisible by three', function(){
        let num = (Math.floor(Math.random() * 100) + 1) * 3;
        while (num % 5 === 0) {
            num = num / 5
        };
        const fizz = new FizzBuzz(num)
        expect(fizz.render()).to.equal('Fizz');
    });

    it('should render "Buzz" for numbers divisible by five', function(){
        let num = (Math.floor(Math.random() * 100) + 1) * 5;
        while (num % 3 === 0) {
            num = num / 3
        };
        const fizz = new FizzBuzz(num)
        expect(fizz.render()).to.equal('Buzz');
    });

    it('should render "Fizzbuzz" for numbers divisible by three and five', function(){
        const num = (Math.floor(Math.random() * 100) + 1) * 15;
        const fizz = new FizzBuzz(num)
        expect(fizz.render()).to.equal('Fizzbuzz');
    });

    it('should assign this.render to this.output', function(){
        const fizz = new FizzBuzz(1)
        expect(fizz.getOutput).to.equal(fizz.render());
    });
});