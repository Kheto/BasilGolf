function Green(){
  var randHeight = Math.random()*game.height-10;
  var randWidth = Math.random()*game.width-10;
  this.sprite = game.add.sprite(randHeight, randWidth , 'green', 1);
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
