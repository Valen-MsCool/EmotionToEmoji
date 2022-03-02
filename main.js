prediction1 = "";
prediction2 = "";

Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
Webcam.snap(function(data_uri){
   document.getElementById('result').innerHTML='<img id="captured_image" src="'+data_uri+'">';
});
}
console.log("ml5 version: ", ml5.version);

classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/5mxzZHkpx/model.json',modelLoaded);

function modelLoaded(){
console.log("Model Loaded");
}

function speak(){
var synth = window.speechSynthesis;
var speakdata1 = "your first prediction is " + prediction1;
var speakdata2 = "and your second prediction is" + prediction2;
var utterThis = new SpeechSynthesisUtterance(speakdata1 + speakdata2);
synth.speak(utterThis);
}