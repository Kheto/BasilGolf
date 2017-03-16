var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var dog, ball;
var cursors;

function preload() {
	game.load.spritesheet('dog', 'assets/basil.png', 80, 80);
  game.load.image('ball', 'assets/ball.png');

}

function create() {
  dog = game.add.sprite(50, 50, 'dog');
  ball = game.add.sprite(400, 200, 'ball');

  cursors = game.input.keyboard.createCursorKeys();
}

function update() {

}
