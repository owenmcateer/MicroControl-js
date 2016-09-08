
/*
Micro.test.test1('go');
Micro.test.test2('go');
Micro.test.test3('go');
*/

function output() {
  console.log('OUTPUT');
}

Micro.game.setup(15, 15, 24, output(), true);

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
