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
   * Bits Per Pixel {int} bpp - Number or bits per pixel.
   */
  bpp: 24,

  /**
   * Output function {boolean} output - Passed output function.
   */
  output: void(),

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
   * Debug {boolean} debug - Enable debugging?
   */
  debug: false,


  /**
   * Display on {boolean} isRunning - Output to display or not?
   */
  setup : function(width, height, bpp, output, debug) {

    // Set those settings.
    this.width = width;
    this.height = height;
    this.bpp = bpp;
    this.output = output;
    this.debug = debug;

    // Start the game already.
    if (this.isBooted) {
      return;
    }
    Micro.debug.log('booting');
    this.isBooted = true;
    this.isRunning = true;
  },

};
