function Hole(x, y){
  this.sprite = game.add.sprite(x-6, y-6, 'hole', 1);
  game.physics.enable(this.sprite)
  this.sprite.body.immovable = true;
  this.sprite.body.moves = false;
  this.sprite.body.setCircle(0);

  this.hide = function(){
    ths.sprite.frame = 0;
  }

  this.show = function(){
    ths.sprite.frame = 1;
  }
}
