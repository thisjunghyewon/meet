# MEET 

# _What is Meet?_
Meet is built to be a place where web developers from all around the world connect to one another through events in different cities near them. They can use the Meet App to search for events within their city.

## Project Objective
To build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.


## Project Features & Scenarios

**- FEATURE 1: FILTER EVENTS BY CITY**
  
  **Scenario 1:** When user hasn’t searched for a city, show upcoming events from all cities.

  - **Given** user hasn't searched for any city
  
  - **When** the user opens the app
  
  - **Then** the user should see the list of all upcoming events.
    
   **Scenario 2:** : User should see a list of suggestions when they search for a city.

  - **Given** the main page is open
  
  - **When** user starts typing in the city textbox
  
  - **Then**  the user should receive a list of cities (suggestions) that match what they’ve typed.
        
   **Scenario 3:** : User can select a city from the suggested list.

  - **Given** user was typing “Berlin” in the city textbox AND the list of suggested cities is showing.
  
  - **When** the user selects a city (e.g., “Berlin, Germany”) from the list.
  
  - **Then**  their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

**- FEATURE 2:  SHOW/HIDE AN EVENT'S DETAILS**
  
  **Scenario 1:** An event element is collapsed by default.

  - **Given** the user has selected a city that they wanted to browse for events in 
  
  - **When** the user receives the list of events in that city 
  
  - **Then**  all event elements should be collapsed by default.
    
  **Scenario 2:**  User can expand an event to see details

  - **Given** a user has found an event that they are interested in 
  
  - **When** the user clicks on the event element
  
  - **Then**  the event element should expand and the user can see all of its details.

  **Scenario 3:**  User can collapse an event to hide its details

  - **Given** a user has finished reading the details of an event
  
  - **When** the user clicks on the event element again
  
  - **Then**  the event element should collapse and hide its details

**- FEATURE 3:  SPECIFY NUMBER OF EVENTS**
  
  **Scenario 1:** When user hasn’t specified a number, 32 events are shown by default.

  - **Given** a user has not specified a number of events where they want to display
  
  - **When**  the user chooses a city to see events in there
  
  - **Then**   they will by default see 32 events displayed for that city.
    
  **Scenario 2:**  User can change the number of events they want to see

  - **Given** a user has searched for events in a city
  
  - **When** the user wants to specific number of events in that city
  
  - **Then**  they can change the number of events they see displayed.

**- FEATURE 4:  USE THE APP WHEN OFFLINE**
  
  **Scenario 1:** Show cached data when there’s no internet connection

  - **Given** a user has no internet connection
  
  - **When**  nevertheless, the user plays on the app 
  
  - **Then**  the cached data will be available.

    
  **Scenario 2:** Show error when user changes the settings (city, time range)

  - **Given** a user changes their settings
  
  - **When**  the user exits settings or opens the app again 
  
  - **Then**  they will see an error message notifying them that their settings have been changed.

**- FEATURE 5:  ADD AN APP SHORTCUT TO THE HOME SCREEN**
  
  **Scenario 1:** : User can install the meet app as a shortcut on their device home screen.

  - **Given** User is on the main page of the app
  
  - **When**  the user choose to add the app to their device home screen.
  
  - **Then**  a shortcut of the app should be added to my device's home screen  
    
**- FEATURE 6:  DISPLAY CHARTS VISUALIZING EVENT DETAILS**
  
  **Scenario 1:** Show a chart with the number of upcoming events in each city

  - **Given** the user has not selected a city
  
  - **When**  the user wants to compare events between cities 
  
  - **Then**  they should be able to access a chart with the number of upcoming events in each city



## Technical Requirements
  - React application.
  - Built using the TDD technique.
  - Uses the Google Calendar API and OAuth2 authentication flow.
  - Use serverless functions (AWS lambda) for the authorization server instead of using a traditional server.
  - Works on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11.
  - Passes Lighthouse’s PWA checklist.
  - Works offline or in slow network conditions with the help of a service worker.
  - Displays well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.
  - Users can install the app on desktop and add the app to their home screen on mobile.
  - Implements an alert system using an OOP approach to show information to the user.
  - Makes use of data visualization.
  - Covered by tests with a coverage rate >= 90%.
  - Monitored using an online performance monitoring tool.
