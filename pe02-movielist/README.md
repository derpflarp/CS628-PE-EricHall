# Input

The input for this program was taken from PE02's screenshots and added to. Each movie has a title, genre, and release year. The user can also interact with the page by choosing a genre from the dropdown menu or clicking on one of the movie cards. Those actions tell the application what to display or which movie was selected.

# Process

The application is built with React using a functional component and the useState hook. When the page loads, it displays every movie in the list. If the user selects a genre from the dropdown, the movie array is filtered so that only movies in that genre are shown. If "All Genres" is selected, the full list comes back. Each movie card also has a click event attached to it, so clicking a movie pops up an alert with its title. CSS is used to make everything easier to read and a little more modern looking.

# Output

The output is a webpage that displays a list of movies with their title, genre, and release year. The list updates automatically whenever the user changes the selected genre. Clicking on any movie displays an alert showing its title. Overall, the application demonstrates React components, state management, event handling, filtering data, and basic CSS styling in a simple movie browser.