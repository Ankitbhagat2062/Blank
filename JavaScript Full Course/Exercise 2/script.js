// Question Use JavaScript to create a game of snake , water and gun. The Game should ask you to enter S , W or G . The computer should be able to generate S, W or G and declare win or loose using alert use confirm and prompt wherever required.


let user1 = prompt(" Player 1 please Enter S, W or G");

let comp = Math.ceil(Math.random() * 3);
console.log(comp)

if (comp==3) {
  comp = "G"
  alert("Computer choose G");
  if (user1 == "S" && comp == "G") {
    console.log("Gun Kills the Snake So the Computer Wins")
  }
  if (user1 == "W" && comp == "G") {
    console.log("Gun cannot Kill the Water So the Player Wins")
  }
  if (user1 == "G" && comp == "G") {
    console.log("Gun vs Gun So its a Draw")
  }
}

if (comp==1) {
  comp = "S"
  alert("Computer choose S")
  if (user1 == "S" && comp == "S") {
    console.log("Snake vs Snake So its a Draw")
  }
  if (user1 == "G" && comp == "S") {
    console.log("Gun Kills the Snake So the Player Wins")
  }
  if (user1 == "W" && comp == "S") {
    console.log("Snake Drinks the Water So the Computer Wins")
  }  
}
if (comp==2) {
  comp = "W"
  alert("Computer choose W")
  if (user1 == "W" && comp == "W") {
    console.log("Water vs Water So its a Draw");
  }
  if (user1 == "S" && comp == "W") {
    console.log("Snake Drinks the Water So the Player Wins")
  }
  if (user1 == "G" && comp == "W") {
    console.log("Gun cannot Kill the Water So the Computer Wins")
  }
}