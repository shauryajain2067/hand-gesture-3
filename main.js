Webcam.set({
    height:300,
    width:300,
    img_format:'png',
    png_quality:90,
});
Camera=document.getElementById("camera");

Webcam.attach('#Camera');

function take_snapshots(){
    Webcam.snap(function(data_uri){
        document.getElementById("result_snap").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    })
}


classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/OY0YxwhRd/model.json",modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}
console.log("ml5 version :",ml5.version);

function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_name").innerHTML=results[0].label;
    }
    if(results[0].label == "VICTORY"){
document.getElementById("result_gesture").innerHTML="&#9996;";
    }
    if(results[0].label == "thumbs up"){
        document.getElementById("result_gesture").innerHTML="&#128077;";
     }       
     if(results[0].label == "awesome"){
        document.getElementById("result_gesture").innerHTML="&#128076;";
     }    
}

