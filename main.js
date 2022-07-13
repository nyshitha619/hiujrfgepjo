status ="";

function setup(){
    canvas = createCanvas(480,380)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(480,380)
    video.hide()
}

function draw(){
image(video,0,0, 480, 380)
}

function start(){
    cocossd = ml5.objectDetector('cocossd', modelLoaded)
    status = document.getElementById("status").innerHTML = "status: Detecting Objects"
}

function modelLoaded(){
    console.log("Model Loaded!")
    status = "true"
}