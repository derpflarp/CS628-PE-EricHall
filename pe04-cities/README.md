# Input

The Cities application accepts information entered by the user through the Add City form. The user provides a city name, country, and population. Each field is required before the form can be submitted. The application also accepts user interaction through navigation links, city links, and delete buttons.

# Process

React manages the city information using state in the main App component. When a city is added, the program creates a unique identifier and stores the new city in the cities array. React Router controls navigation between the Cities List and Add City screens. The `useParams` hook reads a city's identifier from the URL so the correct city details can be displayed. After adding a city, `useNavigate` redirects the user back to the Cities List.

# Output

The application displays a list of all cities that have been added. Selecting a city displays its country and population within the Cities List page. Users can also remove cities using the Delete button. The interface provides a styled header, navigation menu, forms, and city information cards.
