function cars(carX, carY)
{
    //let traffic = [,];
    speed = (frameCount * 2) % (width + 1000);


    textSize(75);
    text("🚗", carX - speed, carY);
}
