SpeechRecognition = window.webkitSpeechRecognition;
Recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}
Recognition.onresult = function(event){
    console.log(event);
    content = event.results[0][0].transcript;
    console.log(content)
    document.getElementById("textbox").innerHTML = content;
    speak();
    if (content == "take my selfie")
    {
        speak();
        console.log("Taking Selfie")
    
    }
} 
function speak()
{
var synth = window.speechSynthesis;
Speak_data = "Taking Selfie In 5 Seconds" ;
utterThis = new SpeechSynthesisUtterance(Speak_data);
synth.speak(utterThis);
Webcam.attach(camera);

setTimeout(function(){
 take_Snapshot();   
 save();
},5000);
}

function save(){
    file = document.getElementById("link");
    img = document.getElementById("Selfie").src;
    file.href = img;
    file.click();
}

function take_Snapshot()
{
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = "<img id='Selfie' src='"+data_uri+"'>";
});
}

Webcam.set({
width : 360,
height :250,
image_format : 'png',
png_quality : 100
});
camera = document.getElementById("camera");
