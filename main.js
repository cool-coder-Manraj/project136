status = "";

function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
    
    video.hide();
}

function Start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input = document.getElementById("input");
}

function modelLoaded()
{
    console.log("model is loaded");
    status = "true";
}

function draw()
{
    image(video, 0, 0, 480, 380);
}