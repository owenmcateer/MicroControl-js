/**
 * @file
 * @author       Owen McAteer
 * @copyright    2016 Owen McAteer.
 * @license      {@link https://github.com/owenmcateer/MicroControl-js/blob/master/LICENSE|MIT License}
 */

Micro.state = {
  states: [],

  /**
   * Add a state.
   *
   * @param {[string]} name Name of state
   */
  add: function(name) {
    this.states.push(name);
  },

  /**
   * Find and remove state.
   *
   * @param {[string]} name Name of state
   */
  remove: function(name) {
    var i = this.states.indexOf(name);
    if (i > -1) {
      this.states.splice(i, 1);
    }
  },


  /**
   * Returns a list of all states.
   */
  list: function() {
    return this.states;
  }

};
