function setup() {
    video = createCapture(VIDEO);
    video.size(530, 530);

    canvas = createCanvas(550, 550);
    canvas.position(550, 200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#FFC0CB');
}

function modelLoaded() {
    console.log('PoseNet is Initilized');
}

function gotPoses(results) {
 if(results.length > 0) {
      console.log(results);
 }
}