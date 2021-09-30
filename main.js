Webcam.set({
    width: 280,
    height: 200,
    image_format: 'png',
    png_quality: 90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML="<img id='snapshot' src='"+data_uri+"'>";

    });
}

console.log("ml5 version", ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/q1Vsmjiof/model.json', modeloaded);




function modeloaded(){
    console.log('modeloaded');
}

function check(){
    img=document.getElementById("snapshot");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_name").innerHTML=results[0].label;
        document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}
