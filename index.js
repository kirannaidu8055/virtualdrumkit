//Detecting button press
var allButtonsInDrum = document.querySelectorAll(".drum");
for(var i=0;i<allButtonsInDrum.length;i++){
allButtonsInDrum[i].addEventListener("click",function(){
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  animateDrumSet(buttonInnerHTML);
});
}

// Detecting keyboard press
var action = document.addEventListener("keydown", function(event){
    var actionKey = event.key;
    makeSound(actionKey);
    animateDrumSet(actionKey);
  });

//Making Sound
function makeSound(actionKey){
  var audio;
  switch (actionKey) {
    case "w":
      audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
      case "a":
      audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      case "s":
      audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      case "d":
      audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      case "j":
      audio = new Audio('sounds/snare.mp3');
      audio.play();
      case "k":
      audio = new Audio('sounds/crash.mp3');
      audio.play();
      case "l":
      audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
    default:console.log(actionKey);
  }
}

//Animation
function animateDrumSet(animationItem){
var activeButton = document.querySelector("."+animationItem);
activeButton.classList.add("pressed");
setTimeout(function() {
  activeButton.classList.remove("pressed");
}, (100));
}
