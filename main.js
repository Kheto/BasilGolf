var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var player, ball;
var cursors;
const MOVE_SPEED = 200;

function preload() {
	game.load.spritesheet('dog', 'assets/basil.png', 80, 80);
  game.load.image('ball', 'assets/ball.png');
	game.load.spritesheet('hole', 'assets/hole.png', 18, 18);
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.stage.backgroundColor = '#3eaf01'

  //player = game.add.sprite(50, 50, 'dog', 0);
  player = new Dog();
  ball = new Ball();
	hole = new Hole();
  cursors = game.input.keyboard.createCursorKeys();
}

function update() {
  game.physics.arcade.collide(player.sprite, ball.sprite, pickUpBall, null, this);
	game.physics.arcade.collide(hole.sprite, ball.sprite, score, null, this);

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

function score(){
	hole.sprite.kill();
	ball.sprite.kill();
	hole = new Hole();
	ball = new Ball();
}
