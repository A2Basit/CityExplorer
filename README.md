# Task: City Explorer
## Objective
- Create a web application called "City Explorer" that fetches and displays information about various cities using modern JavaScript features.
This exercise will help you practice concepts like let/const, arrow functions, template literals, destructuring, async/await, and filter, map.
# Modules:
- Api.js:
This files fetches data from the https://jsonplaceholder.typicode.com/users using JSONPlaceholder API and stores it in the json file format. From which, the useful information like names and cities are extracted and stored in cityInformation object. 
- Ui.js:
This file is used to update the UI based on the city data. It uses two function. displaycityitems and render. Displaycityitems is used display names and cities in a list format and render is used to render information into the list format using map  function.
- App.js:
It contains the main logic of fetching data into our application. On DOMcontentload, it calls and event listener which loads data into our application and if you want to search based on the user input, you can do this by using the filter function.
- Index.html:
This is the html file for our application
- Styles.css:
It contains the most basic styles applied to our application.
