function Ball(){
  var randWidth = getRandomInt(20, game.width-80);
  var randHeight = getRandomInt(20, (game.height-game.height/2)-80);
  this.sprite = game.add.sprite(randWidth,randHeight , 'ball');
  game.physics.enable(this.sprite)
  this.sprite.body.immovable = true;
  this.sprite.body.moves = false;
  this.sprite.body.collideWorldBounds = true;
  this.sprite.body.bounce.set(0.2);

  this.pickUp = function(){
    this.sprite.kill();
  }

  this.drop = function(x, y){
    this.sprite.body.immovable = false;
    this.sprite.x = player.sprite.x + x*50;
    this.sprite.y = player.sprite.y + y*50;

    this.sprite.body.velocity.x = x*BALL_SPEED;
    this.sprite.body.velocity.y = y*BALL_SPEED;
    this.sprite.body.moves = true;
  }
}
