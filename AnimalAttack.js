var bodyX = 200;
var bodyY = 220;
var bodyW = 118;
var bodyH = bodyW/2;

draw = function() {
    background(207, 254, 255);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, 120, 120); // body?
    
    ellipse(bodyX, 140, 90, 90); // face?
    ellipse(199,87,60,60);
    stroke(255, 0, 0);
    strokeWeight(3);
    fill(255, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(3);
    ellipse(190,80,15,15);
    fill(0, 0, 0);
    ellipse(190,80,2,2);
    
    
    stroke(255, 0, 0);
    strokeWeight(3);
    fill(255, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(3);
    ellipse(210,80,15,15);
    fill(0, 0, 0);
    ellipse(210,80,2,2);
    
    
};
