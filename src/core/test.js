/**
 * @file
 * @author       Owen McAteer
 * @copyright    2016 Owen McAteer.
 * @license      {@link https://github.com/owenmcateer/MicroControl-js/blob/master/LICENSE|MIT License}
 */

Micro.test = {
  testvar: 'data',

  test1: function(msg) {
    console.log(msg);
  },

  test2: function() {
    var holding = this.testvar;
    console.log('test: ', holding);
  },

  test3: function() {
    console.log('test 3: ', Micro.testing.testingvar);
  }
};

Micro.testing = {
  testingvar: 'testing var',

  test1: function(msg) {
    console.log(msg);
  },

  test2: function() {
    var holding = this.testvar;
    console.log('test: ', holding);
  }
};
