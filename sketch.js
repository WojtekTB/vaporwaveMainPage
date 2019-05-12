var screenX = window.innerWidth, screenY = window.innerHeight;
var ambSound;
var frontBuildings = [];
var backBuildings = [];
var stars;
var road;
var totalYoffse;
var car1;
var car2;//adding another car to move the other way
var carimage;
var peopleOnTopSidewalk = [];
var peopleOnBottomSidewalk = [];

function preload(){
  carimage = loadImage("./car.png");
  ambSound = loadSound("./sounds/traffic.mp3");
}

function setup(){
  ambSound.setVolume(0.19);
  ambSound.play();
  let currentTime = hour();
  let opasityOfDay;
  if(currentTime > 12){
    opasityOfDay = map(currentTime, 12, 24, 255, 0);
  }
  else{
    opasityOfDay = map(currentTime, 0, 12, 0, 255);
  }
  createBuildings();
  setGradient(0, 0, screenX, screenY, color(184,125,138), color(138,116,165), 1);
  stars = new Stars();
  stars.show();
  setGradient(0, 0, screenX, screenY, color(135-40,206-40,235-40, opasityOfDay), color(135-40,206-40,250-40, opasityOfDay), 1);
  for(let i = 0; i < frontBuildings.length; i++){
    backBuildings[i].show();
  }
  for(let i = 0; i < frontBuildings.length; i++){
    frontBuildings[i].show();
  }
  road = new Road();
  road.show();
  car1 = new Car(carimage, true);
  car2 = new Car(carimage, false);

  for(let i = 0; i < 20; i++){
    peopleOnTopSidewalk[i] = new Person(random(0, screenX), road.sidewalkY1 + 5, road.sidewalkY1 + road.h);
  }
  for(let i = 0; i < 20; i++){
    peopleOnBottomSidewalk[i] = new Person(random(0, screenX), road.sidewalkY2 + 5, road.sidewalkY2 + road.h);
  }

}
function draw(){
  for(let i = 0; i < frontBuildings.length; i++){
    backBuildings[i].simpleShow();
  }
  for(let i = 0; i < frontBuildings.length; i++){
    frontBuildings[i].simpleShow();
  }
  road.show();
  car2.show();
  for(let i = 0; i < 20; i++){
    peopleOnTopSidewalk[i].draw();
  }
  for(let i = 0; i < 20; i++){
    peopleOnBottomSidewalk[i].draw();
  }
  car1.show();
  let millisecond = millis();
  fill(0);
  let curHour = hour();
  let curMinutes = minute();
  text(`${curHour}:${curMinutes}`, 0, 0, 200, 200);
  // testPerson.draw();
  // console.log(mouseY);
  if (ambSound.isPlaying() === false){
    ambSound.play();
  }
}

function createBuildings(){
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
