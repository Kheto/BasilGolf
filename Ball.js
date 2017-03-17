function Ball(){
  var randHeight = Math.random()*game.height;
  var randWidth = Math.random()*game.width;
  this.sprite = game.add.sprite(randWidth,randHeight , 'ball');
  game.physics.enable(this.sprite)
  this.sprite.body.immovable = true;
  this.sprite.body.moves = false;
  this.sprite.body.collideWorldBounds = true;
  this.sprite.body.bounce.set(0.2);

  this.pickUp = function(){
    // this.sprite.y = Math.floor(Math.random()*game.height);
    // this.sprite.x = Math.floor(Math.random()*game.width);
    // this.sprite.body.velocity.x = 0;
    // this.sprite.body.velocity.y= 0;
    this.sprite.kill();

  }

  this.drop = function(x, y){
    this.sprite.body.immovable = false;
    this.sprite.x = player.sprite.x + x*40;
    this.sprite.y = player.sprite.y + y*40;

    this.sprite.body.velocity.x = x*150;
    this.sprite.body.velocity.y = y*150;
    this.sprite.body.moves = true;
  }
}
