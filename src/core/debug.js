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
