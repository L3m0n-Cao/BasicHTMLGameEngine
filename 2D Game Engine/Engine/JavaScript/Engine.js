//The engine class
const canvas = document.getElementById("canvas1");
const c = canvas.getContext("2d");

class ZenithEngine {
  constructor() {

  }
  //Methods
  setupCanvas(x, y, width, height, corner, background) {
    canvas.style.left = x +"px";
    canvas.style.top = y +"px";
    canvas.width = width;
    canvas.height = height;
    canvas.style.borderRadius = corner;
    canvas.style.background = background;

    if (x == undefined
      &&y == undefined
      &&width == undefined
      &&height == undefined
      &&corner == undefined
      &&background == undefined) {
      console.error("Failed to setup canvas, Too few arguments passed")
    }
  }
  //Shapes
  circle(x, y, radius, colour, stroke, width) {
    if (stroke) {
      c.beginPath();
      c.lineWidth = width;
      c.strokeStyle = colour;
      c.arc(x, y, radius, 0, Math.PI*2, false);
      c.closePath();
      c.stroke();
    } else {
        c.beginPath();
        c.fillStyle = colour;
        c.arc(x, y, radius, 0, Math.PI*2, false);
        c.closePath();
        c.fill();
    }
  }

  //Polygons
 polygon (radius, inset, n, x, y, colour) {
  c.beginPath();
  c.save();
  c.translate(x, y);
  c.moveTo(0, -radius);

  for(let i=0; i<n; i++) {
    c.rotate(Math.PI/n);
    c.lineTo(0, -(radius*inset));
    c.rotate(Math.PI/n);
    c.lineTo(0, -radius);
  }
  c.rotate(Math.random()*3);
  c.restore();
  c.closePath();
  c.fillStyle = colour;
  c.fill();
}

  //Physics
  collision(object1, object2) {
    //Parameters = Object1, Object2
    //Each object needs to have a Radius, Y and Y properties
    const xDist = object1.x - object2.x;
    const yDist = object1.y - object2.y;
    const radius = object1.radius + object2.radius;
    const dist = Math.hypot(xDist, yDist);

    if (dist < radius) {
      return true;
    }
  }

  hitbox(object1, object2) {
    if(
      object1.x < object2.x + object2.width&&
      object1.x + object1.width > object2.x&&
        object1.y < object2.y + object2.height&&
      object1.y + object1.height > object2.y
    ) {
      return true;
    }
  }
  //General Video Gme stuff
  wasdMovement(object) {

    switch (keyboard.currentKey) {
      case "w":
        object.velocity.y = -object.velocity.yVel;
      break;
      case "s":
        object.velocity.y = object.velocity.yVel;
      break;
      case "a":
        object.velocity.x = -object.velocity.xVel;
      break;
      case "d":
        player.velocity.x = object.velocity.xVel;
      break;
    }

    if(keyboard.keyIsDown == false) {
      object.velocity.x = 0;
      object.velocity.y = 0;
    }

    object.x += object.velocity.x;
    object.y += object.velocity.y;
  }
}
