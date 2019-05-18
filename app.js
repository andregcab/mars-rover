// Rover Object Goes Here
var rover = {
  direction: "North",
  x: 0,
  y: 0
}

var grid = [
  [01, 02, 03, "rock", 05, 06, 07, 08, 09, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, "alien", 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [31, 32, "endless pit", 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48, 49, "big rock"],
  [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
  [61, 62, 63, 64, 65, 66, "alien", 68, 69, 70],
  [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
  ["rock", 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [91, 92, 93, 94, 95, 96, 97, "space cow", 99, 100]
]

var travelLog = []

var currentPosition = grid[rover.x][rover.y]

function turnLeft(){
  switch (rover.direction) {
    case "North":
    rover.direction = "West";
    break;
    case "South":
    rover.direction = "East";
    break;
    case "East":
    rover.direction = "North";
    break;
    case "West":
    rover.direction = "South";
  }
  console.log("turning left...");
}

function turnRight(){
  switch (rover.direction) {
    case "North":
    rover.direction = "East";
    break;
    case "South":
    rover.direction = "West";
    break;
    case "East":
    rover.direction = "South";
    break;
    case "West":
    rover.direction = "North";
  }
  console.log("turning right...");
}

function moveForward(){
  if (((rover.x <= 9) && (rover.x >= 0)) && ((rover.y <= 9) && (rover.y >= 0)))  {
    console.log("moving forward...")
    if ((rover.direction === "South") && (rover.x !== 9)) {
    rover.x += 1;
      if ((Number.isInteger(grid[rover.x][rover.y])) === false) {
      console.log("There is a " + grid[rover.x][rover.y] + " in the way!")
      rover.x -=1;
      }
    console.log(grid[rover.x][rover.y]);
    }
    else if ((rover.direction === "North") && (rover.x !==0)) {
    rover.x -= 1;
      if ((Number.isInteger(grid[rover.x][rover.y])) === false) {
      console.log("There is a " + grid[rover.x][rover.y] + " in the way!")
      rover.x +=1;
      }
    console.log(grid[rover.x][rover.y]);
    }
    else if ((rover.direction === "West") && (rover.y !== 0)) {
    rover.y -= 1;
      if ((Number.isInteger(grid[rover.x][rover.y])) === false) {
      console.log("There is a " + grid[rover.x][rover.y] + " in the way!")
      rover.y +=1;
      }
    console.log(grid[rover.x][rover.y]);
    }
    else if ((rover.direction === "East") && (rover.y !== 9)) {
    rover.y += 1;
      if ((Number.isInteger(grid[rover.x][rover.y])) === false) {
      console.log("There is a " + grid[rover.x][rover.y] + " in the way!")
      rover.y -= 1;
      } 
    console.log(grid[rover.x][rover.y]);
    } else {
      console.log("Cant move forward!")
    }
  } else {
    console.log("Cant move forward!")
    }
  travelLog.push(grid[rover.x][rover.y])
}

function moveBackward(){
  if (((rover.x <= 9) && (rover.x >= 0)) && ((rover.y <= 9) && (rover.y >= 0)))  {
    console.log("moving backward")
    if ((rover.direction === "South") && (rover.x !== 0)) {
    rover.x -= 1;
      if ((Number.isInteger(grid[rover.x][rover.y])) === false) {
      console.log("There is a " + grid[rover.x][rover.y] + " in the way!")
      rover.x +=1;
      }
    console.log(grid[rover.x][rover.y]);
    }
    else if ((rover.direction === "North") && (rover.x !== 9)) {
    rover.x += 1;
      if ((Number.isInteger(grid[rover.x][rover.y])) === false) {
      console.log("There is a " + grid[rover.x][rover.y] + " in the way!")
      rover.x -=1;
      }
    console.log(grid[rover.x][rover.y]);
    }
    else if ((rover.direction === "West") && (rover.y !== 9)) {
    rover.y += 1;
      if ((Number.isInteger(grid[rover.x][rover.y])) === false) {
      console.log("There is a " + grid[rover.x][rover.y] + " in the way!")
      rover.y -=1;
      }
    console.log(grid[rover.x][rover.y]);
    }
    else if ((rover.direction === "East") && (rover.y !== 0)) {
    rover.y -= 1;
      if ((Number.isInteger(grid[rover.x][rover.y])) === false) {
      console.log("There is a " + grid[rover.x][rover.y] + " in the way!")
      rover.y +=1;
      }
    console.log(grid[rover.x][rover.y]);
    } else {
      console.log("Cant move forward!")
    }
  } else {
    console.log("Cant move forward!")
    }
  travelLog.push(grid[rover.x][rover.y])
}


function command (cmd) {
  for (i = 0; i < cmd.length; i++) {
    if (cmd[i] === "f") {
      moveForward();
    }
    else if (cmd[i] === "r") {
      turnRight();
    }
    else if (cmd[i] === "l") {
      turnLeft();
    }
    else if (cmd[i] === "b") {
      moveBackward();
    } else {
      console.log("Invalid Command")
    }
  }
}


