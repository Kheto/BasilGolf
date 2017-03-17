function Dog(){

  this.sprite = game.add.sprite(50, 50, 'dog', 0);
  this.sprite.anchor.setTo(0.5, 0.5);
  game.physics.arcade.enable(this.sprite);
  this.sprite.body.gravity.y = 0;
  this.sprite.body.collideWorldBounds = true;

  this.hasBall = false
  this.xDir = 0;
  this.yDir = 0;

  this.update = function(){
    this.sprite.body.velocity.x = 0;

    //Doin' it the long way!
    //If it looks stupid and it works, it's probably still stupid.
    //this.sprite.scale.y = 1;

    if(cursors.right.isDown){ //Pressing Right
      //Moving West
      this.sprite.body.velocity.x = MOVE_SPEED;
      this.xDir = 1;
      if(cursors.up.isDown){ //Pressing Right and Up
        //Moving North West
        this.sprite.frame = 1;
        this.sprite.scale.y = 1;
      }else if(cursors.down.isDown){ //Pressing Right and Down
        //Moving South West
        this.sprite.frame = 1;
        this.sprite.scale.y = -1;
      }else{
        //moving west
        this.yDir = 0;
        this.sprite.frame = 2;
      }
    }else if(cursors.left.isDown){
      this.sprite.body.velocity.x = -MOVE_SPEED; //Moving West
      this.xDir = -1;
      if(cursors.up.isDown){ //Pressing Left and Down
        //Moving South West
        this.sprite.frame = 1;
        this.sprite.scale.y = -1;
      }else if(cursors.down.isDown){ //Pressing Left and Down
        //Moving South West
        this.sprite.frame = 1;
        this.sprite.scale.y = 1;
      }else{
        this.yDir = 0;
        this.sprite.frame = 2;
      }
    }

    this.sprite.body.velocity.y = 0;
    if(cursors.up.isDown){
      if(!(cursors.left.isDown || cursors.right.isDown)){
        this.sprite.frame = 0;
        this.xDir = 0;
      }
      this.sprite.body.velocity.y = -MOVE_SPEED;
      this.yDir = -1;
    }else if(cursors.down.isDown){
      if(!(cursors.left.isDown || cursors.right.isDown)){
        this.sprite.frame = 0;
        this.xDir = 0;
      }
      this.sprite.body.velocity.y = MOVE_SPEED
      this.yDir = 1;
    }

    if(this.sprite.body.velocity.y == 0 && this.sprite.body.velocity.x == 0 && this.hasBall){
      this.hasBall = false;
      dropBall();
    }

  }

  this.getXDir = function(){
    return this.xDir;
  }

  this.getYDir = function(){
    return this.yDir;
  }
}
