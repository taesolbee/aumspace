let img;

function preload() {
  img = loadImage('space.jpg');
  img2 = loadImage('space2.jpg');
  img3 = loadImage('space3.jpg');
  img4 = loadImage('space4.jpg');
  img5 = loadImage('space5.jpg');
  img6 = loadImage('space6.jpg');
}



function setup() {
  createCanvas(400, 400, WEBGL);
//  noLoop();
}

//function mouseClicked(){
//  redraw();
//}


function draw() {
  background(0);
  
  if (mouseX > width) {
    mouseX=width;
  }
  
  if (mouseX < 10) {
    mouseX=10;
  }
  
  let cameraZ = mouseX *0.6;
  camera(0, 0, cameraZ + 200, 0, 0, 0, 0, 1, 0);
  
  ambientLight(100);
  
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(255, 255, 255, dirX, dirY, -0.5);
  
  
  
  let spaces = [img, img2, img3, img4, img5, img6];
  let space = random(spaces);// select random img
  let space2 = random(spaces);
  let space3 = random(spaces);
  let space4 = random(spaces);
  let space5 = random(spaces);
  

  push();
  translate(0, 0, -50);
  rotateZ(mouseY*0.1/height);
  rotateY(mouseY*0.05/height);
  noStroke();
  texture(img);
  plane(400, 400);
  pop();
  
  push();
  translate(0, -100,-50);
  rotateZ(mouseY*0.1/height);
  rotateY(mouseY*0.05/height);
  noStroke();
  texture(img2);
  box(300, 10, 800);
  pop();
  
  push();
  translate(0, 100,-50);
  rotateZ(mouseY*0.1/height);
  rotateY(mouseY*0.05/height);
  noStroke();
  texture(img3);
  box(300, 10, 800);
  pop();
  
  push();
  translate(-100, 0, -50);
  rotateZ(mouseY*0.1/height);
  rotateY(mouseY*0.05/height);
  noStroke();
  texture(img4);
  box(10, 300, 800);
  pop();
  
  push();
  translate(100, 0, -50);
  rotateZ(mouseY*0.1/height);
  rotateY(mouseY*0.05/height);
  noStroke();
  texture(img5);
  box(10, 300, 800);
  pop();
  
  
}

    function mouseClicked() {  
  let spaces = [img, img2, img3, img4, img5, img6];
  let space = random(spaces);// select random img
  let space2 = random(spaces);
  let space3 = random(spaces);
  let space4 = random(spaces);
  let space5 = random(spaces);

  if (img = loadImage('space.jpg')) {
    img = space;
  } else {
    img = loadImage('space.jpg');
  }
      
  if (img2 = loadImage('space2.jpg')) {
    img2 = space2;
  } else {
    img2 = loadImage('space2.jpg');
  }
      
  if (img3 = loadImage('space3.jpg')) {
    img3 = space3;
  } else {
    img3 = loadImage('space3.jpg');
  }
      
  if (img4 = loadImage('space4.jpg')) {
    img4 = space4;
  } else {
    img4 = loadImage('space4.jpg');
  }
      
  if (img5 = loadImage('space5.jpg')) {
    img5 = space5;
  } else {
    img5 = loadImage('space5.jpg');
  }
      
      
}