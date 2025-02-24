# #Input
The input consists of data about cities. Users can add a new city by providing the following details through a form:

Name: Seattle
Country: USA
Population: 797,700

#Process
When a user submits a new city, the data is collected through a form. The city information is temporarily stored in the app's state After adding a city, the user is redirected back to the cities list page. When a user clicks on a city name in the list, the app uses the useParams hook from React Router to fetch the city’s details and display them dynamically on the page.

#Output
The output is the display of
A confirmation message once a new city is successfully added.
