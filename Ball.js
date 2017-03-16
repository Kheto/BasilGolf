function Ball(){
  this.ball = game.add.sprite(400, 200, 'ball');
  game.physics.enable(this.ball)
  this.ball.body.immovable = true;
}
