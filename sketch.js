var charlie;
let carPositionY = [];



function preload() {
    charlie = loadImage("kirk.png");
}
//let fade;
let carX = 50;
let lineXone = 0;
let lineYone = 0;

let truckX = 100;
let dTruckX = 1;


let star;

function setup() {
    createCanvas(800, 600);

}

function draw() {


    startup();
    //datastructures();
    //variables();
    //conditionals();
    // for(i = 0; i < 1000; i++){
    //     image(charlie,random(0, 800), random(0, 600), random(50, 200), random(50, 200));
    // }


    for (i = 0; i < 10; i++) {
        carPositionY.push(random(420, 470));
        cars(800 + (i * 100), carPositionY[i]);
    }
}





