var colorScheme = {
  fbColor: [121,142,176],
  bbColor: null
}

class FrontBuilding{
  constructor(x, y){
    let maxHeight = 20;
    let minHeight = 10;
    let maxWidth = 6;
    let minWidth = 2;
    let scale = 10;
    this.x = x;
    this.y = y;
    this.colorScheme = colorScheme;
    this.buildingHeight = Math.floor(random(minHeight, maxHeight)) * scale;
    this.buildingWidth = Math.floor(random(minWidth, maxWidth)) * scale;
    this.windowPadding = this.buildingWidth/15;
    this.windowWandH = scale;
    this.windows = [];
    for(let y = 0; y < (this.buildingWidth - this.windowPadding)/scale; y++){
      for(let x = 0; x < (this.buildingHeight - this.windowPadding)/scale; x++){
        this.windows.push([(((this.windowPadding * 2) * x) + (this.windowWandH * x) + this.windowPadding), (((this.windowPadding * 2) * y) + (this.windowWandH * y) + this.windowPadding)]);//[x, y]
      }
    }

  }
  show(){
    stroke(0);
    fill(this.colorScheme.fbColor);
    rect(this.x, this.y, this.buildingWidth, this.buildingHeight);
    noStroke();
    fill(255, 255, 0, 90);
    // console.log(this.windows.length);
    for(let i = 0; i < this.windows.length; i++){
      rect(this.windows[i][1] + this.x, this.windows[i][0] + this.y, this.windowWandH, this.windowWandH);
      // console.log(this.windows[i][0], this.windows[i][1], this.windowWandH);
    }
  }
  update(){}
}

class BackBuilding{
  constructor(colorScheme){
    this.MaxHeight = 40;
    this.MinHeight = 10;
    this.MaxWidth = 6;
    this.MinWidth = 3;
    this.scale = 10;
  }
  show(){}
  update(){}
}
