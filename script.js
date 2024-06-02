let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

const cam = {
  x: 0,
  y: 0,
  z: 0,
  distance: 100,
  width: 700,
  height: 400,
};

class Node {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  get pX() {
    //Percieved X
    return (cam.distance * (this.x - cam.x)) / (cam.distance + this.z - cam.z);
  }
  get pY() {
    //Percieved Y
    return (cam.distance * (this.y - cam.y)) / (cam.distance + this.z - cam.z);
  }
}

let nodes = [new Node(350, 100, 100)];

nodes.forEach((node) => {
  ctx.beginPath();
  ctx.arc(node.pX + cam.width / 2, node.pY + cam.height / 2, 1, 0, 2 * Math.PI);
  ctx.strokeStyle = "red";
  ctx.lineWidth = 4;
  ctx.stroke();
});
