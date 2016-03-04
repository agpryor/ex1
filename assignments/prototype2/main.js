//Javascript

var soundID = "Thunder";
var a = 65;


loadSound();
    
playSound();

$(document).ready(function(){
    
    console.log('ready')
    
        function setup(){
	       var myCanvas=createCanvas(800, 250);
	       //link to id mySketch from header
	       myCanvas.parent('mySketch');
        }

    

        function loadSound () {
            createjs.Sound.registerSound("piano_C_sharp.mp3", soundID);
        }

        function playSound () {
            createjs.Sound.play(soundID);
        }
    
        function event.onkeydown(a){
            
            createjs.Sound.registerSound("piano_C_sharp.mp3", soundID);
    
            
        document.getElementById("demo").addEventListener("keypress", myFunction);

        function myFunction() {
            document.getElementById("demo").style.backgroundColor = "red";
}
});