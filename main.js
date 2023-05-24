function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,200,150,200,200);
    fill("green");
    stroke("red");
    rect(70,45,500,20);
    rect(70,420,500,20);
    rect(40,15,20,420);
    rect(580,15,20,420);




    fill("red")
    stroke(0,128,0)
    circle(50,50,70);
    circle(590,50,70);
    circle(590,430,70);
    circle(50,430,70);
    



}
function take_snapshot(){
    save("pic.jpg");
}
