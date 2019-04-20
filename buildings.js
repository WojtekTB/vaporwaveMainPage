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

let startColors = {
  c1: 217,148,184,
  c1: 246,246,246,
  c1: 217,148,184,
}

class Stars{
  constructor(){

  }

}
