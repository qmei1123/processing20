// Where is the circle
var canvas;
var x, y;
let points1;
let points2;
let points3;
let points4;
let points5;
let points6;
let points7;
let points8;
let points9;
let points10;
let points11;
let points12;
let points13;
let points14;
let points15;
let points16;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
  // Starts in the middle
  x = width / 2;
  y = height + random(20);
  points1 = new Points();
    points2 = new Points();
    points3 = new Points();
    points4 = new Points();
    points5 = new Points();
    points6 = new Points();
    points7 = new Points();
    points8 = new Points();
    points9 = new Points();
    points10 = new Points();
    points11 = new Points();
    points12 = new Points();
    points13 = new Points();
    points14 = new Points();
    points15 = new Points();
    points16 = new Points();
}

function draw() {
  background(200);
  points1.move();
  points1.show();
     points2.move();
  points2.show();
     points3.move();
  points3.show();
     points4.move();
  points4.show();
    points5.move();
  points5.show();
    points6.move();
  points6.show();
     points7.move();
  points7.show();
    points8.move();
  points8.show();
    points9.move();
  points9.show();
     points10.move();
  points10.show();
     points11.move();
  points11.show();
     points12.move();
  points12.show();
    points13.move();
  points13.show();
    points14.move();
  points14.show();
     points15.move();
  points15.show();
    points16.move();
  points16.show();
}

class Points {
    constructor() {
        this.x = width/2 + random(-30, 30);
        this.y = height + random(40);
    }
    
    move() {
        this.y += random(-2);
        if (this.y < 0) {
    this.y = height;
  }
    }
    
    show() {
        stroke(10);
        strokeWeight(4);
        point(this.x, this.y);
    }
}