var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var player, ball;
var cursors;
const MOVE_SPEED = 200;

function preload() {
	game.load.spritesheet('dog', 'assets/basil.png', 80, 80);
  game.load.image('ball', 'assets/ball.png');
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.stage.backgroundColor = '#3eaf01'

  //player = game.add.sprite(50, 50, 'dog', 0);
  player = new Dog();
  ball = new Ball();
  cursors = game.input.keyboard.createCursorKeys();
}

function update() {
  game.physics.arcade.collide(player.sprite, ball.sprite, pickUpBall, null, this);

  //game.physics.arcade.overlap(player.sprite, ball.sprite, pickUpBall, null, this);
  ns = false;
  ew = false;
  player.update();
}

function pickUpBall(playerSprite, ballSprite){
  //ball.respawn();
	player.hasBall = true;
	ball.pickUp();
}

function dropBall(){
	ball = new Ball();
	ball.drop(player.getXDir(), player.getYDir());
}
