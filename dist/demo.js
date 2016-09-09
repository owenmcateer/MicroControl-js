
/* Example matrix output */
var matrix = {
  leds: new ArrayBuffer(15 * 15),
  flip: function() {
    console.log('Outputting data');
    console.log(this.leds);
  }
}

var settings = {
  bpp: 24, // Full RGB 255.
  output: matrix,
  debug: true
};
Micro.game.setup(15, 15, settings);

var state_play = {
  doSomething: function() {
    return 'play state is working';
  },

  update: function() {
    console.log(this.doSomething);
  }
}

console.log(Micro.state.list());
Micro.state.add('state_play');
console.log(Micro.state.list());
