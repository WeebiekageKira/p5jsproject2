function startup()
{
    let greenVal = 255;
    let redVal = 255;
    let blueVal = 0;
    let sunshine = -50;
    let orbit = frameCount % (width + 50);
    background(redVal - (orbit/3), greenVal - (orbit/3), blueVal);
    fill(0, 200, 0); //grass
    rect(0, 400, 800, 200 );
    
    fill("grey"); //tower
    rect(700, 100, 100, 300);


    fill("yellow");
    circle(sunshine + orbit, 50, 100);

    textSize(75);
    text("🛬" , mouseX - 10, 100);
    
    fill("black"); //road
    rect(0, 420, 800, 50);
}