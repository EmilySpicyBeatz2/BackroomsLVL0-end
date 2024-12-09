var input_div = document.getElementById("myText");

function checkInput() {
  console.log(input_div.value);
  if (input_div.value == "387") {
    console.log("CorrectCode");
    codeBreak();
  } else {
    document.getElementById("nu-uh").play();
    console.log("Nah lil bro, you're not gettin' outa here");
  }
  input_div.value = "";
}

function codeBreak() {
  document.getElementById("cb").src = "images/codeboxBROKEN.png";
  document.getElementById("wall").src = "images/hammer.png";
  setTimeout(changeHtml, 2000);
  document.getElementById("freedom").play();
}

function changeHtml() {
  window.location.href = "1.html";
}

function changeRoom() {
  window.location.href = "https://ww56c9.csb.app/";
}

function yipprs() {
  document.getElementById("yippie").play();
  setTimeout(changeRoom, 4000);
}
