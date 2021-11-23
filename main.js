nosex=0;
nosey=0;
difference=0;
rightwristX=0;
leftwristX=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(450,450);
    canvas.position(560,100);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    document.getElementById("square_side").innerHTML="Width and Height of a sqaure will be= "+difference;
    background('#24F9D7');
    fill('#F30B7B');
    stroke('#0622F9');
    square(nosex, nosey, difference);
}

function modelLoaded()
{
    console.log('Model has been loaded');
}

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("nosex= " + nosex +"nosey= "+ nosey);

    rightwristX=results[0].pose.rightWrist.x;
    leftwristX=results[0].pose.leftWrist.x;
    difference= floor(leftwristX-rightwristX);
    console.log("leftwristx= " + leftwristX + "rightwristx " +rightwristX+ "difference= "+ difference);

}
}
