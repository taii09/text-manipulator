function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,450);
    canvas.position(590, 110);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
    background('gray');
}

function modelLoaded()
{
    console.log('poseNet Is Initialzied!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}