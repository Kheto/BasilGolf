var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var player, ball;
var cursors;
var dogbol;
const MOVE_SPEED = 200;

function preload() {
	game.load.spritesheet('dog', 'assets/basil.png', 80, 80);
  game.load.image('ball', 'assets/ball.png');
  game.load.image('green', 'assets/green.png');
	game.load.spritesheet('hole', 'assets/hole.png', 18, 18);
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.stage.backgroundColor = '#3eaf01'

  //player = game.add.sprite(50, 50, 'dog', 0);
  player = new Dog();
  ball = new Ball();
	green = new Green();
	hole = new Hole(green.sprite.x, green.sprite.y);
  cursors = game.input.keyboard.createCursorKeys();
}

function update() {
  dogbol = game.physics.arcade.collide(player.sprite, ball.sprite, pickUpBall, null, this);
	game.physics.arcade.collide(hole.sprite, ball.sprite, score, null, this);
	game.physics.arcade.collide(player.sprite, green.sprite, null, null, this);

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
	green.sprite.kill();
	ball = new Ball();
	green = new Green();
	hole = new Hole(green.sprite.x-6, green.sprite.y-6);
}
