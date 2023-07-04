var scene, word, system, security;
var score = 0;

function preload() {
  scene = loadImage("assets/scene.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  system = new System();
  security = new Security();

}

function draw() {
  background(scene);

  clues();
  security.display();

  if (score == 3) {
    clear();

    background("black");

    fill("yellow")
    textSize(40);
    text(`Well Done !! The next letter of the word is N
                S N _ _ _`, width / 2 - 300, height / 2);
  }

  drawSprites()
}