function Dog(){

  this.sprite = game.add.sprite(50, 50, 'dog', 0);
  this.sprite.anchor.setTo(.5, 1);
  game.physics.arcade.enable(this.sprite);
  this.sprite.body.gravity.y = 0;
  this.sprite.body.collideWorldBounds = true;

  this.hasBall = false

  this.update = function(){
    this.sprite.body.velocity.x = 0;
    if(cursors.left.isDown){
      this.sprite.body.velocity.x = -MOVE_SPEED;
      ew = true;
    }else if(cursors.right.isDown){
      this.sprite.body.velocity.x = MOVE_SPEED
      ew = true;
    }

    this.sprite.body.velocity.y = 0;
    if(cursors.up.isDown){
      this.sprite.body.velocity.y = -MOVE_SPEED;
      ns = true;
    }else if(cursors.down.isDown){
      this.sprite.body.velocity.y = MOVE_SPEED
      ns = true;
    }

    this.sprite.scale.x = 1;
    if(ns&&ew){
      this.sprite.frame = 1;
      if(this.sprite.body.velocity.y > 0){
        this.sprite.scale.x = -1;
      }
    }else if(ew){
      this.sprite.frame = 2;
    }else{
      this.sprite.frame = 0;
    }

  }


}
