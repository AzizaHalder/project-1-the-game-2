// Images
const gameBoard = document.querySelector("#gameBoard");
const tourist = document.querySelector(".tourist");

// Global variables
let positionY = null;
let positionX = null;
let isJumping = false;
let gravity = null;
let controls = [];
let ratsArray = [];
let timer;
let groundHeight = 0;
let stopJumping;
let frames = 0;
let number = 0;

// Move tourist
function jump() {
  //moveUp
  if (isJumping) return;
  timer = setInterval(() => {
    if (positionY >= groundHeight + 10) {
      clearInterval(timer);
      stopJumping = setInterval(() => {
        if (positionY <= groundHeight + 10) {
          clearInterval(stopJumping);
          isJumping = false;
        }
        positionY -= 10;
        tourist.style.bottom = positionY + "px";
      }, 90);
    }
    positionY += 100;
    tourist.style.bottom = positionY + "px";
    isJumping = true;
  }, 20);
}

jump();

// Obstacles
function createRat() {
  let rat = document.createElement("img");
  rat.setAttribute("src", "./images/rat2.png");
  rat.className = "rat";
  rat.style.right = 10 + "px";
  rat.style.height = 80 + "px";

  gameBoard.appendChild(rat);

  const ratObject = {
    domElement: rat,
    posRight: 10,
    ratHeight: 80,
  };

  ratsArray.push(ratObject);
}

const checkCollision = setInterval(() => {
  ratsArray.forEach((rat) => {
    // check that they are going off the screen
    rat.posRight += 10;
    rat.domElement.style.right = rat.posRight + "px";

    const ratRelativePosToTourist = 1500 - rat.posRight;
    const touristBottomPos = Number(tourist.style.bottom.replace("px", ""));

    if (
      touristBottomPos <= 10 &&
      rat.posRight <= 1480 &&
      rat.posRight >= 1340
    ) {
      clearInterval(checkCollision);

      document.getElementById("gameOver").style.display = "block";

      // alert(
      //   "You got attacked by rats, sorry, no kebab for you. Press OK to restart."
      // );
      // location.reload();
      let ratsArray = [];
      // console.log("collision");
    }
  });
}, 75);

setInterval(() => {
  createRat();
}, 2000);

function countdown() {
  const timeLeft = document.querySelector("#timer");
  let seconds = 90;

  const countDown = setInterval(() => {
    seconds--;
    timeLeft.innerHTML = `${seconds}`;
    if (seconds == 0) {
      clearInterval(countDown);
      document.getElementById("gameWin").style.display = "block";
      clearInterval(checkCollision);
    }
  }, 1000);
}

countdown();

document.addEventListener("keydown", (e) => {
  if (e.key == " " || e.key == "ArrowUp") jump();
});
