exports['test greet'] = function(test) {
  var Person = require("../lib/assignment.js");
  try {
    var person = new Person('Mary');
    test.equals("Hi John, my name is Mary", person.greet('John'));
    person = new Person('Paul');
    test.equals("Hi Lisa, my name is Paul", person.greet('Lisa'));
    test.done()
  } catch (err) {
    var err = Error('Assignment not fixed yet');
    err.stack = "Error: " + err.message;
    throw err;
  }
}
