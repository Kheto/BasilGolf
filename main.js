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

  //player = game.add.sprite(50, 50, 'dog', 0);
  dog = new Dog();

  ball = game.add.sprite(400, 200, 'ball');

  cursors = game.input.keyboard.createCursorKeys();
}

function update() {
  ns = false;
  ew = false;
  dog.update();


}
