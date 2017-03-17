var game = new Phaser.Game(600, 900, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var player, ball;
var cursors;
var scoreCounter;
var playerOnGreen;
const MOVE_SPEED = 200;
const BALL_SPEED = 250;

function preload() {
	game.load.spritesheet('dog', 'assets/basil.png', 80, 80);
  game.load.image('ball', 'assets/ball.png');
  game.load.image('green', 'assets/green.png');
	game.load.spritesheet('hole', 'assets/hole.png', 18, 18);

  game.load.image('vjoy_base', 'assets/base.png');
  game.load.image('vjoy_body', 'assets/body.png');
  game.load.image('vjoy_cap', 'assets/cap.png');
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.vjoy = game.plugins.add(Phaser.Plugin.VJoy);
  game.vjoy.inputEnable(0, 400, 0, 400);
  game.stage.backgroundColor = '#3eaf01'

  //player = game.add.sprite(50, 50, 'dog', 0);
  player = new Dog();
  ball = new Ball();
	green = new Green();
	hole = new Hole(green.sprite.x, green.sprite.y);
	scoreCounter = 0;

	text = game.add.text(40, 40, "Score: 0", {
		font: "24px Arial",
		fill: "#ffff",
		align: "center"
	});
}

function update() {
	cursors = game.vjoy.cursors;
	console.log("UP: " + cursors.up, "DOWN: " + cursors.down, "LEFT: "+ cursors.left, "RIGHT:"+cursors.right);
	game.physics.arcade.collide(hole.sprite, ball.sprite, score, null, this);
	playerOnGreen = game.physics.arcade.overlap(player.sprite, green.sprite, dropBall, null, this);
	if(!playerOnGreen){
		game.physics.arcade.overlap(player.sprite, ball.sprite, pickUpBall, null, this);
	}
  player.update();
}

function pickUpBall(playerSprite, ballSprite){
  //ball.respawn();
	player.hasBall = true;
	ball.pickUp();
}

function dropBall(){
	if(player.hasBall){
		ball = new Ball();
		player.takeBall();
		ball.drop(player.getXDir(), player.getYDir());
	}
}

function score(){
	hole.sprite.kill();
	ball.sprite.kill();
	green.sprite.kill();
	scoreCounter += 1;
	text.setText("Score: " + scoreCounter);
	ball = new Ball();
	green = new Green();
	hole = new Hole(green.sprite.x-6, green.sprite.y-6);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
