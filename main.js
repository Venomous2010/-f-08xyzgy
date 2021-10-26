noseX = 0;
noseY = 0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/Hkf0dSpM/Icon-clown-nose.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();


    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses);

}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 45;
        noseY = results[0].pose.nose.y - 45;
        console.log("nose X = " + noseX);
        console.log("node y =" + noseY);

    }
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function draw(){
    image(video, 0, 0, 300, 300);
    //fill(255, 0, 0);
    //stroke(255, 0, 0);
    //circle(noseX, noseY, 20);
    image(clown_nose, noseX, noseY, 100,  100);
    
}

function take_snapshot(){
    file_name = document.getElementById("file_name").value;
    save(file_name + '.jpg')
}