var canvas = document.getElementById('myCanvas');

class Circle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    var maxRadius = 20;
    var minRadius = 3;
    this.r = minRadius + Math.random() * (maxRadius - minRadius);
    this.startAngle = 0;
    this.endAngle = 2 * Math.PI;

    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var col = 'rgb(' + r + ',' + g + ',' + b + ')';
    this.fillColor = col;
  }
  draw() {
    var context = canvas.getContext('2d');
    context.beginPath();
    context.fillStyle = this.fillColor;
    context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
    context.fill();
  }
}

//drawing random circles at an interval
window.onload = function () {
  setInterval(() => {
    const circle = new Circle();
    circle.draw();
  }, 100);
};

/****************drawing random circles at mouse-click - un-comment to see the results**********/
// window.onload = function () {
//   document.addEventListener('click', () => {
//     const circle = new Circle();
//     circle.draw();
//   });
// };

/****************drawing random circles at mouse-over - un-comment to see the results************/
// window.onload = function () {
//   document.addEventListener('mouseover', () => {
//     const circle = new Circle();
//     circle.draw();
//   });
// };
