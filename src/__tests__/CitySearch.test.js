import { render } from "@testing-library/react";
import { extractLocations, getEvents } from "../api";
import userEvent from "@testing-library/user-event";
import CitySearch from "../components/CitySearch";

describe("<CitySearch /> component", () => {
  let CitySearchComponent;
  beforeEach(() => {
    CitySearchComponent = render(<CitySearch />);
  });
  test("renders text input", () => {
    const cityTextBox = CitySearchComponent.queryByRole("textbox");
    expect(cityTextBox).toBeInTheDocument();
    expect(cityTextBox).toHaveClass("city");
  });

  test("suggestions list is hidden by default", () => {
    const suggestionList = CitySearchComponent.queryByRole("list");
    expect(suggestionList).not.toBeInTheDocument();
  });

  test("renders a list of suggestions when city textbox gains focus", async () => {
    const user = userEvent.setup();
    const cityTextBox = CitySearchComponent.queryByRole("textbox");
    await user.click(cityTextBox);
    const suggestionList = CitySearchComponent.queryByRole("list");
    expect(suggestionList).toBeInTheDocument();
    expect(suggestionList).toHaveClass("suggestions");
  });

  test("updates list of suggestions correctly when user types in city textbox", async () => {
    // const user = userEvent.setup();
    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);
    CitySearchComponent.rerender(<CitySearch allLocations={allLocations} />);

    // user types "Berlin" in city textbox
    const cityTextBox = CitySearchComponent.queryByRole("textbox");
    await userEvent.type(cityTextBox, "Berlin");

    // filter allLocations to locations matching "Berlin"
    const suggestions = allLocations
      ? allLocations.filter((location) => {
          return (
            location.toUpperCase().indexOf(cityTextBox.value.toUpperCase()) > -1
          );
        })
      : []; //the array that will only contain locations matching the query typed by the user in the city input field.

    // get all <li> elements inside the suggestion list
    const suggestionListItems = CitySearchComponent.queryAllByRole("listitem");
    expect(suggestionListItems).toHaveLength(suggestions.length + 1);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(suggestionListItems[i].textContent).toBe(suggestions[i]);
    } //Then, the rendered text in each list item is checked (using a for loop) to ensure that it matches the corresponding value on the suggestions array.
  });

  test("renders the suggestion text in the textbox upon clicking on the suggestion", async () => {
    // const user = userEvent.setup();
    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);
    CitySearchComponent.rerender(<CitySearch allLocations={allLocations} />);

    const cityTextBox = CitySearchComponent.queryByRole("textbox");
    await userEvent.type(cityTextBox, "Berlin");

    // the suggestion's textContent look like this: "Berlin, Germany"
    const BerlinGermanySuggestion = CitySearchComponent.queryAllByRole(
      "listitem"
    )[0];

    await userEvent.click(BerlinGermanySuggestion);

    expect(cityTextBox).toHaveValue(BerlinGermanySuggestion.textContent);
  });
});
