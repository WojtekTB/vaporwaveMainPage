var screenX = window.innerWidth, screenY = window.innerHeight;
var frontBuildings = [];
var backBuildings = [];
var stars;
var road;
var totalYoffse;

function setup(){
  console.log(screenY);
  totalYoffset = (screenY * 1.2)/10;
  let bby = screenY - totalYoffset;
  let fby = screenY - totalYoffset;
  createCanvas(window.innerWidth, window.innerHeight);
  backBuildings.push(new BackBuilding(0, bby));
  for(let i = 0; i < (screenX / ((6+3)/2)); i++){
    backBuildings.push(new BackBuilding(backBuildings[i].x + backBuildings[i].buildingWidth + random(-5, 5), bby));
  }
  frontBuildings.push(new FrontBuilding(0, fby));
  for(let i = 0; i < (screenX / ((6+3)/2)); i++){
    frontBuildings.push(new FrontBuilding(frontBuildings[i].x + frontBuildings[i].buildingWidth + random(-5, 5), fby));
  }


  setGradient(0, 0, screenX, screenY, color(184,125,138), color(138,116,165), 1);

  stars = new Stars();
  stars.show();

  for(let i = 0; i < frontBuildings.length; i++){
    backBuildings[i].show();
  }
  for(let i = 0; i < frontBuildings.length; i++){
    frontBuildings[i].show();
  }

  road = new Road();
  road.show();

}
function draw(){
  //189,130,143
  //143,121,145
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === 1) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === 2) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
