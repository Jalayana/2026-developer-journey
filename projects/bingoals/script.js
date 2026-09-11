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

function countCompletedGoals(goals) {
  let counter = 0;

  for (let i = 0; i < goals.length; i++) {
    if (goals[i].status === "completed") {
      counter++;
    }
  }

  return counter;
}
const result = countCompletedGoals(goals);

const completedGoalsElement = document.querySelector("#completed-goals");
completedGoalsElement.textContent = `${result} of ${goals.length} goals completed`;

const progressBarElement = document.querySelector("#completed-goals-progress");

progressBarElement.value = result;
