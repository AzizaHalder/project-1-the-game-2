/*
TO DO
- make tourist appear in correct position on board 
- give jump functionality to tourist
- create rat obstacles 
- have rat obstacles moving from right side of screen 
- Populate read me 
- win 
- lose / start again 
- start button begins game / rats attack
- rats in different sizes?
- tourist can only start jumping when game has started

*/

// Global variables
// Get tourist image
const gameBoard = document.querySelector("#gameBoard");
const tourist = document.querySelector("#touristPlayer");
// Get rat image
const rat = document.querySelector(".ratObstacle");
let positionY = null;
let positionX = null;
let isJumping = false;
let controls = [];
let ratsArray = [];
let timer;
let groundHeight = 0;
let stopJumping;
let frames = 0;
let number = 0;

// Move tourist
function jump() {
  //
  //moveUp
  if (isJumping) return;
  timer = setInterval(() => {
    console.log("up");
    if (positionY >= groundHeight + 10) {
      clearInterval(timer);
      stopJumping = setInterval(() => {
        if (positionY <= groundHeight + 10) {
          clearInterval(stopJumping);
          isJumping = false;
        }
        positionY -= 5;
        tourist.style.bottom = positionY + "px";
      }, 50);
    }
    positionY += 80;
    tourist.style.bottom = positionY + "px";
    isJumping = true;
    console.log(positionY);

    // stop moveUP

    //   if (positionY == 180) {
    // clearInterval(timer);
    //   return (positionY = 0);
    console.log("down");
    //   positionY -= 20;
    //   tourist.style.bottom = positionY + "px";
    //   }
  }, 50);
}
jump();

function startGame() {}

// Obstacles
// class Rats {
//   constructor(posX, posY, width, height) {
//     this.posX = posX;
//     this.posY = posY;
//     this.width = width;
//     this.height = height;
//     this.img = this.createRat();
//   }

//   createRat() {
//     const rat = newImage();
//     rat.src = "./images/rat.png";
//     return rat;
//   }
// }

// function obstacleRat() {
//   let handleInterval = null;
//   positionX = 0;
//   clearInterval(handleInterval);
//   handleInterval = setInterval(() => {
//     if (positionX == gameBoard.width) {
//       clearInterval(id);
//     } else {
//       positionX++;
//       rat.style.right = positionX + "px";
//     }
//   }, 5);
// }

// document.createElement('img').src('../images/.rat2.png')

function spawnObstacles() {
  frames += 1;
  if (frames % 120 == 0) {
    // document.createElement("img").setAttribute("class", "rat");
    // console.log(document.createElement("img").setAttribute("class", "rat"));
    // all the styling rat, class array except for picture
    // if condition, if true
    // for loop, less than class name i++
    // same logic that makes it move
    // rat images hat have no source in html
  }
}

setInterval(() => {
  spawnObstacles();
}, 20);
