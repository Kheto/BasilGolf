function Ball(){
  var randHeight = Math.random()*game.height;
  var randWidth = Math.random()*game.width;
  this.sprite = game.add.sprite(randWidth,randHeight , 'ball');
  game.physics.enable(this.sprite)
  this.sprite.body.immovable = true;
  this.sprite.body.moves = false;

  this.pickUp = function(){
    // this.sprite.y = Math.floor(Math.random()*game.height);
    // this.sprite.x = Math.floor(Math.random()*game.width);
    // this.sprite.body.velocity.x = 0;
    // this.sprite.body.velocity.y= 0;
    this.sprite.kill();

  }

  this.drop = function(x, y){

  }
}
