import React from "react"
import { screen, fireEvent } from "@testing-library/react"
import userEvent from '@testing-library/user-event';
import { render } from "./test-utils"
import { App } from "./App"

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

test("renders track finder home page", () => {
  render(<App />)
  const headerText = screen.getByText(/Track Finder/i)
  expect(headerText).toBeInTheDocument()
})

test("search box should be displayed and editable", async () => {
   render(<App />);

   const searchBox = screen.getByPlaceholderText("Search here...");
   expect(searchBox).not.toBeDisabled();
   userEvent.click(searchBox);
   fireEvent.change(searchBox, {target: {value: 'eminem'}})
   expect(searchBox).toHaveDisplayValue("eminem");
})