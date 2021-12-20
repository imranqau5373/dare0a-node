function Person(name) {

  this.name = name;

  this.greet = function(other_name) {
    return "Hi " + other_name + ", my name is " + this.name;
  }

}

module.exports = Person;
