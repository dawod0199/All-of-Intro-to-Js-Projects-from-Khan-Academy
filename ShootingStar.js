var xPos = -2;
var yPos = -2;

draw = function() {
    xPos++;
    yPos++;
    background(29, 40, 115);
    noStroke();
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
};
