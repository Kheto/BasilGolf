function Hole(){
  var randHeight = Math.random()*game.height-10;
  var randWidth = Math.random()*game.width-10;
  this.sprite = game.add.sprite(randWidth,randHeight , 'hole', 1);
  game.physics.enable(this.sprite)
  this.sprite.body.immovable = true;
  this.sprite.body.moves = false;

  this.hide = function(){
    ths.sprite.frame = 0;
  }

  this.show = function(){
    ths.sprite.frame = 1;
  }
}
