function variables()
{
    ellipse(carX, 100, 100, 100);
    

    textSize(75);
    text("🚗", 600 - carX ,420);

     textSize(75);
    text("🚗",700 - (carX * 2),450);

     textSize(75);
    text("🚗",800 - carX,420);

    carX = frameCount % height;

    textSize(10);
    text(`mouseX: ${mouseX}`, 20, 20);

    textSize(10);
    text(`mouseY: ${mouseY}`, 20, 40);
    
    fill('hsl(20, 61%, 17%');
    rect(10, 400, 50, 100);

    fill(100, 220, 0);
    triangle(5, 400, 10, 200 - frameCount % 500, 100, 400);

    image(charlie, carX, 10, 100, 100);

    stroke("yellow");
  line(lineXone, lineYone, lineXone + 30, lineYone - 30);

    textSize(75);
    text("🚗",lineXone + 800 - carX,lineYone + 420);

    lineXone = random(0, width);
    lineYone = random(0, height/2);

    
}