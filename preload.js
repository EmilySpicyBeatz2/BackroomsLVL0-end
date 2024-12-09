var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

preload(
  "images/codebox.png",
  "images/codeboxBROKEN.png",
  "images/EXIT.png",
  "images/hammer.png",
  "images/Room4.png",
  "images/wall.png",
  "images/button.png",
  "images/button387.png",
  "AUDIO/woodBreak.mp3",
  "AUDIO/glass.mp3",
  "AUDIO/wompwomp.mp3",
  "AUDIO/42069steps.mp3"
);
