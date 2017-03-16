var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var dog, ball;
var cursors;
var ns, ew;
const MOVE_SPEED = 80;

function preload() {
	game.load.spritesheet('dog', 'assets/basil.png', 80, 80);
  game.load.image('ball', 'assets/ball.png');
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.stage.backgroundColor = '#3eaf01'

  //player = game.add.sprite(50, 50, 'dog', 0);
  dog = new Dog();
  ball = new Ball();
  cursors = game.input.keyboard.createCursorKeys();
}

function update() {
  game.physics.arcade.collide(dog.player, ball.ball);

  game.physics.arcade.overlap(dog.player, ball.ball, pickUpBall, null, this);
  ns = false;
  ew = false;
  dog.update();
}

function pickUpBall(player, ball){
  ball.kill();
  console.log("yay");
}
