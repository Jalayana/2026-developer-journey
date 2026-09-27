const goals = [
  {
    name: "Read 5 books",
    status: "completed",
  },
  {
    name: "Save $10,000",
    status: "in-progress",
  },
  {
    name: "Change hairstyle",
    status: "completed",
  },
  {
    name: "Try calisthenics",
    status: "not-started",
  },

  {
    name: "Visit a friend",
    status: "completed",
  },

  {
    name: "Start a new hobby",
    status: "not-started",
  },

  {
    name: "Take a solo trip",
    status: "not-started",
  },

  {
    name: "Make a 1-Second a day video diary for 1 month",
    status: "not-started",
  },
];

//Creates an individual bingo square
function createBingoSquare(goal) {
  const bingoSquare = document.createElement("div");
  bingoSquare.className = "bingo-square";

  const goalText = document.createElement("p");
  goalText.textContent = goal.name;

  bingoSquare.append(goalText);

  return bingoSquare;
}

function createFreeSquare() {
  const freeSquare = document.createElement("div");
  freeSquare.className = "bingo-square";

  const freeSquareText = document.createElement("p");
  freeSquareText.textContent = "Free";

  freeSquare.append(freeSquareText);

  return freeSquare;
}
function createBingoCard(goals) {
  const bingoCardElement = document.querySelector(".bingo-card");

  for (let i = 0; i < goals.length; i++) {
    if (i === 4) {
      bingoCardElement.append(createFreeSquare());
    }

    bingoCardElement.append(createBingoSquare(goals[i]));
  }
}
createBingoCard(goals);
