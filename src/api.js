/*
this to handle your API calls in the future. 
For now, however, you’ll use it to store the extractLocations function, 
which will extract event locations out of an array of events and
remove duplicates. Also, the file will contain the getEvents function,
which will return the mockData representing the list of all events.
*/

import mockData from "./mock-data";

/**
 *
 * @param {*} events:
 * The following function should be in the “api.js” file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */

export const extractLocations = (events) => {
  const extractedLocations = events.map((event) => event.location);
  const locations = [...new Set(extractedLocations)];
  return locations;
};

/**
 *
 * This function will fetch the list of all events
 */
export const getEvents = async () => {
  return mockData;
};
