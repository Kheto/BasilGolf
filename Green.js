function Green(){
  var randWidth = getRandomInt(80, game.width-80);
  var randHeight = getRandomInt(game.height/2 + 80, game.height-80);
  this.sprite = game.add.sprite(randWidth, randHeight , 'green', 1);
  this.sprite.anchor.setTo(0.5, 0.5)
  game.physics.enable(this.sprite)
  this.sprite.body.immovable = true;
  this.sprite.body.moves = false;
  this.sprite.body.setCircle(this.sprite.width/2);

  this.hide = function(){
    ths.sprite.frame = 0;
  }

  this.show = function(){
    ths.sprite.frame = 1;
  }
}
