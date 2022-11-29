/*
TO DO
- make tourist appear in correct position on board 
- give jump functionality to tourist
- create rat obstacles 
- have rat obstacles moving from right side of screen 
*/
/*
function backgroundImage() {
  const gameBackground = document.createElement("img");
  gameBackground.setAttribute("src", "./images/park-cityscape.jpg");
  gameBackground.setAttribute("width", "1000");
  gameBackground.setAttribute("height", "500");
  gameBackground.setAttribute("alt", "Cartoon drawing of a park / cityscape");
  gameBackground.setAttribute("id", "parkscape");
  document.body.appendChild(gameBackground);
}

window.backgroundImage = backgroundImage;
backgroundImage();

function displayTourist() {
  const tourist = document.createElement("img");
  tourist.setAttribute("src", "./images/tourist.png");
  tourist.setAttribute("height", "200");
  tourist.setAttribute("alt", "Cartoon of casually dressed woman");
  tourist.setAttribute("id", "touristPlayer");
  document.body.appendChild(tourist);
}

window.displayTourist = displayTourist;
displayTourist();
*/

// Global variables
// Get tourist image
const tourist = document.querySelector("#touristPlayer");
let positionY = 0;
let controls = [];
// let position = 0;

// Move tourist
function jump() {
  //   let timer = setInterval(() => {
  //moveUp
  console.log("up");
  positionY += 20;
  tourist.style.bottom = positionY + "px";
  console.log(positionY);

  // stop moveUP

  //   if (positionY == 180) {
  // clearInterval(timer);
  //   return (positionY = 0);
  console.log("down");
  //   positionY -= 20;
  //   tourist.style.bottom = positionY + "px";
  //   }
  //   }, 200);

  //   Player can 'jumpUp' with space bar
  document.addEventListener("keydown", (e) => {
    if (e.key == " " && positionY < 180) {
      jump();
    }
  });
  console.log(positionY);

  // player returns to 'bottom' on key up
  document.addEventListener("keyup", (e) => {
    if (!e.key == " " && !positionY < 180) {
      jumpDown();
    }
  });
}

// giving 0 value again
function jumpDown() {
  if (positionY == 180) {
    tourist.style.bottom = 0;
  }
}

jump();

// Assign jump() functionality to spacebar
function gameControl() {}

gameControl();
// Player stops pressiong

// "Listening" for spacebar
// document.addEventListener("keydown", () => {
//   gameControl;
// });
// document.addEventListener("keyup", );
