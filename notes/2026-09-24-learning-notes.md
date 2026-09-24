# Learning Notes — September 24, 2026

What I worked on?

-Created the BINGO Card view for BINGoals.
-Built the 3 × 3 CSS Grid layout for the BINGO squares.
-Made the card responsive using 'width', 'max-width', and 'clamp()'.
-Used 'aspect-ratio: 1 / 1' to keep the BINGO squares square.
-Debugged an issue where a long goal text caused one of the grid items to become a different size.
-Used min-width: 0 and min-height: 0 to allow the grid items to shrink properly.

What did I learn?

-CSS Grid items have automatic minimum sizing that can sometimes prevent them from shrinking as expected.
'min-width: 0' and 'min-height: 0' can allow grid items to shrink within their grid tracks instead of letting their content determine a larger minimum size.
-'aspect-ratio: 1 / 1' keeps an element's width and height equal.
-clamp() can make font sizes responsive without needing multiple media queries.
-Responsive design isn't only about changing the layout; the content inside the layout may also need to respond to changes in screen size.

- I also practiced distinguishing between layout and visual styling.

Today's work established the BINGO card's structure and responsive behavior, but the colors, typography, border radius, and other visual details still need to be styled.

What was difficult/confusing?

The most confusing part was understanding why min-width: 0 and min-height: 0 were necessary. I initially removed them because I didn't fully understand what they were doing.

After debugging the grid, I understood that the long text in one square was creating minimum-size pressure on the grid item. Allowing the item to shrink made it possible for 'aspect-ratio: 1 / 1' to keep all of the squares square.

What should I practice next?

-Continue practicing responsive CSS and CSS Grid.
-Practice recognizing the difference between layout problems and content-sizing problems.
-Continue building the BINGoals BINGO card.
-Next, add the visual styling to make the BINGO card feel like a finished part of the application.
