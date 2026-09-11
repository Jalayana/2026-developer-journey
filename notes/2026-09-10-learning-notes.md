# Learning Notes — September 10, 2026

> Restarting regular learning notes. Previous learning from the past two months was not documented, but progress is reflected in projects, commits, and completed challenges.

## What I worked on

### BINGoals

- Completed the basic HTML structure for the dashboard.
- Added CSS styling for the dashboard.
- Used CSS Grid for the dashboard layout.
- Added responsive styling with a media query.
- Practiced deciding when to use Grid vs. Flexbox.
- Reviewed and polished the dashboard CSS.

### JavaScript

- Practiced the accumulator pattern.
- Practiced looping through an array of objects.
- Practiced accessing object properties inside a loop.
- Practiced using a Boolean property directly in an `if` condition.
- Practiced the early return pattern.
- Practiced writing pseudocode before coding.

## Coding Challenges given to me by ChatGPT

### Count Completed Goals

- Used a counter to accumulate the number of completed goals.
- Key pattern: loop → check condition → increment counter → return counter.

### Find In-Progress Goal

- Used a loop to search through an array of objects.
- Returned the first goal that matched the condition.
- Learned that `return` immediately exits the function.
- If no goal matches, the function returns `undefined`.

## Things I learned / reinforced

- An accumulator keeps track of a result while a loop continues processing items.
- An early return is useful when I only need the first matching item.
- If a property already contains a Boolean, I can use it directly without creating a separate variable, though at times, a separate variable can make the code look neater:
  `if (goal.completed)`
- Good variable names communicate what data represents. `goals` is more meaningful than `arr` when the array contains goals.
- Pseudocode should describe what the program needs to do, rather than simply naming JavaScript constructs.

## Things to continue practicing

- JavaScript arrays and objects
- Looping patterns
- Accumulators vs. early returns
- Writing clearer pseudocode
- Making BINGoals interactive with JavaScript

## Reflection

I completed the basic dashboard structure and responsive styling for BINGoals. I also practiced with ChatGPT two important JavaScript patterns: the accumulator pattern and early return. I'm also doing other coding challenges on CodeWars.

I noticed that I am getting better at translating pseudocode into JavaScript and explaining why my code works, rather than just writing code that happens to work.
