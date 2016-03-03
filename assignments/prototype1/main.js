//Javascript

//call to jQuery ready function
//make sure html and css are loaded

var soundID = "Thunder";

loadSound();
    
playSound();

$(document).ready(function(){
    
    console.log('ready')
    
    
    

      function loadSound () {
        createjs.Sound.registerSound("piano_C_sharp.mp3", soundID);
      }

      function playSound () {
        createjs.Sound.play(soundID);
      }
    
})