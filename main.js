var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var dog, ball;
var cursors;
var ns, ew;
const MOVE_SPEED = 60;

function preload() {
	game.load.spritesheet('dog', 'assets/basil.png', 80, 80);
  game.load.image('ball', 'assets/ball.png');

}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);

  player = game.add.sprite(50, 50, 'dog', 0);
  player.anchor.setTo(.5, 1);
  game.physics.arcade.enable(player);
  player.body.gravity.y = 0;
  player.body.collideWorldBounds = true;

  ball = game.add.sprite(400, 200, 'ball');

  cursors = game.input.keyboard.createCursorKeys();
}

function update() {

  ns = false;
  ew = false;
  player.body.velocity.x = 0;
  if(cursors.left.isDown){
    player.body.velocity.x = -MOVE_SPEED;
    ew = true;
  }else if(cursors.right.isDown){
    player.body.velocity.x = MOVE_SPEED
    ew = true;
  }

  player.body.velocity.y = 0;
  if(cursors.up.isDown){
    player.body.velocity.y = -MOVE_SPEED;
    ns = true;
  }else if(cursors.down.isDown){
    player.body.velocity.y = MOVE_SPEED
    ns = true;
  }

  player.scale.x = 1;
  if(ns&&ew){
    player.frame = 1;
    if(player.body.velocity.y > 0){
      player.scale.x = -1;
    }
  }else if(ew){
    player.frame = 2;
  }else{
    player.frame = 0;
  }


}
