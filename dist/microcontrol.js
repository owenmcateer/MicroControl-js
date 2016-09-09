/**
 * @file
 * @author       Owen McAteer
 * @copyright    2016 Owen McAteer.
 * @license      {@link https://github.com/owenmcateer/MicroControl-js/blob/master/LICENSE|MIT License}
 */

var Micro = Micro || {};

/**
 * @file
 * @author       Owen McAteer
 * @copyright    2016 Owen McAteer.
 * @license      {@link https://github.com/owenmcateer/MicroControl-js/blob/master/LICENSE|MIT License}
 */

Micro.debug = {

  /**
   * Debug logger.
   *
   * If debugging is enabled it will output all debugging data.
   */
  log: function(data) {
    if(!Micro.game.debug) {
      console.log(data);
    }
  }
};

/**
 * @file
 * @author       Owen McAteer
 * @copyright    2016 Owen McAteer.
 * @license      {@link https://github.com/owenmcateer/MicroControl-js/blob/master/LICENSE|MIT License}
 */

Micro.frames = {

  testvar : 123,

  test : function() {
    console.log('frames cool');
  }
};

/**
 * @file
 * @author       Owen McAteer
 * @copyright    2016 Owen McAteer.
 * @license      {@link https://github.com/owenmcateer/MicroControl-js/blob/master/LICENSE|MIT License}
 */

Micro.game = {

  /**
   * Output width {boolean} width - Pixel width of output.
   */
  width: 0,

  /**
   * Output height {boolean} height - Pixel height of output.
   */
  height: 0,

  /**
   * Is booted {boolean} isBooted - Has the game booted up yet?
   */
  isBooted: false,

  /**
   * Is running {boolean} isRunning - Is game running or paused?
   */
  isRunning: false,

  /**
   * Display on {boolean} isRunning - Output to display or not?
   */
  display_on: true,

  /**
   * All game settings.
   */
  settings: {
    /**
     * Bits Per Pixel {int} bpp - Number or bits per pixel.
     */
    bpp: 24,

    /**
     * Output function {boolean} output - Passed output function.
     */
    output: function(){},

    /**
     * Debug {boolean} debug - Enable debugging?
     */
    debug: false,
  },

  /**
   * Display on {boolean} isRunning - Output to display or not?
   */
  setup : function(width, height, settings) {

    // Set those settings.
    this.width = width;
    this.height = height;

    for (var p in settings) {
      try {
        this.settings[p] = settings[p];

      } catch(e) {
        // Property in destination object not set; create it and set its value.
        this.settings[p] = settings[p];
      }
    }

    console.log(this.settings);

    // Start the game already.
    if (this.isBooted) {
      return;
    }
    Micro.debug.log('booting');
    this.isBooted = true;
    this.isRunning = true;
    console.log(this.settings);

  },

};

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

/**
 * @file
 * @author       Owen McAteer
 * @copyright    2016 Owen McAteer.
 * @license      {@link https://github.com/owenmcateer/MicroControl-js/blob/master/LICENSE|MIT License}
 */
