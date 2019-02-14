## Evil Buzz

### Requirements

Write a program that prints the numbers from 1 to X
where X is a number set in the constructor.
But for multiples of three print "Fizz" instead of the
number and for the multiples of five print "Buzz". For
numbers which are multiples of both three and five
print "FizzBuzz".

### Rules

Evil mute A/B pairing: pairs are not allowed to talk. One person writes tests. The other person is a "lazy evil" programmer who writes the minimal code to pass the tests (but the code doesn't need to actually implement the specification).

The rules, or steps, we should follow when developing with TDD are simple to read, and to understand, although usually not as easy to apply. They are:

— Write a single unit test to verify that some criteria is met.

— Run the failing test (non compiling code counts as a failing test).

— Write just enough code so that the test passes.

— Refactor the code making sure that the test still passes.

— Start again, incrementally testing and developing your application.

### Outcomes

You should become more familiar with using mocha, chai and the red, green refactor flow of TDD.
Try to over engineer the problem so you can become more familiar with sinon if you feel comfortable doing so.
