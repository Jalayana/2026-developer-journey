# Learning Notes — September 14, 2026

What I worked on

Made the Goal Stats section of BINGoals dynamic. I created a getGoalStats() function that loops through the goals array and counts completed, in-progress, and not-started goals. Then I used the returned statistics to update the corresponding values in the DOM.

What I learned/reinforced 
A function can return an object, not just a single value.
Variables created inside a function have local scope, so they cannot be accessed directly outside that function.
I can use the value returned from a function by assigning it to a variable, e.g. const stats = getGoalStats(goals);.

**An object can be used as an accumulator when I need to track multiple related values during a loop.
I can access individual properties of the returned object using dot notation, such as stats.completed.
I learned about separation of responsibilities: getGoalStats() handles the logic/calculations, while the DOM code handles displaying the results.


What was difficult/confusing?

Understanding how stats could be used outside of getGoalStats() was initially confusing because the stats object was created inside the function. I learned that the object itself can be returned, and I can store that returned object in another variable outside the function.

What should I practice next?

Continue practicing functions that process arrays and return useful data, especially returning objects with multiple pieces of information. I also want to practice debugging and testing my code instead of only checking whether it works in the expected situation.