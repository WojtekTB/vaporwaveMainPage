var colorScheme = {
  fbColor: [121, 142, 176],
  bbColor: [158,136,158]
}

class FrontBuilding{
  constructor(x, y){
    let maxHeight = 20;
    let minHeight = 13;
    let maxWidth = 6;
    let minWidth = 3;
    this.scale = 10;
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
    this.scale = 10;
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
    // console.log(this.windows[0][2]);
    // console.log({x: this.x, y: this.y, w: this.buildingWidth, h: this.buildingHeight, WandH: this.windowWandH});
  }
  show(){
    noStroke();
    fill(this.colorScheme.bbColor);
    rect(this.x, this.y - this.buildingHeight, this.buildingWidth, this.buildingHeight);
    for(let i = 0; i < this.windows.length; i++){
      fill(165,143,165);
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
    this.y = totalYoffse;
  }

  show(){

  }
}
