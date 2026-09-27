# Learning Notes — September 27th, 2026

What did I work on?

I made the BINGO card dynamic using JavaScript.

I created separate functions with different responsibilities:

-One function creates a goal BINGO square.
-One function creates the special Free square.
-One function renders the generated squares in the DOM.

I also separated the BINGO card JavaScript from the dashboard JavaScript so that each page only runs the code it needs.

What did I learn?

I learned how to use several DOM methods and properties:

-'document.createElement()'creates a new DOM element.
-'.className' assigns a class to an element.

- '.append()' adds an element as a child of another element.

I learned more about using functions to break a larger task into smaller responsibilities. Instead of having one large function responsible for creating the entire BINGO card, I created smaller functions that each handle one particular job.

I practiced having one function call another function and using the value returned from that function.

I practiced 'decomposition': breaking a larger programming problem into smaller problems that are easier to solve.

For the BINGO card, I can think about the structure as:

BINGO card → squares → goal text`

Instead of immediately trying to solve "How do I create the BINGO card?", I can first ask, "What smaller pieces make up the BINGO card?"

I also reinforced the idea of separating data from presentation. The eight actual goals remain in the goals array, while the Free square is part of the presentation of the BINGO card rather than being treated as an actual goal.

What was difficult or confusing?

The most difficult part was figuring out the logic and deciding how to break the problem down.

I knew I needed JavaScript to create the BINGO card dynamically, but I did not initially know that I should start by figuring out how to create one BINGO square and then use that to build the entire card.

I also had to work through some confusion about how functions work together and what each function should be responsible for.

I need to continue practicing organizing my thoughts before coding: figuring out exactly what I want JavaScript to do, breaking the problem into smaller steps, and making sure I don't "cross my wires" while working through the logic.

Also, originally, after I added the 8 goals to the webpage, I completely forgot about the "free" square. I thought that adding the "free" square would be something way above what I could do. I considered just having 9 goals, but I wanted to stick to my original design and after some research, I found out that it was not a difficult thing to add.

What should I practice next?

I should practice decomposing programming problems before writing code.

Before starting a feature, I should ask:

1. What is the final thing I need?
2. What smaller pieces make up that thing?
3. Which pieces are similar enough to reuse?
4. What should each function be responsible for?

I also need more practice deciding when something deserves its own function and tracing how functions work together.

I should continue practicing DOM manipulation, especially creating elements, modifying them, and adding them to the DOM.

Most importantly, I want to practice developing the ability to look at a problem and determine the smaller steps myself before relying on guidance.
