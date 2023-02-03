function play() {
  const options = ["Rock", "Paper", "Scissors"];
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  const userChoice = options[Math.floor(Math.random() * options.length)];
  console.log(`Computer choice: "${computerChoice}"`);
  console.log(`User choice: "${userChoice}"`);

  if (computerChoice === userChoice) {
    console.log("It's a tie!");
  } else if (
    (computerChoice === "Rock" && userChoice === "Scissors") ||
    (computerChoice === "Scissors" && userChoice === "Paper") ||
    (computerChoice === "Paper" && userChoice === "Rock")
  ) {
    console.log("Computer wins!");
  } else {
    console.log("User wins!");
  }
}

play();
