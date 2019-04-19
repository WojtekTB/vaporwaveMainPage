var screenX = window.innerWidth, screenY = window.innerHeight;
var building;

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  building = new FrontBuilding(200, 300);
}
function draw(){
  background(0);
  building.show();
}
