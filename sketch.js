var screenX = window.innerWidth, screenY = window.innerHeight;
var ambSound;
var frontBuildings = [];
var backBuildings = [];
var stars;
var road;
var totalYoffse;
var car1;
var car2;//adding another car to move the other way
var clouds;
var carimage;
var cloudimage;
var peopleOnTopSidewalk = [];
var peopleOnBottomSidewalk = [];
var sunImage;
var sun;

function preload(){
  carimage = loadImage("./images/car.png");
  cloudimage = loadImage("./images/cloud.png");
  sunImage = loadImage("./images/sun.png");
  ambSound = loadSound("./sounds/traffic.mp3");
}



var currentTime;

function changeTime(time){
  currentTime = time;
  drawBackground();
}

function setup(){
  currentTime = hour();
  ambSound.setVolume(0.19);
  ambSound.play();
  drawBackground();
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
  // clouds.show();
  // testPerson.draw();
  // console.log(mouseY);
  if (ambSound.isPlaying() === false){
    ambSound.play();
  }
}

function drawBackground(){
  createBuildings();
  setGradient(0, 0, screenX, screenY, color(184,125,138), color(138,116,165), 1);
  let opasityOfNight = 0;
  if(currentTime > 20 && currentTime < 25){
    opasityOfNight = map(currentTime, 20, 24, 0, 255);
  }
  else if(currentTime > -1 && currentTime < 7){
    opasityOfNight = map(currentTime, 0, 7, 255, 0);
  }
  console.log("night op: " + opasityOfNight);
  fill(20, 24, 82, opasityOfNight);
  rect(-1, -1, screenX, screenY);
  stars = new Stars();
  stars.show();
  let opasityOfDay;
  if(currentTime > 6 && currentTime < 13){
    opasityOfDay = map(currentTime, 6, 13, 0, 255);
    // console.log(opasityOfDay);
  }
  else if(currentTime > 12 && currentTime < 21){
    opasityOfDay = map(currentTime, 13, 21, 255, 0);
  }
  else{
    opasityOfDay = 0;
  }
  console.log("day op: " + opasityOfDay);
  fill(95, 166, 195, opasityOfDay);
  rect(-1, -1, screenX, screenY);
  // clouds = new Clouds(cloudimage, true);
  // setGradient(0, 0, screenX, screenY, color(135-40,206-40,235-40, opasityOfDay), color(135-40,206-40,250-40, opasityOfDay), 1);
  sun = new Sun();
  sun.show(currentTime, sunImage);
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
  // image(sunImage, 0, 0, 1000, 1000);
  // let millisecond = millis();
  // fill(0);
  // let curHour = hour();
  // let curMinutes = minute();
  // text(`${curHour}:${curMinutes}`, 0, 0, 200, 200);
}

function createBuildings(){
  totalYoffset = (screenY * 1.2)/10;
  let bby = screenY - totalYoffset;
  let fby = screenY - totalYoffset;
  backBuildings = [];
  frontBuildings = [];
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
