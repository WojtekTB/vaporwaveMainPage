var colorScheme = {
  fbColor: [121, 142, 176],
  bbColor: [158,136,158],
  bbWinColor: [165,143,165]
}

class FrontBuilding{
  constructor(x, y){
    let maxHeight = 20;
    let minHeight = 13;
    let maxWidth = 6;
    let minWidth = 3;
    this.scale = screenY / 85.8;
    this.x = x;
    this.y = y;
    this.colorScheme = colorScheme;
    this.buildingHeight = Math.floor(random(minHeight, maxHeight)) * this.scale;
    this.buildingWidth = Math.floor(random(minWidth, maxWidth)) * this.scale;
    this.roofGlow = Math.floor(random(0, 4));

    this.windowPadding = (this.scale/5);
    this.windowWandH = this.scale - (this.windowPadding * 2);
    this.windows = [];
    for(let y = 0; y < (Math.floor((this.buildingHeight - (2 * this.scale))/this.scale)); y++){
      for(let x = 0; x < Math.floor((this.buildingWidth-this.scale)/this.scale); x++){
        this.windows.push([(((this.windowPadding * 2) * y) + (this.windowWandH * y) + this.windowPadding),
          (this.windowPadding * 3.5) + (this.windowWandH * x) + (2 * this.windowPadding * x), Math.floor(random(0, 150))]);
      }
    }
    // console.log(this.windows[0][2]);
    // console.log({x: this.x, y: this.y, w: this.buildingWidth, h: this.buildingHeight, WandH: this.windowWandH});
  }
  show(){
    noStroke();
    fill(this.colorScheme.fbColor);
    rect(this.x, this.y - this.buildingHeight, this.buildingWidth, this.buildingHeight);
    if(this.buildingWidth > 3 * this.scale){
      if(this.roofGlow === 0){
        fill(255,130,170);
        rect(this.x + random(10, 2*this.scale), this.y - this.buildingHeight+1, 2, -5);
      }
      fill(this.colorScheme.fbColor);
      rect(this.x + 5, this.y - this.buildingHeight+1, this.buildingWidth - 10, -3);
    }
    for(let i = 0; i < this.windows.length; i++){
      if(this.windows[i][2] === 0){
        fill(179,196,161);
      }
      else if(this.windows[i][2] === 1){
        fill(153,206,251);
      }
      // else if(this.windows[i][2] === 3){
      //   fill(this.colorScheme.fbColor);
      // }
      else{
        fill(122, 155, 189);
      }
      rect(this.windows[i][1] + this.x, this.windows[i][0] + this.y - this.buildingHeight + this.windowPadding, this.windowWandH, this.windowWandH);
    }
  }
  update(){}
}

class BackBuilding{
  constructor(x, y){
    let maxHeight = 40;
    let minHeight = 23;
    let maxWidth = 6;
    let minWidth = 3;
    this.scale = screenY / 85.8;
    this.x = x;
    this.y = y;
    this.colorScheme = colorScheme;
    this.buildingHeight = Math.floor(random(minHeight, maxHeight)) * this.scale;
    this.buildingWidth = Math.floor(random(minWidth, maxWidth)) * this.scale;

    this.windowPadding = (this.scale/5);
    this.windowWandH = this.scale - (this.windowPadding * 2);
    this.windows = [];
    for(let y = 0; y < (Math.floor((this.buildingHeight - (2 * this.scale))/this.scale)); y++){
      for(let x = 0; x < Math.floor((this.buildingWidth-this.scale)/this.scale); x++){
        this.windows.push([(((this.windowPadding * 2) * y) + (this.windowWandH * y) + this.windowPadding),
          (this.windowPadding * 3.5) + (this.windowWandH * x) + (2 * this.windowPadding * x)]);
      }
    }
    let currentTime = hour();
    let opasityOfDay;
    if(currentTime > 12){
      opasityOfDay = Math.floor(map(currentTime, 0, 12, 0, 5));
    }
    else{
      opasityOfDay = Math.floor(map(currentTime, 12, 24, 5, 0));
    }
    this.currentBuildingColor = [];
    this.currentWindowColor = [];
    for(let i = 0; i < 3; i++){
      this.currentBuildingColor[i] = this.colorScheme.bbColor[i] + opasityOfDay;
    }
    for(let i = 0; i < 3; i++){
      this.currentWindowColor[i] = this.colorScheme.bbWinColor[i] + opasityOfDay;
    }

    // console.log(this.windows[0][2]);
    // console.log({x: this.x, y: this.y, w: this.buildingWidth, h: this.buildingHeight, WandH: this.windowWandH});
  }
  show(){
    noStroke();
    console.log(this.colorScheme.bbColor);
    console.log(this.currentBuildingColor);
    fill(this.currentBuildingColor);
    rect(this.x, this.y - this.buildingHeight, this.buildingWidth, this.buildingHeight);
    for(let i = 0; i < this.windows.length; i++){
      fill(this.currentWindowColor);
      // console.log(this.windows[i][2]);
      rect(this.windows[i][1] + this.x, this.windows[i][0] + this.y - this.buildingHeight + this.windowPadding, this.windowWandH, this.windowWandH);
    }
  }
  update(){}
}

let starColors = {
  c1: [217,148,184],
  c2: [246,246,246],
  c3: [217,148,128],
}

class Stars{
  constructor(){
    this.numberOfStars = 100;
    this.stars = [];
    for(let i = 0; i < this.numberOfStars; i++){
      this.stars.push([random((screenX)/30, (screenX*29)/30), random((screenY)/30, (screenY * 29)/30 - totalYoffset*2), Math.floor(random(1, 4))]);//x, y, color
    }
  }

  show(){
    for(let i = 0; i < this.numberOfStars; i++){
      noStroke();
      if(this.stars[i][2] === 1){
        fill(starColors.c1);
      }
      else if(this.stars[i][2] === 2){
        fill(starColors.c2);
      }
      else if(this.stars[i][2] === 3){
        fill(starColors.c3);
      }
      rect(this.stars[i][0], this.stars[i][1], 2, 4);
    }
  }

}

class Road{
  constructor(){
    this.x = 0;
    this.y = screenY - totalYoffset;
    this.w = 25;
    this.h = 12;
    this.perspectiveOffset = 15;
  }

  showSidewalk(yOffset){
    // strokeWeight(1);
    // stroke(10);
    fill(156, 156, 168);
    for(let i = 0; i < screenX/this.w + 1; i++){
      quad(this.x - (this.w/2) + ((this.w + 2) * i), this.y + yOffset,
        this.x - (this.w/2) + this.w + ((this.w + 2) * i), this.y + yOffset,
        this.x - (this.w/2) + this.w + this.perspectiveOffset + ((this.w + 2) * i), this.y + this.h + yOffset,
        this.x - (this.w/2) + this.perspectiveOffset + ((this.w + 2) * i), this.y + this.h + yOffset);
    }
  }
  showRoad(yOffset){
    fill(113, 97, 97);
    quad(this.x, this.y+this.h,
      this.x + screenX, this.y+this.h,
      this.x + screenX, screenY - this.h,
      this.x, screenY - this.h);
    fill(255, 229, 229);
    for(let i = 0; i < screenX/this.w + 1; i++){
      quad(this.x - (this.w/2) + ((this.w + 100) * i), screenY - ((screenY - this.y)/2) - this.h/2,
        this.x - (this.w/2) + this.w*2 + ((this.w + 100) * i), screenY - ((screenY - this.y)/2) - this.h/2,
        this.x - (this.w/2) + this.w*2 + this.perspectiveOffset + ((this.w + 100) * i), screenY - ((screenY - this.y)/2) + this.h/2,
        this.x - (this.w/2) + this.perspectiveOffset + ((this.w + 100) * i), screenY - ((screenY - this.y)/2) + this.h/2);
    }
  }

  show(){
    fill(147,112,190);
    rect(0, this.y, screenX, screenY/3);
    this.showSidewalk(0);
    this.showRoad();
    this.showSidewalk(((screenY * 1.2)/10) - this.h);
  }
}

class Car{
  constructor(image, right){
    this.x = -image.width;
    this.y = screenY - totalYoffset;
    this.image = image;
    this.scale = screenY * 0.00034965034965034965;
    this.speed = random(1, 3);
    this.roadLength = random(2,4);
    this.movingRight = right;
  }

  drawCarShape(impx, impy, scale){
    // fill(70);
    // beginShape();
    // // console.log(impx-(4 * scale), (impy+(4 * scale)));
    // vertex(impx+(4 * scale), (impy-(4 * scale)));
    // vertex(impx+(4 * scale), (impy-(0 * scale)));
    // vertex(impx-(5 * scale), (impy-(0 * scale)));
    // vertex(impx-(5 * scale), (impy-(2 * scale)));
    // vertex(impx-(2 * scale), (impy-(2 * scale)));
    // vertex(impx-(2 * scale), (impy-(4 * scale)));
    // vertex(impx+(4 * scale), (impy-(4 * scale)));
    // endShape(CLOSE);
  }
  show(){
    tint(255, 240)
    if(this.movingRight){
    image(this.image, this.x, this.y, this.image.width * this.scale, this.image.height * this.scale);
    this.x += this.speed;
    if(this.x > screenX*this.roadLength){
      this.x = -this.image.width
      this.roadLength = random(2,4);
      this.speed = random(1, 3);
    }
  }
    // console.log(mouseX, screenY - ((screenY - this.y)/2));//
  }
}
