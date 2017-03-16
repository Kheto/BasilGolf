function Dog(){

  this.player = game.add.sprite(50, 50, 'dog', 0);
  this.player.anchor.setTo(.5, 1);
  game.physics.arcade.enable(this.player);
  this.player.body.gravity.y = 0;
  this.player.body.collideWorldBounds = true;

  this.update = function(){
    this.player.body.velocity.x = 0;
    if(cursors.left.isDown){
      this.player.body.velocity.x = -MOVE_SPEED;
      ew = true;
    }else if(cursors.right.isDown){
      this.player.body.velocity.x = MOVE_SPEED
      ew = true;
    }

    this.player.body.velocity.y = 0;
    if(cursors.up.isDown){
      this.player.body.velocity.y = -MOVE_SPEED;
      ns = true;
    }else if(cursors.down.isDown){
      this.player.body.velocity.y = MOVE_SPEED
      ns = true;
    }

    this.player.scale.x = 1;
    if(ns&&ew){
      this.player.frame = 1;
      if(this.player.body.velocity.y > 0){
        this.player.scale.x = -1;
      }
    }else if(ew){
      this.player.frame = 2;
    }else{
      this.player.frame = 0;
    }

  }


}
