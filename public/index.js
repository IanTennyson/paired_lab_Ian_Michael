var app = function(){
  var canvas = document.getElementById("main-canvas");
  var context = canvas.getContext("2d");
  // var keyBoard = getElementById()
  // var keyPressed = addEventListener("keydown", userKey);
  var xPos = 250
  var yPos = 250

  

  var keyPressed = document.addEventListener('keydown', function(event) {



      if(event.keyCode === 37) {
        console.log('LEFT')
        xPos -= 10;
      }
      else if(event.keyCode === 39) {
        console.log('RIGHT')
        xPos += 10;
      }
      else if(event.keyCode === 38){
        console.log('UP')
        yPos -= 10;
      }
      else if(event.keyCode === 40){
        console.log('DOWN')
        yPos += 10;
      }
      draw(xPos, yPos)
  });

  var draw = function(xPos, yPos){
    context.beginPath();
    context.moveTo(250, 250);
    context.lineTo(xPos, yPos);
    context.stroke();
  }


  
  // var down = addEventListener("keydown", userPressedDown);
  // var left = addEventListener("keydown", userPressedLeft);
  // var right = addEventListener("keydown", userPressedRight);

}



window.addEventListener("load", app)