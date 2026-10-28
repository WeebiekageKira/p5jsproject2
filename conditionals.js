function conditionals()
{

    let greenVal = 255;
    let redVal = 255;
    let blueVal = 0;
    let SunColor = 0;

    let grey1 = 128;

    mouseY = frameCount % 700;
    
    fill(redVal - (mouseY /2), greenVal - (mouseY / 2), blueVal);
    rect(0, 0, 800, 600);



    if (grey1 >= 20)
    {
        grey1 -= (mouseY / 4);
        textSize(10);
        text(grey1, 100, 50, 100, 100);
    }

    fill(grey1, grey1, grey1);
    rect(0, 100, 100, 700);
    fill(grey1, grey1, grey1);
    rect(200, 300, 100, 500);
    fill(grey1, grey1, grey1);
    rect(300, 200, 100, 600);
    
    fill(255, 255, SunColor + (mouseY /2));
    circle(400, mouseY - 50, 100);

}

// class car{
//     carX = 50;
//     carY = 50;
//     speed = 1;
// }